import { ProjectEnv } from './constants';
import { ProjectPaths } from './interfaces';

const GLOBAL = typeof SURCODE != 'undefined' ? SURCODE : {};
// const PROJECT = __PROJECT__ || {};
const PROJECT = { ENV: '', VERSION: '1', IS_DEV: true, PUBLIC_PATH: '', ROUTE_BASE: '' };

export const PROJECT_ENV: ProjectEnv = GLOBAL.PROJECT_ENV || PROJECT.ENV || ProjectEnv.Online;
// export const PROJECT_ENV: ProjectEnv = ProjectEnv.Online;

export const PROJECT_VERSION: string = PROJECT.VERSION;

export const PROJECT_IS_DEV: boolean = PROJECT.IS_DEV;

export const PROJECT_PATHS: ProjectPaths = ((env: ProjectEnv): ProjectPaths => {
  const fn = env === ProjectEnv.Dev || env === ProjectEnv.Beta ? 'beta1.fn' : 'idc1.fn';

  return {
    // backend: '/backend-api',
    backend: process.env.NODE_ENV === 'production' ? 'http://129.211.219.138:8081/prod-api' : '/prod-api',
    sso: `http://sso.${fn}`,
    ssoPortal: `http://sso-portal-api.${fn}`,
    // performance: '/performance-api',
    performance: `http://performance-api.${fn}`
  };
})(PROJECT_ENV);

/** 项目静态资源目录 */
export const PROJECT_PUBLIC_PATH: string = PROJECT.PUBLIC_PATH;

/** 项目路由前缀 */
export const PROJECT_ROUTE_BASE: string = PROJECT.ROUTE_BASE;

/** 项目首页 */
export const PORTAL_INDEX_PATH = '/dashboard';

/** SSO_COOKIE_KEY */
export const PORTAL_SSO_COOKIE_KEY = 's98r5h2s6v1m37o';

export const PORTAL_BODY_OFFSET_HEIGHT = 72;

/** 默认分页大小 */
export const PORTAL_DEFAULT_PAGINATION_SIZE = 10;
