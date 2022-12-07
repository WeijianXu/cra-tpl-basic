// 默认全局状态定义

declare namespace model {
  export interface GlobalStateProps {
    // 登录状态
    elderMode?: boolean;
    // 老年模式
    setElderMode?: any;

    loginState?: boolean;

    permission?: def.IPermission;

    toggleLoginState?: (state: boolean) => void;
    // 用户信息
    userInfo?: def.IUserInfo;
    setUserInfo?: (
      state: def.IUserInfo,
      permission?: def.IPermission,
      loginState?: boolean
    ) => void;
    // 面包屑存储页面状态，以便恢复所在页面的状态
    breadStates?: def.IRoute[];
    updateBread?: (
      state: def.IRoute,
      level: number,
      deleteTail: boolean
    ) => void;
    // 通用更新状态方法
    updateState?: (state: any) => void;
  }

  // 面包屑
  export interface BreadStateProps {
    // 面包屑存储页面状态，以便恢复所在页面的状态
    breads?: def.IRoute[];
    updateBread?: (
      state: def.IRoute,
      level: number,
      deleteTail: boolean
    ) => void;
  }
}
