import Vue from 'vue'

// 01 引入VueRouter文件
import VueRouter from 'vue-router'

// 02 使用路由模块
Vue.use(VueRouter);

//经过多次尝试发现原因可能是 在重新下载依赖包时，安装的vue-router还是之前出错的那个版本
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

import Home from '../Home/Home'
// import Type from '../Type/Type'
import Group from '../Group/Group'
import Mine from '../Mine/Mine'
import Fail from '../components/Fail'
import Cart from '../Cart/Cart'
import TopComponentSet from '../Mine/Set'
import Classlist from '../components/classlist.vue';
import Delist from '../components/delist.vue';
import Login from '../components/lg.vue';
import Reg from '../components/reg.vue';
import Detail from '../components/detail'

// 03 配置参数
const router = new VueRouter({
    routes: [{
            name: 'home',
            path: '/home',
            component: Home,
            meta: {
                nav: true
            }
        },
        {
            name: 'type',
            path: '/type',
            component: Classlist
        },
        {
            name: 'group',
            path: '/group',
            component: Group
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: {
                nav: true
            }
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'fail',
            path: '*',
            component: Fail
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        }, {
            name: 'set',
            path: '/setapp',
            component: TopComponentSet
        },
        {
            name: 'delist',
            path: '/delist',
            component: Delist
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'detail',
            path: '/detail',
            component: Detail
        },

    ]
})

export default router;