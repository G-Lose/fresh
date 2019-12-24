import Vue from 'vue'

// 1安装Vuex /* npm i vuex */

//2 引入vuex
import Vuex from 'vuex'

import common from './common';
import axios from 'axios'

import Qs from "qs";

//3 引用vuex
Vue.use(Vuex)

// 4.创建实例 store
const store = new Vuex.Store({
    modules: {
        common //存公共的状态
    },
    state: {
         // 相当于实例里面的data属性
        cartList: [],
        
    },

    getters: { // getters类似于实例中的computed计算属性，getters是get方法。computed有get和set
        sumAmout:state=>{
            var total = 0 ;
            state.cartList.forEach(item=>{
                total+=item.des_now_m.slice(1)*item.number
            })
            return total.toFixed(2) 
        },
        /* 数量 */
        number: state=>{
            return state.cartList.length
        }

    },
    mutations: { // 类似于实例中的methods方法，能够操控数据state数据的唯一方式 (两个参数state ××)
        
        addGoods: (state, {data}) => {
            state.cartList=data;
            
        }

    },
    actions: {
        // 发送网络请求  接受两个参数 (context, ××)
        /* 渲染购物车 */
        async getamoute(context){ 
            let target =await axios.get('http://localhost:1910/home') ;
            context.commit('addGoods',target);
          },

        async setadd(context,min){
            let max = Qs.stringify(min)
            let target = await axios.post("http://localhost:1910/home",max);
            window.console.log(target,"Vue添加数据")
        },
          

        /* 删除商品 */
        setremove(context,data_id){ 
          axios.delete('http://localhost:1910/home',{data: { data_id:data_id }}) ;
        },

        /* 更新 */
        setchange(context,info){
            // console.log(info,'+78=')
            var datastr = Qs.stringify( info);
            // console.log(datastr,"1222")
            axios.put('http://localhost:1910/home',datastr,{headers: { "Content-Type": "application/x-www-form-urlencoded" }})
            
        },

        /* 加入购物车 */
        setinset(){}
    }


})

export default store