import { Layout } from '@/packages/layout'
// router config
export const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      permissions: ['unlogin']
    },
    component: () => import('@/pages/UserLogin.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      permissions: ['login']
    },
    component: Layout,
    children: [
      {
        path: ':projectId',
        name: 'home',
        meta: {
          projectId: true,
          permissions: ['login']
        },
        component: () => import('@/pages/dashboard/dashboard.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      needLogin: true
    },
    component: Layout,
    children: [
      {
        path: ':projectId',
        name: 'userList',
        meta: {
          projectId: true,
          permissions: ['login']
        },
        component: () => import('@/pages/dashboard/dashboard.vue')
      }
    ]
  }
]