import React from 'react';
import update from 'immutability-helper';

// 默认全局状态
const globalState: model.GlobalStateProps = {
  loginState: false,
  permission: 'visitor',
  userInfo: {},
};

const GlobalContext = React.createContext(globalState);

export const GlobalCtxConsumer = GlobalContext.Consumer;

// 这种方式不生效，暂时不清楚原因
/* export function WithContext(callback: model.ContextConsumerCB): ReactElement {
  return <GlobalContext.Consumer>{callback}</GlobalContext.Consumer>;
} */

export class GlobalCtxProvider extends React.Component<
  any,
  model.GlobalStateProps
> {
  /**
   * toggleLoginState 切换登录状态
   */
  public toggleLoginState = (loginState: boolean) => {
    this.setState({
      loginState,
    });
  };

  /**
   * setUserInfo 切换登录状态
   */
  public setUserInfo = (
    userInfo: def.IUserInfo,
    permission?: def.IPermission,
    loginState?: boolean
  ) => {
    this.setState({
      loginState: loginState || false,
      permission: permission || 'visitor',
      userInfo,
    });
  };

  /**
   * updateState 使用 immutability-helper 更新全局 globalState 指定的状态
   */
  public updateState = (stateUpdating: any) => {
    this.setState(update(this.state, stateUpdating));
  };

  state = {
    ...globalState,
    toggleLoginState: this.toggleLoginState,
    setUserInfo: this.setUserInfo,
    updateState: this.updateState,
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
