import 'whatwg-fetch';
import { Dictionary } from 'ts-depot';
import { ArtisanError, ArtisanErrorOptions } from './error-utils';
import { appendSearchParams, SearchParams } from './history-utils';

export interface FetchOptions extends Omit<RequestInit, 'headers'> {
  prefix?: string;
  suffix?: string;
  params?: Dictionary;
  headers?: Dictionary;
  payload?: any;
  payloadType?: 'json' | 'form' | 'multipart' | 'raw';
  throwNonOk?: boolean;
  dataHandler?: string | FetchDataHandler;
}

export type FetchDataHandler = (
  res: FetchResult,
  executor: (res: FetchResult, type: string) => Promise<any>
) => Promise<any>;

export interface FetchRequest extends Omit<RequestInit, 'headers'> {
  headers?: Dictionary;
  url: string;
}

export interface FetchResult<T = any> {
  request: FetchRequest;
  response: Response;
  data: T;
}

export type Fetch<O extends FetchOptions = FetchOptions> = (url: string, options: O) => Promise<FetchResult>;

export interface FetchResponseErrorOptions extends ArtisanErrorOptions {
  request: FetchRequest;
  response: Response;
  data: any;
}

export class FetchResponseError extends ArtisanError {
  code: string;
  request: FetchRequest;
  response: Response;
  data: any;

  constructor(code: string, message: string, options: FetchResponseErrorOptions) {
    super(message, options);
    this.request = options.request;
    this.response = options.response;
    this.data = options.data;
    this.code = code;
  }
}

const FETCH_KEYS: Array<keyof FetchOptions> = [
  'body',
  'cache',
  'credentials',
  'headers',
  'integrity',
  'keepalive',
  'method',
  'mode',
  'redirect',
  'referrer',
  'referrerPolicy',
  'signal',
  'window'
];

export class FetchClient<O extends FetchOptions = FetchOptions> {
  private constructor(private _fetch: Fetch<O>) {}

  static create(): FetchClient<FetchOptions> {
    return this.build(async (url, options) => {
      const opts: RequestInit = {};

      for (const key of FETCH_KEYS) {
        if (key in options) {
          (opts as any)[key] = options[key];
        }
      }

      const response: Response = await fetch(url, opts);

      return {
        request: { ...opts, url },
        response,
        data: undefined
      };
    });
  }

  static build<NO extends FetchOptions = FetchOptions>(fetch: Fetch<NO>): FetchClient<NO> {
    return new FetchClient(fetch);
  }

  with<NO extends FetchOptions = O>(middleware: (fetch: Fetch<O>) => Fetch<NO>): FetchClient<NO> {
    return new FetchClient(middleware(this._fetch));
  }

  withAffix(opts?: Pick<FetchOptions, 'prefix' | 'suffix'>): FetchClient<O> {
    return new FetchClient(async (url, options) => {
      const prefix = options.prefix != null ? options.prefix : opts?.prefix;
      const suffix = options.suffix != null ? options.suffix : opts?.suffix;

      if (prefix) {
        url = `${prefix}${url}`;
      }

      if (suffix) {
        const idx = url.indexOf('?');

        if (idx < 0) {
          url = `${url}${suffix}`;
        } else {
          url = `${url.slice(0, idx)}${suffix}${url.slice(idx)}`;
        }
      }

      return this._fetch(url, options);
    });
  }

  withParams(opts?: Pick<FetchOptions, 'params'>): FetchClient<O> {
    return new FetchClient(async (url, options) => {
      let params: object | undefined;

      if (options.params || opts?.params) {
        params = { ...opts?.params, ...options.params };
      }

      if (params) {
        url = appendSearchParams(url, params);
      }

      return this._fetch(url, {
        ...options,
        params
      });
    });
  }

  withPayload(opts?: Pick<FetchOptions, 'payloadType'>): FetchClient<O> {
    return new FetchClient(async (url, options) => {
      const { method, payload } = options;

      if (method && ['post', 'put', 'patch', 'delete'].indexOf(method.toLowerCase()) === -1) {
        return this._fetch(url, {
          ...options,
          body: undefined
        });
      }

      const payloadType = options.payloadType || opts?.payloadType || 'raw';

      let headers: object = { ...options.headers };
      let body: any = options.body;
      console.log('----payloadType,', body, options.payloadType, opts?.payloadType, payloadType);
      if (payload) {
        if (payloadType === 'json') {
          headers = {
            'content-type': 'application/json;charset=UTF-8',
            ...headers
          };

          body = JSON.stringify(payload);
        } else if (payloadType === 'form') {
          headers = {
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            ...headers
          };

          body = SearchParams.parse(payload).toString();
        } else {
          body = payload;
        }
      }

      return this._fetch(url, {
        ...options,
        headers,
        body
      });
    });
  }

  withThrowNonOk(opts?: Pick<FetchOptions, 'throwNonOk'>): FetchClient<O> {
    return new FetchClient(async (url, options) => {
      const throwNonOk = options.throwNonOk != null ? options.throwNonOk : opts?.throwNonOk;

      const res: FetchResult = await this._fetch(url, options);

      if (!res.response.ok && throwNonOk) {
        const response = res.response;
        console.log(response, 'response');

        throw new FetchResponseError(
          'ERR_NON_OK_RESPONSE',
          `Response status code ${response.status}${response.statusText ? `: ${response.statusText}` : ''}`,
          res
        );
      }

      return res;
    });
  }

  withDataHandler(opts?: Pick<FetchOptions, 'dataHandler'>): FetchClient<O> {
    return new FetchClient(async (url, options) => {
      const res: FetchResult = await this._fetch(url, options);

      const dataType = options.dataHandler || opts?.dataHandler || 'json';

      if (dataType === 'raw') {
        return res;
      }

      const handler: FetchDataHandler = typeof dataType === 'string' ? (r, e) => e(r, dataType) : dataType;

      const data = await handler(res, async (res, type) => {
        try {
          return await (res.response as any)[type]();
        } catch (e) {
          throw new FetchResponseError('ERR_PARSE_RESPONSE_DATA', `Failed to parse response type: ${type}`, {
            ...res,
            data: undefined,
            cause: e
          });
        }
      });

      return {
        ...res,
        data
      };
    });
  }

  withOptions(opts: O): FetchClient<O> {
    return new FetchClient(async (url, options) => {
      return this._fetch(url, {
        ...opts,
        ...options,
        headers: {
          ...opts.headers,
          ...options.headers
        },
        params: {
          ...opts.params,
          ...options.params
        }
      });
    });
  }

  async request<R = any>(url: string, options: O): Promise<FetchResult<R>> {
    return this._fetch(url, {
      method: 'get',
      ...options,
      headers: {
        accept: 'application/json, text/plain, */*',
        ...options.headers
      }
    });
  }
}
