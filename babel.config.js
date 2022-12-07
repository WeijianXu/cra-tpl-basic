module.exports = {
  presets: [
    // 支持最新API
    [
      '@babel/preset-env',
      {
        // 用到什么特性，引入什么polyfill
        useBuiltIns: 'usage',
      },
    ],
  ],
  /* plugins: [
    [
      // 按需加载 view-design
      'import',
      {
        libraryName: 'view-design',
        libraryDirectory: 'src/components',
      },
    ],
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ], */
};
