<template>
  <div>
    <div class="bottom_nav">
      <ul class="bottom_list">
        <li id="sign">
          <a href="#">登录</a>
        </li>
        <li>|</li>
        <li class="reg">
          <a href="#">注册</a>
        </li>
        <li class="reg">|</li>
        <li>
          <a href="#">APP下载</a>
        </li>
      </ul>
      <p>两鲜商贸(上海)有限公司&nbsp;&nbsp;＠2016FreshFresh.com</p>
      <p>版权所有&nbsp;&nbsp;沪ICP备13042072号</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bottom_nav {
  text-align: center;
  color: #999;
  line-height: 150%;
  padding: 0.2rem 0;
  font-size: 0.2rem;
  background-color: #edebec;
 /*  background: #000; */
  margin-bottom:.6rem;
  ul {
    li {
      display: inline-block;
      padding: 0.1rem 0;
      a {
        color: #333;
        padding: 0 0.2rem;
      }
    }
  }
}
</style>