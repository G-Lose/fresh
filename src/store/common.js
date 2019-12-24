// import axios from 'axios';
const common = {
    state: {
        user: null
    },
    getters: {},
    mutations: {
        login(state, {
            username,
            Authorization
        }) {
            //登陆
            state.user = {
                username,
                Authorization
            }

            //登陆状态存到本地存储(字符串)
            let str = JSON.stringify(state.user);
            localStorage.setItem('authorization', str);
        },
        logout(state) {
            //退出
            state.user = null;
            localStorage.removeItem('authorization');

        }
    },
    actions: {
        async checkLogin(context) {
            let user = localStorage.getItem("authorization");
            if (!user) { //读取不到用户信息退出
                context.commit('logout');
            } else {
                //如果读取到用户，继续判断token的正确性和失效性==token校验
                user = JSON.parse(user);
                // 发起ajax请求，校验token是否过期
                // let { data } = await axios.get('http://localhost:10111/verify', {
                //     headers: {
                //         Authorization: user.Authorization
                //     }
                // })
                // // 防止刷新vuex数据丢失的问题
                // if (data.code === 1) {
                //     context.commit('login', user);
                // } else {
                //     context.commit('logout');
                //     return 400
                // }
            }
            return 200;
        }
    }
}

export default common;