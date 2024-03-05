import {
  Layout,
  Layout,
} from '@/packages/layout'
import {
  UserTable,
} from '@/packages/table'

// router config
export const routes = [
  {
    id: "_redirect",
    parentId: '0',
    path: '/:path(.*)*',
    redirect: {
      name: 'home',
    },
    name: 'redirectHome',
  },
  {
    id: '32',
    orderNum: 0,
    parentId: '0',
    path: '/login',
    name: 'login',
    meta: {
      title: '用户登录',
      permissions: ['unlogin'],
    },
    component: () => import('@/pages/UserLogin.vue'),
  },
  {
    id: '33',
    orderNum: 1,
    parentId: '0',
    name: 'menu_1',
    meta: {
      title: '用户管理',
      projectId: true,
      permissions: [],
    },
    component: Layout,
  },
  {
    id: '34',
    orderNum: 0,
    parentId: '33',
    path: '/user/list',
    name: 'userList',
    meta: {
      title: '用户列表',
      projectId: true,
      permissions: ['login'],
    },
    component: UserTable,
  },
  {
    id: '35',
    orderNum: 0,
    parentId: '0',
    name: 'menu_3',
    meta: {
      title: '根目录',
      projectId: true,
      permissions: [],
    },
    component: Layout,
  },
  {
    id: '36',
    orderNum: 0,
    parentId: '35',
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      projectId: true,
      permissions: ['login'],
    },
  },
]