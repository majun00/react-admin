import Login from '@/views/login/index'
import Index from '@/views/index/index'

// 测试面包屑
const Test = () => <h3>test</h3>

export const main = [
  { path: '/login', name: '登录', component: Login },
  {
    path: '/',
    exact: true,
    name: '首页',
    component: Index,
    routes: [{ path: '/test', name: '测试页面', component: Test }]
  }
]

export const menus = []

export const routerConfig = {
  main,
  menus
}
