// import Vue from 'vue';
// import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
// import Layout from '@/components/Layout/index.vue';
// import Home from '@/views/home/index.vue';
// import ExpDetail from '@/views/exp/detail/index.vue';

// // {}
// // | _Component<any, any, any, any>
// // | AsyncComponent<any, any, any, any>\
// const routes: Array<any> = [
//   { path: '/', redirect: '/home' },
//   {
//     path: '/home',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/login',
//     component: () => import('@/views/login/index.vue')
//   },
//   {
//     path: '/register',
//     component: () => import('@/views/login/register.vue')
//   },
//   { path: '/404', component: () => import('@/views/404.vue') },
//   { path: '/test', component: () => import('@/views/HomeView.vue') },
//   {
//     path: '/admin',
//     component: () => import('@/views/admin/index.vue'),
//     children: [
//       {
//         path: '',
//         name: '',
//         component: () => import('@/views/admin/project.vue')
//       },
//       {
//         path: 'project',
//         name: 'project',
//         component: () => import('@/views/admin/project.vue')
//       }
//     ]
//   },
//   {
//     // path: "/exp/:id",
//     path: '/exp',
//     component: () => import('@/views/exp/index.vue'),
//     // component: Layout,
//     // redirect: "/exp/list",
//     // name: "exp",
//     // meta: {
//     //   title: "实验管理",
//     //   icon: "ums",
//     //   fullPath: "/exp",
//     // },
//     children: [
//       // { path: "", component: () => import("@/views/exp/index.vue") },
//       {
//         path: 'list',
//         // subPath: "/exp",
//         name: 'list',
//         component: () => import('@/views/exp/list/index.vue')
//       },
//       {
//         path: 'detail',
//         // subPath: "/exp",
//         name: 'detail',
//         component: ExpDetail
//       },
//       {
//         path: 'tutor',
//         // subPath: "/exp",
//         name: 'tutor',
//         component: () => import('@/views/exp/tutor/index.vue')
//       }
//     ]
//   },
//   {
//     path: '/competition',
//     component: () => import('@/views/competition/index.vue')
//   },
//   {
//     path: '/enroll',
//     component: () => import('@/components/Enroll/index.vue')
//   }
// ];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// });
// export default router;
