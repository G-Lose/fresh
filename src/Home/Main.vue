<template>
  <main>
    
    <!-- 轮播图 -->
    <Swipe></Swipe>

    <!-- 商品列表 -->
    <Pagelist></Pagelist>
    
    <!-- 更多商品 -->
    <!-- <Pagelisttop></Pagelisttop> -->

    <!-- 组合产品 -->
    <Assembly></Assembly>

    <!-- 组合底部 -->
    <!-- <Assemblybuttom></Assemblybuttom> -->
    

    
  </main>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Swipe from "./Swipe";
import Pagelist from "./Pagelist";
/* import Pagelisttop from "./Pagelisttop"; */
import Assembly from "./Assembly";
/* import Assemblybuttom from "./Assemblybuttom"; */

export default {
  data() {
    return {
    };
  },
  components:{
    Swipe,
    Pagelist,
    Assembly,
  },

  
  
};
</script>

<style lang="scss" >


</style>