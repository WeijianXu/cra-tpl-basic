const {
  override,
  fixBabelImports,
  addLessLoader,
  overrideDevServer,
} = require('customize-cra');
const testProxyPath = 'http://localhost:8010';
const addProxy = () => (configFunction) => {
  return {
    ...configFunction,
    proxy: {
      '/api': {
        target: testProxyPath,
        changeOrigin: true,
        ws: false,
        secure: false,
        pathRewrite: {
          '^/api': '/api',
        },
        headers: {
          host: testProxyPath,
          origin: testProxyPath,
          referer: testProxyPath,
        },
      },
    },
  };
};
const webpackConfig = {
  webpack: override(
    // 按需加载 antd
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      // 变量参考 https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      modifyVars: {
        // 颜色相关
        '@primary-color': '#167ED4',
        '@disabled-color': '#999999',
        '@border-color-base': '#eeeeee',
        // text 相关
        '@font-size-base': '16px',
        '@text-color': '#333333',
        '@text-color-secondary': '#666666',
        '@heading-color': '#000000',
        // 布局大小等
        '@height-base': '36px',
        '@height-lg': '48px',
        '@height-sm': '28px',
        '@line-height-base': '1.125',
        // table
        '@table-header-color': '#666666',
        // breadcrumb
        '@breadcrumb-last-item-color': '#146FBB',
        '@breadcrumb-font-size': '14px',
        // vertical paddings
        '@padding-lg': '24px', // containers
        '@padding-md': '20px', // small containers and buttons
        '@padding-sm': '16px', // Form controls and items
        '@padding-xs': '10px', // small items
        '@padding-xss': '6px', // more small
        // pagination
        '@pagination-item-size': '30px',
      },
    })
  ),
  devServer: overrideDevServer(addProxy()),
};
module.exports = webpackConfig;
