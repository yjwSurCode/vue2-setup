import Cookies from 'js-cookie';
import { FetchClient, FetchOptions, FetchResponseError, FetchResponseErrorOptions } from '../src/utils/fetch-utils';
import { ProjectEnv } from './constants';
import { PROJECT_ENV, PROJECT_PATHS } from './config';

export class PerformanceResponseError extends FetchResponseError {
  constructor(message: string, options: FetchResponseErrorOptions) {
    super('ERR_PERFORMANCE_RESPONSE', message, options);
  }
}

export interface PerformanceResponseData<T = any> {
  code: string;
  msg?: string;
  body: T;
}

console.log(PROJECT_PATHS);

class PerformanceAPI {
  // private logger = createLogger('performance-api');

  readonly client = FetchClient.create()
    .with((fetch) => (url, options) => {
      if (PROJECT_ENV !== ProjectEnv.Online) {
        // this.logger.info(
        // 	`URL: ${url} Authorization: ${options.headers?.['Authorization']} Payload: ${options.body}`,
        // );
        console.log(`URL: ${url} Authorization: ${options.headers?.['Authorization']} Payload: ${options.body}`);
      }

      return fetch(url, options);
    })
    .withPayload({
      payloadType: 'json'
    })
    .withOptions({
      headers: {
        Authorization: 'PORTAL_SSO_COOKIE_KEY'
      }
    })
    .withAffix({
      prefix: PROJECT_PATHS.backend
    })
    .withThrowNonOk({
      throwNonOk: true
    })
    .withDataHandler({
      dataHandler: async (res, executor) => {
        const _data = await executor(res, 'json');

        const data: PerformanceResponseData = {
          code: _data.code,
          body: _data.body,
          msg: _data.msg
        };

        if (data.code != '200') {
          throw new PerformanceResponseError(data.msg || `服务器返回了错误的代码：${data.code}`, {
            ...res,
            data
          });
        }

        return data;
      }
    });

  isControllableError(err: any): err is PerformanceResponseError {
    if (this.isUserNeedLoginError(err)) {
      return false;
    }

    return err instanceof PerformanceResponseError;
  }

  isUserNeedLoginError(err: any): err is PerformanceResponseError {
    if (err instanceof PerformanceResponseError) {
      return err.data?.code === '00000401';
    }

    return false;
  }

  async request<R = any>(url: string, options?: FetchOptions): Promise<PerformanceResponseData<R>> {
    const { data } = await this.client.request(url, options || {});
    return data;
  }
}

export const PERFORMANCE_API = new PerformanceAPI();
