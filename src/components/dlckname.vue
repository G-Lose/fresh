<template>
  <div class="dlcheck" v-show="ckshow">
    <div class="left">
      <ul>
        <li v-for="(item) in ckname" :key="item">
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
    <div class="right">
      <span @click="clearall">清除</span>
    </div>
  </div>
</template>
<script>
import PubSub from "pubsub-js";
export default {
  data: function() {
    return {
      ckname: [],
      ckshow: false
    };
  },
  created() {
    PubSub.subscribe("ckname", (num, num2) => {
      this.ckname = num2;
      if (this.ckname.length) {
        this.ckshow = true;
      } else {
        this.ckshow = false;
      }
    });
  },
  methods: {
    clearall() {
      this.ckname = [];
      this.ckshow = false;
      PubSub.publish("ckname2", this.ckshow);
    }
  }
};
</script>
<style lang="scss" scoped>
.dlcheck {
  font-size: 0.28rem;
  height: 0.7rem;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: #edebec;
  z-index: 5;
  .left {
    height: 0.7rem;
    z-index: -1;
    width: 86%;
    overflow: hidden;
    ul {
      display: flex;
      li {
        display: inline-block;
        margin: 0.1rem 0 0 0.15rem;
        height: 0.5rem;
        line-height: 0.54rem;
        font-size: 0.26rem;
        padding: 0 0.4rem 0 0.1rem;
        background: url(../images/x22.png) no-repeat;
        background-color: #fff;
        background-position: 90% center;
        background-size: 0.26rem;
        p {
          height: inherit;
        }
      }
    }
  }
  .right {
    position: absolute;
    float: right;
    right: 0;
    top: 0;
    height: 0.7rem;
    line-height: 0.7rem;
    color: #666;
    width: 14%;
    text-align: center;
    background-color: #edebec;
    span {
      width: 100%;
      display: inline-block;
      height: 0.5rem;
      line-height: 0.5rem;
      margin-top: 0.1rem;
      border-left: 1px solid #dedcdd;
    }
  }
}
</style>