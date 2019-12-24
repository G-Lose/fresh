<template>
  <div id="detail">
    <div class="toplist">
      <a class="place">上海</a>
      <a class="search">搜索</a>
      <a class="cart"></a>
    </div>
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from "./dlhnav";

export default {
  components: {
    Nav
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.toplist {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  height: 0.9rem;
  background: #feee3c url(../images/ff.png) no-repeat center 0.2rem;
  background-size: 2.8rem 0.25rem;
  position: relative;
  text-align: center;
  z-index: 10;
  .place {
    background: url(../images/s_station.jpg) no-repeat right center;
    background-size: 0.11rem 0.1rem;
    padding-right: 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: left;
    display: inline-block;
    font-size: 0.2rem;
    margin-top: 0.4rem;
    position: relative;
    top: 0rem;
  }
  .search {
    position: absolute;
    background: url(../images/search.png) no-repeat;
    background-size: 0.4rem 0.4rem;
    display: block;
    overflow: hidden;
    text-indent: -999rem;
    width: 0.46rem;
    height: 0.46rem;
    right: 1rem;
    top: 0.22rem;
  }
  .cart {
    background: url(../images/cart.png) no-repeat;
    background-size: 0.46rem 0.4rem;
    display: table;
    width: 0.46rem;
    height: 0.4rem;
    position: absolute;
    right: 0.2rem;
    top: 0.22rem;
  }
}
</style>