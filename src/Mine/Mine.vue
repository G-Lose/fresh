<template>
  <div class="mine">
    <!-- top -->
    <div class="user_info" id="user_info">
      <div id="user_info_div">
        <img src="//qiniu.freshfresh.com/default_user_head.jpg" />
        <div v-show="lgregshow">
          <router-link to="/login">
            <a class="add_cart u_sub a_dl" href="#">登录</a>
          </router-link>
          <router-link to="/reg">
            <a class="add_cart u_sub a_zc" href="#">注册</a>
          </router-link>
        </div>
        <div v-show="!lgregshow">{{ this.ruleForm.username }}欢迎您</div>
      </div>
    </div>

    <!-- 1 -->
    <div class="order_mod">
      <h2 class="order_mod_t user_order">
        我的订单
        <span class="order_t_exp dataType" data-type="all">全部订单</span>
      </h2>
      <ul class="user_content">
        <li>
          <div class="order_a">
            待付款
            <i></i>
          </div>
        </li>
        <li>
          <div class="order_b">
            待收货
            <i></i>
          </div>
        </li>

        <li></li>
        <li></li>
      </ul>
    </div>
    <!-- 2 -->
    <div class="order_mod">
      <h2 class="order_mod_t user_dol">我的资产</h2>
      <ul class="user_content">
        <li>
          <a data-href="user_redpacket.html">
            <span class="text_y">
              <em id="coupon_count_em" class="order_em">0</em>个
            </span>
            <br />红包
          </a>
        </li>
        <li>
          <a data-href="amount_detail.html">
            <span class="text_rd">
              <em id="user_account_money_em" class="order_em">0.00</em>元
            </span>
            <br />余额
            <em></em>
          </a>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <!-- 3 -->
    <div class="order_mod">
      <a class="problem" href="#">
        <h2 class="order_mod_t user_ser">联系客服</h2>
      </a>
      <h2 class="action_btn order_mod_t supplier_page_apply">供应商招募</h2>
      <a href="#">
        <h2 class="order_mod_t user_set" @click="SetApp">设置</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lgregshow: true,
      ruleForm: {
        username: ""
      }
    };
  },
  methods: {
    SetApp() {
      this.$router.push("./setApp");
    }
  },
  created() {
    if (this.$route.query.usernameq) {
      this.ruleForm.username = this.$route.query.usernameq;
      this.lgregshow = false;
    } else {
      this.lgregshow = true;
    }
  }
};
</script>

<style lang="scss">
body {
  background: #f0edef;
}
.mine {
  background: #f0edef;
  .user_info {
    position: relative;
    height: 3.6rem;
    width: 100%;
    display: table;
    text-align: center;
    vertical-align: middle;
    background: #f8f6f7;
    border-bottom: 1px solid #f0edef;
    #user_info_div {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0.7rem;
      img {
        width: 1.28rem;
        height: 1.28rem;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        border: none;
        /* vertical-align: middle; */
      }
      div {
        position: relative;
        height: 0.7rem;
        margin-top: 0.1rem;
        .u_sub {
          width: 1.74rem;
          margin: 0.1rem;
          min-width: 1.8rem;
          height: 0.5rem;
          line-height: 0.48rem !important;
          display: inline-block;
          background: #ffee3c;
          border-radius: 0.2rem;
          text-align: center;
          font-size: 0.24rem;
          color: #333;
        }
        .a_dl {
          position: absolute;
          top: 0;
          left: 23.5%;
        }
        .a_zc {
          position: absolute;
          top: 0;
          right: 23.5%;
        }
      }
    }
  }

  .order_mod {
    background: #f8f6f7;
    position: relative;
    overflow: hidden;
    margin-top: 0.15rem;

    /* 1 */
    .user_order {
      background: url(../assets/u01.png) no-repeat 0.1rem center;
      background-size: 0.48rem 0.48rem;
      text-indent: 0.45rem;
      color: #333;
    }
    /* 2 */
    .user_dol {
      background: url(../assets/u02.png) no-repeat 0.1rem center;
      background-size: 0.48rem 0.48rem;
      text-indent: 0.45rem;
    }
    /* 1 */
    .order_mod_t {
      border-bottom: 1px solid #f0edef;
      height: 0.85rem;
      line-height: 0.85rem;
      font-size: 0.28rem;
      padding: 0 0.2rem;
      overflow: hidden;
    }
    .dataType {
      width: 95%;
      position: absolute;
      top: 0;
    }
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

  .user_content {
    display: -webkit-flex;
    display: flex;
    text-align: center;
    height: 1.2rem;
    padding-top: 0.2rem;
    li {
      float: left;
      width: 25%;
      height: 1rem;
      -webkit-flex: 1;
      flex: 1;
      /* 1 */
      .order_a {
        background: url(../assets/ur01.png) no-repeat top center;
        background-size: 0.48rem 0.48rem;
        font-size: 0.24rem;
        padding-top: 0.5rem;
      }
      .order_b {
        background: url(../assets/ur02.png) no-repeat top center;
        background-size: 0.48rem 0.48rem;
        font-size: 0.24rem;
        padding-top: 0.5rem;
      }
      /* 2 */
      a {
        color: #333;
        font-size: 0.24rem;
        line-height: 120%;
        position: relative;
        display: inline-block;
        min-width: 0.9rem;
        top: -0.32rem;
        .text_y {
          color: #e8a92a;
          padding-top: 0.1rem;
          display: inline-block;
          font-size: 0.24rem;
          .order_em {
            font-size: 0.4rem;
          }
        }
        .text_rd {
          .order_em {
            font-size: 0.4rem;
          }
          color: #fa6b48;
          padding-top: 0.1rem;
          display: inline-block;
          font-size: 0.24rem;
        }
      }
    }
  }
  .user_ser {
    background: url(../assets/u06.png) no-repeat 0.1rem center;
    background-size: 0.48rem 0.48rem;
    text-indent: 0.45rem;
    color: #333;
  }
  .supplier_page_apply {
    background: url(../assets/u07.png) no-repeat 0.1rem center;
    background-size: 0.48rem 0.48rem;
    text-indent: 0.45rem;
  }
  .user_set {
    background: url(../assets/u05.png) no-repeat 0.1rem center;
    background-size: 0.48rem 0.48rem;
    text-indent: 0.45rem;
    color: #333;
  }
}
</style>