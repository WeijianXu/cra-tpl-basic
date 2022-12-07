import React, { Component } from 'react';

import { BaseLayout } from 'layout';
import GlobalContext from 'model/context';
import { getUserInfo } from 'services/UserApi';

import './App.scss';

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  state = {};

  static contextType = GlobalContext;
  componentDidMount() {
    getUserInfo().then(({ data, code }) => {
      // 获取用户信息成功，则是登录成功的用户，否则为游客
      if (code === '200') {
        this.context.setUserInfo(data || {}, 'user', true);
      } else {
        // this.context.setUserInfo(data, 'user', true); // 测试使用
        this.context.setUserInfo({}, 'visitor', false);
      }
    });
  }

  render() {
    return <BaseLayout></BaseLayout>;
  }
}
