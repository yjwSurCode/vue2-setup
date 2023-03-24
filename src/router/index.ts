import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/components/Layout/index.vue';
import Home from '@/views/home/index.vue';
import ExpDetail from '@/views/exp/detail/index.vue';

Vue.use(VueRouter);

// {}
// | _Component<any, any, any, any>
// | AsyncComponent<any, any, any, any>
const routes: Array<any> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/login/register.vue')
  },
  { path: '/404', component: () => import('@/views/404.vue') },
  { path: '/test', component: () => import('@/views/HomeView.vue') },
  {
    path: '/admin',
    component: () => import('@/views/admin/index.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/admin/project.vue')
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/admin/project.vue')
      }
    ]
  },
  {
    // path: "/exp/:id",
    path: '/exp',
    component: () => import('@/views/exp/index.vue'),
    // component: Layout,
    // redirect: "/exp/list",
    // name: "exp",
    // meta: {
    //   title: "实验管理",
    //   icon: "ums",
    //   fullPath: "/exp",
    // },
    children: [
      // { path: "", component: () => import("@/views/exp/index.vue") },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/exp/notice/index.vue')
      },
      {
        path: 'warn',
        name: 'warn',
        component: () => import('@/views/exp/warn/index.vue')
      },
      {
        path: 'arrange',
        name: 'arrange',
        component: () => import('@/views/exp/arrange/index.vue')
      },
      {
        path: 'rule',
        name: 'rule',
        component: () => import('@/views/exp/rule/index.vue')
      },
      {
        path: 'introduce',
        name: 'introduce',
        component: () => import('@/views/exp/introduce/index.vue')
      },
      {
        path: 'school',
        name: 'school',
        component: () => import('@/views/exp/school/index.vue')
      },
      {
        path: 'integral',
        name: 'integral',
        component: () => import('@/views/exp/integral/index.vue')
      },
      {
        path: 'tutor',
        // subPath: "/exp",
        name: 'tutor'
        // component: () => import('@/views/exp/tutor/index.vue')
      },
      // ! 分组
      {
        path: 'audition',
        name: 'audition',
        component: () => import('@/views/exp/group/audition.vue')
      }
    ]
  },
  {
    path: '/enroll',
    component: () => import('@/components/Enroll/index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
