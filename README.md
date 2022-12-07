# Portal

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

1. `yarn start`

2. `yarn test`
   [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

3. `yarn build`
   [deployment](https://facebook.github.io/create-react-app/docs/deployment)

4. `yarn eject`

**Note: 请勿随意执行！**

## Learn More

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

## 版本兼容

---

### antd

#### 版本声明：

> 由于 antd 4 放弃支持 IE9、IE10，而且 antd 4 支持 IE11 也不是很好（4.1.\*）
> 因此本系统部分 antd 组件在 IE10 上表现不好。
> 若十分有必要降级支持 IE10、IE9，请在 feature/antd 的基础上改造！

若十分有必要降级，请确保 antd 4 组件使用方式降级到 antd 3 模式，然后自行添加必要的 polyfills 以便运行在 IE9、IE10。

\*\*基于上述原因，降级前，请仔细查看 [v3 版本的 antd 文档](https://3x.ant.design/docs/react/introduce-cn)

#### 兼容

支持 IE9、IE10，需要加入垫片 **@babel/preset-env**

### react-app

react-app 支持 IE9 以上，加入了必要的垫片 **react-app-polyfill**
在 `./src/index.tsx` 的头部第一行，中加入下面两行代码：

```js
// 支持IE9
import 'react-app-polyfill/ie9';
// 支持ES6中stable阶段的语法特性
import 'react-app-polyfill/stable';
```

### react

react 16 兼容 IE11 以下浏览器，依赖 core-js 或 babel-polyfill.

### dev-serve

本地启动的环境，在 IE11 下，使用 mode 10 不能生效
若需生效，请将 `public/index.html` 中 es6-sham 和 es6-shim 放开
