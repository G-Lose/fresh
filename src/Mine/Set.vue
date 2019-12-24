<template>
  <div>
    <TopComponentSet></TopComponentSet>

    <!-- 内容 -->
    <div class="add_new_a">
      <h2 class="order_mod_t user_bot action_open_url">
        关于两鲜
        <span class="order_t_exp user_crumbs">当前版本1.0</span>
      </h2>
      <h2 class="order_mod_t user_bot action_open_url">
        帮助中心
        <span class="order_t_exp user_crumbs">当前版本1.0</span>
      </h2>
      <h2 class="order_mod_t user_bot action_open_url">
        营业执照
        <span class="order_t_exp user_crumbs">当前版本1.0</span>
      </h2>
    </div>

    <!-- 退出 -->
    <router-link to="/mine">
      <div id="logout_btn" class="add_address mg_add" style>退出当前账号</div>
    </router-link>
  </div>
</template>

<script>
import TopComponentSet from "../Slot/TopComponentSet";
export default {
  components: {
    TopComponentSet
  }
};
</script>

<style lang="scss">
.add_new_a {
  margin-top: 0.9rem;
  background: #f8f6f7;
  overflow: hidden;
  .order_mod_t {
    border-bottom: 1px solid #f0edef;
    height: 0.87rem;
    line-height: 0.85rem;
    font-size: 0.28rem;
    padding: 0 0.2rem;
    overflow: hidden;
    .order_t_exp {
      display: block;
      text-align: right;
      float: right;
      color: #666;
      font-size: 0.24rem;
      background: url(../assets/add_r.png) no-repeat right center;
      background-size: 0.15rem 0.3rem;
      margin-right: 0.1rem;
      padding-right: 0.3rem;
    }
  }
}
.add_address {
  position: relative;
  left: 0;
  bottom: 0;
  width: 95%;
  margin: 0 auto;
  background: #ffee3c;
  margin-top: 0.4rem;
  text-align: center;
  color: #333;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
}
</style>