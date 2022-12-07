import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import App from './pages/App';
import { GlobalCtxProvider } from 'model/context';
import { Empty } from 'components';

ReactDOM.render(
  // <React.StrictMode>
  <GlobalCtxProvider>
    <ConfigProvider
      locale={zhCN}
      renderEmpty={(componentName) => <Empty componentName={componentName} />}
    >
      <App />
    </ConfigProvider>
  </GlobalCtxProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
