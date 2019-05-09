/*
 * @Author: itcast 
 * @Description: xxx业务模块 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:12:47
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    // 父路径
    path: '/saas-company',
    component: Layout,
    redirect: 'noredirect',
    name: 'company',
    meta: {
      title: 'xxx业务模块管理',
      icon: 'component'
    },
    children: [
      {
        // 请求地址
        path: 'index',
        // 跳转的vue视图
        component: _import('saas-company/pages/index'),
        name: 'saas-company-index',
        meta: {title: 'SAAS企业管理', icon: 'component', noCache: true}
      }
    ]
  }
]
