import Vue from 'vue';
import VueRouter from 'vue-router';

import Classlist from '../components/classlist.vue';
import Delist from '../components/delist.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        //首页的路由
        {
            name: 'classlist',
            path: '/classlist', //当浏览器地址为/home时，显示Home组件的内容
            component: Classlist
        },
        {
            name: 'delist',
            path: '/delist', //当浏览器地址为/home时，显示Home组件的内容
            component: Delist
        },
    ]
});

export default router;