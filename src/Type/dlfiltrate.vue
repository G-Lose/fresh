<template>
  <div class="filtrate">
    <div class="fsort">
      <span @click="isok=!isok">{{fsortnow}}</span>
    </div>
    <div @click="screenf()" :class="filchecked==true? 'f2 fsort' : 'f2 fsort fsb'">筛选</div>
    <div class="f3">列表</div>
    <transition name="fade">
      <ul v-if="isok" class="fop">
        <li
          :class="currentidx==index ? 'active2' : ''"
          v-for="(item,index) in fsort"
          :key="item"
          @click="tabsort(item,index)"
        >{{ item }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  data: function() {
    return {
      fsort: ["默认排序", "新品优先", "销量优先", "价格低到高", "价格高到低"],
      fsortnow: "默认排序",
      currentidx: 0,
      isok: false,
      filshow: false,
      filchecked: true //筛选
    };
  },
  methods: {
    //切换顺序
    tabsort(item, index) {
      this.currentidx = index;
      this.fsortnow = item;
      this.isok = false;
    },
    //筛选按钮
    screenf() {
      this.filshow = true;
      PubSub.publish("filshow", this.filshow);
      PubSub.subscribe("filcheck", (event, num) => {
        this.filchecked = num;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s; /*all 所有效果，持续1秒 */
}
/*隐藏过渡效果*/
.fade-leave-active {
  transition: all 0.3s;
}
/*显示前或隐藏后的效果*/
.fade-enter,
.fade-leave-to {
  opacity: 0; /*都是隐藏效果*/
  transform: translateY(-10px); /*水平方向 X 坐标移动10px*/
}

.filtrate {
  position: relative;
  background-color: #fff;
  padding: 0.15rem 0;
  height: 0.5rem;
  z-index: 10;
  border-top: 0;
  div {
    display: inline-block;
    font-size: 0.29rem;
    width: 33%;
    text-align: center;
    border-right: 1px solid #dedcdd;
    background-position: 97% 50%;
    background-size: auto 70%;
    background-repeat: no-repeat;
    height: 0.5rem;
    line-height: 0.6rem;
  }
  div:nth-child(3) {
    border-right: 0;
    float: left;
  }
  .active2 {
    color: #4b943c;
  }
  .fsort {
    float: left;
    color: #4b943c;
    span {
      background-image: url(../images/sortspan.png);
      width: auto;
      padding: 0 0.3rem;
      background-repeat: no-repeat;
      background-position: 101% 38%;
      background-size: auto 59%;
      height: initial;
      display: inline-block;
      text-indent: -0.2rem;
      font-size: 0.29rem;
    }
  }
  .fsb {
    color: #333;
  }
  .f2 {
    background-image: url(../images/sortspan2.png);
    background-position: 73% center;
  }
  .f3 {
    background-image: url(../images/sortspan3.png);
    background-position: 76% center;
  }
  .fop {
    position: absolute;
    margin-top: 0.6rem;
    padding-top: 0rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 6;
    // overflow: hidden;

    li {
      border-bottom: 1px solid #dedcdd;
      padding: 0.22rem 0.4rem 0.22rem 0.4rem;
      font-size: 0.3rem;
    }
  }
}
</style>