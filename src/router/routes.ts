import React from 'react';
import Home from 'pages/home';

const setDefaultRoute = (route: def.IRoute): def.IRoute => ({
  path: '',
  name: '首页',
  component: null,
  hideChildren: true,
  show: true,
  permission: ['visitor', 'user'],
  routes: [],
  ...route,
});

/**
 * 配置路由信息
 */
const routes: def.IRoute[] = [
  setDefaultRoute({
    path: '/',
    name: '首页',
    component: Home, // 除了首页，其他都动态加载
  }),
  setDefaultRoute({
    path: '/search',
    name: '搜索',
    show: false,
    component: React.lazy(() => import('pages/search/index')),
  }),
  setDefaultRoute({
    path: '/search/action',
    name: '监管记录详情',
    show: false,
    component: React.lazy(() => import('pages/search/ActionDetail')),
  }),
  setDefaultRoute({
    path: '/search/item',
    name: '监管事项详情',
    show: false,
    component: React.lazy(() => import('pages/search/ItemDetail')),
  }),
  setDefaultRoute({
    path: '/openInfo',
    name: '监管信息查询',
    show: false,
    component: React.lazy(() => import('pages/openInfo/OpenInfo')),
  }),
  setDefaultRoute({
    path: '/openInfo/detail',
    name: '监管信息详情',
    show: false,
    component: React.lazy(() => import('pages/openInfo/OpenInfoDetail')),
  }),
  setDefaultRoute({
    path: '/deptItem',
    name: '部门监管事项清单',
    show: false,
    component: React.lazy(() => import('pages/deptItem/DeptItem')),
  }),
  setDefaultRoute({
    path: '/deptItem/detail',
    name: '事项详情',
    show: false,
    component: React.lazy(() => import('pages/deptItem/DeptItemDetail')),
  }),
  setDefaultRoute({
    path: '/superDynamic',
    name: '监管动态',
    component: React.lazy(() => import('pages/news/SuperDynamic')),
  }),
  setDefaultRoute({
    path: '/superDynamic/detail',
    name: '动态监管详情',
    show: false,
    component: React.lazy(() => import('pages/news/SuperDynamicDetail')),
  }),
  setDefaultRoute({
    path: '/exposure',
    name: '曝光台',
    component: React.lazy(() => import('pages/news/Exposure')),
  }),
  setDefaultRoute({
    path: '/exposure/detail',
    name: '曝光台详情',
    show: false,
    component: React.lazy(() => import('pages/news/ExposureDetail')),
  }),
  setDefaultRoute({
    path: 'http://www.zjzxts.gov.cn/wsdt/', // https://jgts.jianguan.gov.cn/',
    name: '投诉举报',
  }),
  setDefaultRoute({
    path: '/enterprise',
    name: '企业空间',
    permission: ['user'],
    component: React.lazy(() => import('pages/business/Business')),
  }),
  setDefaultRoute({
    path: '/enterprise/comment',
    name: '监管行为详情',
    permission: ['user'],
    show: false,
    component: React.lazy(() => import('pages/business/BusinessComment')),
  }),
  setDefaultRoute({
    path: '/self-check/task',
    name: '自查上报',
    permission: ['user'],
    component: React.lazy(() => import('pages/self-check/task/index')),
  }),
  setDefaultRoute({
    path: '/self-check/task/detail',
    name: '自查上报任务详情',
    permission: ['user'],
    show: false,
    component: React.lazy(() => import('pages/self-check/task/detail')),
  }),
  setDefaultRoute({
    path: '/self-check/result',
    name: '结果查看',
    permission: ['user'],
    show: false,
    component: React.lazy(() => import('pages/self-check/result/index')),
  }),
  setDefaultRoute({
    path: '/self-check/result/detail',
    name: '结果详情',
    permission: ['user'],
    show: false,
    component: React.lazy(() => import('pages/self-check/result/detail')),
  }),
  // 未找到的页面都重定向到首页
  setDefaultRoute({
    path: '*',
    name: '404',
    show: false,
    component: React.lazy(() => import('pages/404')),
  }),
];

export default routes;
