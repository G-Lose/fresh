<template>
  <div class="oDiv">
    <van-swipe :loop="false" :show-indicators="false" :width="100" :height="155">
      <van-swipe-item v-for="item in item" :key="item.data_id">
        <li>
          <a href="#">
            <img class="lazy" :src="item.src" alt />
            <p class="mod_title">{{ item.mod_title }}</p>
            <p class="mod_price">{{ item.mod_price }}</p>
          </a>
        </li>
        <div>{{item}}</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  props: ["item"],
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

<style lang="scss" scoped>
.van-swipe-item {
  width: 30%;
  height: 3.1rem;
}
li {
  width: 21%;
  height: 3.3rem;
  margin-right: 0.032rem;
  float: left;
  text-align: center;
  position: relative;
  flex: initial;
  min-width: 2rem;
  // display: none;
  a {
    color: #666;
    .lazy {
      width: 88%;
      height: 1.75rem;
      text-align: center;
      display: block;
      margin-bottom: 0.07rem;
    }

    /* .lazy:nth-last-of-type(1)  {
      height: 1rem;
    } */
    .mod_title {
      width: 88%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 140%;
      padding: 0 0.1rem;
      font-size: 0.2rem;
    }
    .mod_price {
      width: 88%;
      color: #ff5454;
      font-weight: 600;
      margin-top: 0.05rem;
      font-size: 0.2rem;
    }
  }
}
.van-swipe__track div:nth-last-child(1) img {
  width: 1.2rem;
  height: 1.2rem;
  margin: .3rem auto;
}
</style>