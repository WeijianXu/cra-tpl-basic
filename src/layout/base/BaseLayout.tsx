import React, { PureComponent } from 'react';
import { Layout } from 'antd';
// import { Route, Switch } from 'react-router-dom';

import { PrimaryRouter } from 'router';
import { SwitchRoutes } from 'router/PrimaryRouter';
import GlobalContext from 'model/context';
import { LayoutWrap } from 'components';
// import NotFound from 'pages/404';
import BrowserAlert from './BrowserAlert';
import { BreadCtxProvider } from 'model/BreadContext';

const { /* Header, Footer,  */ Content } = Layout;

interface Props {}

export default class BaseLayout extends PureComponent<Props> {
  static contextType: React.Context<model.GlobalStateProps> = GlobalContext;
  componentDidUpdate() {}
  render() {
    return (
      <PrimaryRouter>
        <Layout>
          <BrowserAlert />
          <LayoutWrap>header</LayoutWrap>
          <Content>
            <BreadCtxProvider>
              <SwitchRoutes />
            </BreadCtxProvider>
          </Content>
          <LayoutWrap>footer</LayoutWrap>
        </Layout>
      </PrimaryRouter>
    );
  }
}
