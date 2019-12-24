<template>
  <div>
    <div class="spe_title">
      <div class="spe_target">
        <RabbetA v-slot:wz>一起购</RabbetA>
        <RabbetA v-slot:before class="pre_btn" @click.native="before"></RabbetA>
      </div>
    </div>

    <div class="g-img1">
      <img src="../assets/step_0.jpg" alt />
    </div>
    <div class="g-img2">
      <img src="../assets/empty_body.png" alt />
    </div>

    <a href="#" class="openMHtmlBtn">
      <!-- <img
        src="../assets/user.svg"
       
      />-->
      我的团购
    </a>
  </div>
</template>

<script>
import RabbetA from "../Slot/RabbetA";
/* import RabbetB from '../Slot/RabbetB' */
export default {
  components: {
    RabbetA
    /* RabbetB */
  },
  methods: {
    before() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  background: #000;
}
.spe_title {
  height: 0.9rem;
  line-height: 0.9rem;
  background: #ffee3c;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  font-size: 0.36rem;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  .spe_target {
    position: relative;
    /* .pre_btn {
      position: absolute;
      left: 0.3rem;
      top: 0.22rem;
      background: url(../assets/pre.jpg) no-repeat left top;
      background-size: 0.3rem 0.4rem;
      width: 0.3rem;
      height: 0.4rem;
      overflow: hidden;
      text-indent: -99rem;
    } */
    .cart {
      width: 0.46rem;
      height: 0.4rem;
      background: url(../assets/cart.png) no-repeat;
      background-size: 0.46rem 0.4rem;
      display: table;
      position: absolute;
      right: 0.2rem;
      top: 0.22rem;
      /* .num_1 {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        min-width: 0.3rem;
        line-height: 0.3rem;
        position: absolute;
        right: 0;
        top: -0.1rem;
        font-size: 0.2rem;
        background-color: #ff5656;
        border-radius: 0.15rem;
        color: #fff;
      } */
    }
    .search {
      position: absolute;
      background: url(../assets/search.png) no-repeat;
      background-size: 0.4rem 0.4rem;
      display: block;
      overflow: hidden;
      text-indent: -999rem;
      width: 0.46rem;
      height: 0.46rem;
      right: 1rem;
      top: 0.22rem;
    }
  }
}
.g-img1 img {
  border: none;
  width: 100%;
  vertical-align: middle;
  margin-top: 0.9rem;
}
.g-img2 {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.g-img2 img {
  border: none;
  width: 50%;
  margin: 25% auto;
}
.openMHtmlBtn {
  width: 2.1rem;
  height: 0.68rem;
  font-size: 0.28rem;
  padding: 0.15rem 0.3rem;
  position: fixed;
  left: 0;
  bottom: 3rem;
  background-color: rgba(248, 101, 97, 0.9);
  z-index: 12;
  color: #fff;
  border-radius: 0 0.32rem 0.32rem 0;
}
</style>