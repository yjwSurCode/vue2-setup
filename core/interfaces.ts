export type Dictionary<T = any> = { [key: string]: T };

// https://medium.com/@dhruvrajvanshi/making-exceptions-type-safe-in-typescript-c4d200ee78e9
export interface OkRes<R> {
  isError: false;
  value: R;
}

export interface ErrRes<E> {
  isError: true;
  error: E;
}

export type Res<R, E> = OkRes<R> | ErrRes<E>;

/** 树节点 */
export interface TreeNode<T, ID = string> {
  /** 节点主键 */
  id: ID;
  /** 节点父键 */
  pid: ID;
  /** 父节点 */
  parent?: TreeNode<T, ID>;
  /** 节点属性 */
  attrs: T;
  /** 子孙节点 */
  children?: Array<TreeNode<T, ID>>;
}

/** BIT 值 */
export interface Bitwise {
  /** 值索引 */
  idx: number;
  /** 值位置 */
  pos: number;
}

/** 分页查询条件 */
export interface PageQuery {
  /** 查询 limit */
  limit: number;
  /** 查询 offset */
  offset: number;
}

/** 分页查询结果 */
export interface PageRows<T> {
  /** 分页数组 */
  rows: T[];
  /** 总大小 */
  count: number;
}

/** 域名变量 */
export interface ProjectPaths {
  /** API */
  backend: string;
  /** 单点登录 */
  sso: string;
  /** ssoPortal */
  ssoPortal: string;
  /** 绩效后台 */
  performance: string;
}
