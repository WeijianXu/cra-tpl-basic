/** 全局类型定义 */
declare namespace def {
  // 用户信息
  export interface IUserInfo {
    companyName?: string; // 公司名，用于显示
    loginType?: string; // 登录类型
    status?: string; // 状态
    userId?: string; // 用户ID
    username?: string; // 用户名
  }

  // 用户权限，访客，登录的用户，管理员
  export type IPermission = 'visitor' | 'user';

  /**
   * 配置路由信息
   */
  export interface IRoute {
    /** 路径 */
    path?: string;
    /** react-router 中 <link> 上的 to 属性 */
    to?:
      | string
      | LocationDescriptorObject<any>
      | ((location: Location<any>) => History.LocationDescriptor<any>);
    /** 路径名称 */
    name?: string;
    /** 配置菜单时使用图标内容 */
    icon?: any;
    /** 页面文件 */
    component?: any;
    /** 是否显示 */
    show?: boolean;
    /** 是否隐藏子菜单 */
    hideChildren?: boolean;
    /** 重定向路径 */
    redirect?: string;

    permission?: IPermission[];
    /** 子路由配置 */
    routes?: IRoute[];
  }

  export interface ILink {
    /** 路径名称 */
    name?: string;
    /** 路径 */
    href: string;
    /** 配置菜单时使用图标内容 */
    icon?: any;
  }

  export interface ISearch {
    [index: string]: any;
    // 查询参数
    sq?: string;
    // 目标ID
    id?: string;
    // 目标名称
    name?: string;
  }

  // 监管事项类型
  export type IActionTypeItem = '' | '0' | '1' | '2' | '3';

  export interface IActionType {
    [index: string]: any;
    '0': any;
    '1': any;
    '2': any;
    '3': any;
  }

  // 一般的相应所需要的state
  export interface IBaseStates {
    loading?: boolean;
    data?: any;
    // 是否初始化加载了数据，一般用在多个tab加载时
    hasInited?: boolean;
  }
  export interface IPageStates extends IBaseStates {
    data?: any[];
    pageNo?: number;
    pageSize?: number;
    total?: number;
  }

  /** 分页返回值 */
  export interface IPageResData {
    pageNo?: number;
    pageSize?: number;
    totalCount?: number;
    records?: any[];
  }

  export interface IBaseRes {
    [index: string]: any;
    code?: string;
    msg?: string;
    data?: any;
    success?: boolean;
  }

  export interface IPagesRes extends IBaseRes {
    data?: IPageResData;
  }

  // 省、市、县、部门编码
  export interface ICode {
    departmentCode?: string;
    directAreaCode?: string;
    directCityCode?: string;
    directProvinceCode?: string;
  }

  // 城市、地区基本数据类型
  export interface ICity {
    code?: string;
    name?: string;
  }

  export interface IListItem {
    name?: string;
    value?: any;
  }

  // 监管动态新闻资讯类型
  export type INewsTypeItem = 1 | 2;

  export interface INewsType {
    [index: string]: any;
    '1': any;
    '2': any;
  }

  // api 配置属性
  export interface IApiProps {
    api?: string;
    sp?: string; // 外部系统登录地址
    login?: string;
  }
}
