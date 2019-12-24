<template>
  <van-swipe :autoplay="3000" indicator-color="white" style="height: 165px;">
    <van-swipe-item v-for="(i, index) in images" :key="index">
      <img :src="i">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
data() {
    return {
      images: [
        "http://qiniu.freshfresh.com/ff_app_3_0_20191212001826_605098.png?imageView2/2/w/800/q/100",
        "http://qiniu.freshfresh.com/ff_app_3_0_20191211232325_339f89.gif?imageView2/2/w/800/q/100",
        "http://qiniu.freshfresh.com/ff_app_3_0_20191214222224_e6e79c.png?imageView2/2/w/800/q/100",
        "http://qiniu.freshfresh.com/ff_app_3_0_20191213203900_da2228.png?imageView2/2/w/800/q/100",
        "http://qiniu.freshfresh.com/ff_app_3_0_20191212001826_605098.png?imageView2/2/w/800/q/100",
        "http://qiniu.freshfresh.com/ff_app_3_0_20191211232325_339f89.gif?imageView2/2/w/800/q/100"
      ]
    };
  }
 
};
</script>
<style scoped>
img{
    display: block;
    width: 100%;
    height:3.28rem;
}
</style>