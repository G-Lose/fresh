<template>
  <div class="spe_title">
    <div class="spe_target">
      <RabbetA v-slot:wz>购物车</RabbetA>
      <RabbetA v-slot:before class="pre_btn" @click.native="before"></RabbetA>
    </div>
  </div>
</template>

<script>
import RabbetA from '../Slot/RabbetA'
/* import RabbetB from '../Slot/RabbetB' */
export default {
    components:{
        RabbetA,
        /* RabbetB */
    },
    methods:{
        before(){
            console.log(1);
            this.$router.go(-1)
        }
    }
};
</script>
<style lang="scss" scoped>
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
</style>