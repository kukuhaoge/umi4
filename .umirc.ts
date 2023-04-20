import { defineConfig } from '@umijs/max';

const { NODE_ENV } = process.env;

export default defineConfig({
  // antd: {import:true},
  publicPath: NODE_ENV === 'production' ? './' : '/',
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    loading: '123',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' CRUD 示例',
      path: '/graph',
      component: './Graph',
    },
  ],
  npmClient: 'yarn',
});
