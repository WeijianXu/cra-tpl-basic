import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect as Redirector,
} from 'react-router-dom';
import { Spin } from 'antd';
import get from 'lodash/get';

import GlobalContext from 'model/context';
import { LayoutWrap } from 'components';
import { UriU } from 'js-utils-xu';

import routes from './routes';

export function SwitchRoutes() {
  const state = useContext(GlobalContext);

  const routesDom = routes.map(
    ({ name, path, to, redirect, component, permission }: def.IRoute) => {
      const pathname = path || get(to, 'pathname');
      const hasPermission = permission
        ?.join(',')
        .includes(get(state, 'permission', 'visitor'));
      if (UriU.checkAbsUrl(pathname) || UriU.checkAbsUrl(redirect || '')) {
        // 外链，不设置路由配置
        return null;
      }
      if (!hasPermission) {
        // 无权限
        return null;
      }
      return !redirect ? (
        <Route
          key={pathname || name}
          exact
          path={pathname}
          component={component}
        />
      ) : (
        <Redirector key={pathname || name} to={redirect} />
      );
    }
  );
  return (
    <Switch>
      <React.Suspense
        fallback={
          <LayoutWrap contentStyle={{ textAlign: 'center' }}>
            <Spin />
          </LayoutWrap>
        }
      >
        {routesDom}
      </React.Suspense>
    </Switch>
  );
}

export default class PrimaryRouter extends React.Component<any, any> {
  public render() {
    return <Router>{this.props.children}</Router>;
  }
}
