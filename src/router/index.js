import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'

Vue.use(Router)
//将单页面引入进来
import Home from '../views/home'
import MPhone from '../views/mPhone'
import PageOne from '../views/page_one'
import Shop from '../views/shop'
import PageTwo from '../views/page_two'
import PageThree from '../views/page_three'
import PageFour from '../views/page_four'
import PageFive from '../views/page_five'
import Item from '../views/item'
import Cart from '@/views/cart'
import CheckOut from '../views/checkOut'
import Payment from '../views/payment'
import Account from '../views/account'
import Order from '../views/account/order'

//将单页面映入到路由里面
const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/Home', component: Home},
    {path: '/MPhone', component: MPhone},
    {path: '/PageOne', component: PageOne},
    {path: '/Shop', component: Shop},
    {path: '/PageTwo', component: PageTwo},
    {path: '/PageThree', component: PageThree},
    {path: '/PageFour', component: PageFour},
    {path: '/PageFive', component: PageFive},
    {path: '/Item', name: 'Item', component: Item},
    {path: '/Cart', name: 'Cart', component: Cart},
    {path: '/CheckOut', name: 'CheckOut', component: CheckOut},
    {path: '/Payment', name: 'Payment', component: Payment},
    {
      path: '/Account',
      component: Account,
      children: [{
        path: '',
        name: 'Account',
        component: Order
      }]
    },
  ]
})

/// 路由守卫
router.beforeEach((to, from, next) => {
  next()

})
export default router
