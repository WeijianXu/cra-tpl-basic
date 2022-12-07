// 支持IE9
import 'react-app-polyfill/ie9';
// 支持ES6中stable阶段的语法特性
import 'react-app-polyfill/stable';
// 保证 IE9 上 matchMethod 生效
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';
import { GlobalCtxProvider } from 'model/context';

// **当前 antd ConfigProvider 不支持 IE11**
ReactDOM.render(
  // <React.StrictMode>
  <GlobalCtxProvider>
    <App />
  </GlobalCtxProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
