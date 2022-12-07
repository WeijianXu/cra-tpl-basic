// 支持IE9、IE10，页面不报错，下面两句必须位于入口文件顶部
import 'core-js/es/map';
import 'core-js/es/set';
// 保证 import('./index.ie'); 生效
import 'promise-polyfill/src/polyfill';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import { GlobU } from './utils';

// **当前 antd ConfigProvider 不支持 IE11**
if (GlobU.ieVersion() > 0) {
  import('./index.ie');
} else {
  import('./index.normal');
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
