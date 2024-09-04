import { createRouter as _createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/HomePage.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/software',
        name: 'software',
        component: () => import('@/view/Software.vue'),
        redirect: '/software/smartTown',
        meta: {
          title: '软件产品'
        },
        children: [
          {
            path: '/software/smartTown',
            name: 'smartTown',
            component: () => import('@/view/Software_smartTown.vue'),
            meta: {
              title: '软件产品丨智能小镇管理系统'
            }
          },
          {
            path: '/software/bigData',
            name: 'bigData',
            component: () => import('@/view/Software_bigData.vue'),
            meta: {
              title: '软件产品丨大数据管理系统'
            }
          }
        ]
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        props: true,
        meta: {
          title: '相关服务'
        }
      },
      {
        path: '/servicedetail',
        name: 'serviceDetail',
        component: () => import('@/view/ServiceDetail.vue'),
        props: true,
        meta: {
          title: '相关服务-详情'
        }
      },
      {
        path: '/newsinformation',
        name: 'newsInformation',
        component: () => import('@/view/NewsInformation.vue'),
        meta: {
          title: '新闻动态'
        }
      },
      {
        path: '/companyintroduction',
        name: 'companyIntroduction',
        component: () => import('@/view/CompanyIntroduction.vue'),
        meta: {
          title: '公司介绍'
        }
      },
      {
        path: '/jobchance',
        name: 'jobChance',
        component: () => import('@/view/JobChance.vue'),
        meta: {
          title: '工作机会'
        }
      },
      {
        path: '/contactus',
        name: 'contactUs',
        component: () => import('@/view/ContactUs.vue'),
        meta: {
          title: '联系我们'
        }
      },
      {
        path: '/newsdetail',
        name: 'newsdetail',
        component: () => import('@/view/NewsDetail.vue'),
        meta: {
          title: '详情'
        }
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes
  })
}

