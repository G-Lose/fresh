<template>
  <div class="lgbox">
    <h1>
      登陆
      <router-link to="/mine">
        <a href="###"></a>
      </router-link>
    </h1>
    <div class="lgwaytab">
      <ul>
        <li v-for="(item,index) in lgtab" :key="item.wayname" class="lgwtab">
          <a href="###" :class="currentIdx==index?'active':''" @click="tab(index)">{{item.wayname}}</a>
        </li>
      </ul>
    </div>
    <div class="lgway">
      <form class="user">
        <div>
          <input
            type="text"
            v-model="ruleForm.username"
            placeholder="请输入您的手机号码"
            maxlength="11"
            @input="clearif()"
            @blur="checkname()"
          />
          <!-- @input="clearun" -->
          <a href="###" class="clearuser" v-show="clearshow" @click="clearuser"></a>
        </div>
        <div>
          <input type="password" placeholder="登陆密码" v-model="ruleForm.password" @input="checkpsw()" />
          <a href="###"></a>
        </div>
        <div @click="lgnow" :class="regutrue&&regptrue?'logint':'login'">登录</div>
      </form>
      <form class="user" style="display:none">
        <div>
          <input
            type="text"
            v-model="ruleForm.username"
            placeholder="请输入您的手机号码"
            maxlength="11"
            @input="clearif()"
          />
          <!-- @input="clearun" -->
          <a href="###" class="clearuser" v-show="clearshow" @click="clearuser"></a>
        </div>
        <div>
          <input type="text" placeholder="短信验证码" />
          <a href="###" class="getcode">获取验证码</a>
        </div>
        <div class="login">登录</div>
        <!-- @click="lgnow" :class="regutrue&&regptrue?'logint':'login'" -->
      </form>
    </div>
    <p class="regg">
      <router-link to="/reg">
        <a href="###">免费注册成为两鲜会员</a>
      </router-link>
    </p>
    <transition name="fade">
      <div class="tips" v-show="errshow">{{ errtip }}</div>
    </transition>
  </div>
</template>
<script>
// import Qs from "qs";
export default {
  data: function() {
    return {
      currentIdx: 0,
      clearshow: false,
      errtip: "",
      errshow: false,
      regutrue: false,
      regptrue: false,
      lgtab: [
        {
          wayname: "帐号登陆"
        },
        {
          wayname: "短信登陆"
        }
      ],
      ruleForm: {
        username: "",
        password: ""
      }
    };
  },
  watch: {
    errshow(old, newval) {
      // window.console.log(old, newval);
      if (old) {
        this.showtime();
      }
      if (newval) {
        window.console.log();
      }
    }
  },
  created() {
    this.ruleForm.username = this.$route.query.username;
    this.checkname();
  },
  methods: {
    showtime() {
      this.timer = setTimeout(() => {
        this.errshow = false;
      }, 3000);
    },
    clearuser() {
      // window.console.log(123);
      this.ruleForm.username = "";
      this.clearshow = false;
    },
    tab(index) {
      this.currentIdx = index;
      var box1 = document.getElementsByClassName("user");
      for (var j = 0; j < box1.length; j++) {
        box1[j].style.display = "none";
      }
      box1[index].style.display = "block";
    },
    clearif() {
      if (this.ruleForm.username) {
        this.clearshow = true;
      } else {
        this.clearshow = false;
      }
    },
    async checkname() {
      if (this.ruleForm.username === "") {
        this.errtip = "手机号不可为空";
        this.errshow = true;
        this.regutrue = false;
      } else {
        if (this.ruleForm.username !== "") {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(this.ruleForm.username)) {
            this.errtip = "请输入有效的手机号码";
            this.errshow = true;
            this.regutrue = false;
          } else {
            // window.console.log("can");
            this.regutrue = true;
          }
        }
      }
    },
    checkpsw() {
      if (this.ruleForm.password === "") {
        this.errtip = "密码不能为空";
        this.errshow = true;
        this.regptrue = false;
      } else if (this.ruleForm.password.length < 6) {
        this.errtip = "密码长度最少6位";
        this.errshow = true;
        this.regptrue = false;
      } else {
        this.errshow = false;
        this.regptrue = true;
      }
      // window.console.log(this.regptrue, this.regutrue);
    },
    async lgnow() {
      if (this.regutrue && this.regptrue) {
        //需求：发起请求，实现注册功能
        let { username: username, password } = this.ruleForm;
        // var datastr = Qs.stringify({ username, password });
        let { data } = await this.$axios.get(
          "http://localhost:10111/users/login",
          {
            params: {
              username,
              psw: password,
              keep: true
            }
          }
        );
        // window.console.log(this.ruleForm.username, this.ruleForm.password);
        if (data.code) {
          this.errtip = "登陆成功";
          let usernameq = this.ruleForm.username;
          window.console.log(this.$store.commit);
          this.$store.commit("login", {
            username: username,
            Authorization: data.authorization
          });
          this.$router.push({ path: "mine", query: { usernameq } });
        } else {
          this.errtip = "帐号或密码错误";
          this.errshow = true;
          this.ruleForm.password = "";
        }
      }
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
  // transform: translateY(-10px); /*水平方向 X 坐标移动10px*/
}

.lgbox {
  background-color: #fafafa;
  position: fixed;
  height: 100%;
  width: 100%;
  // z-index: -1;
  .tips {
    width: 70%;
    margin: auto;
    margin-top: 2rem;
    margin-left: 1rem;
    position: fixed;
    background-color: rgba(63, 61, 61, 0.726);
    color: white;
    text-align: center;
    border-radius: 5%;
  }
  .lgway {
    width: 6.56rem;
    margin: 0.8rem auto 0;
    text-align: center;
    color: #999;
    .user {
      text-align: center;
      div {
        width: 6.56rem;
        margin: 0 auto 0.3rem;
        position: relative;
        input {
          background: #fff;
          width: 6.56rem;
          line-height: 0.86rem;
          height: 0.86rem;
          display: block;
          border: 1px solid #e5e5e5;
          border-radius: 0.43rem;
          text-indent: 0.3rem;
          font-size: 0.28rem;
        }
        input:focus {
          border: 1px solid #4b943c;
        }
        a {
          color: #498f45;
          font-weight: 500;
        }
        .getcode {
          color: #498f45;
          position: absolute;
          right: 0.3rem;
          top: 0.25rem;
        }
        .clearuser {
          position: absolute;
          right: 0.1rem;
          top: 0.12rem;
          background: url(../images/wenben_shanchu.png) no-repeat;
          background-size: 0.35rem 0.35rem;
          width: 0.24rem;
          height: 0.24rem;
          /* display: inline-block; */
          cursor: pointer;
          // display: none;
          outline: none;
          background-position: center;
          padding: 0.2rem 0.2rem;
        }
      }
      .logint {
        background: #ffee3c;
        color: #333;
        line-height: 0.86rem;
        border: 1px solid #d4d4d4;
        border-radius: 0.43rem;
        font-size: 0.36rem;
        font-family: "Helvetica Neue", Helvetica, sans-serif;
        cursor: pointer;
      }
      .login {
        background: #e5e5e5;
        color: #333;
        line-height: 0.86rem;
        border: 1px solid #d4d4d4;
        border-radius: 0.43rem;
        font-size: 0.36rem;
        font-family: "Helvetica Neue", Helvetica, sans-serif;
        cursor: pointer;
      }
    }
  }
  .regg {
    padding-top: 0.7rem;
    text-align: center;
    a {
      color: #498f45;
      font-weight: 500;
      border-bottom: 1px solid #498f45;
    }
  }
  .lgwaytab {
    height: 0.8rem;
    margin-top: 1rem;
    padding-top: 0.9rem;
    ul {
      width: 98%;
      margin: 0 auto;
      overflow: hidden;
      background: url(../images/s_line.jpg) no-repeat center 0.2rem;
      background-size: 0.04rem 0.48rem;
      li {
        width: 50%;
        float: left;
        text-align: center;
        .active {
          color: #4b943c;
          border-bottom: 0.05rem solid #4b943c;
        }
        a {
          display: inline-block;
          color: #666;
          width: 1.42rem;
          line-height: 0.75rem;
          border-bottom: 0.05rem solid transparent;
        }
      }
    }
  }
}
h1 {
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
  a {
    position: absolute;
    left: 0.3rem;
    top: 0.22rem;
    background: url(../images/pre.jpg) no-repeat left top;
    background-size: 0.3rem 0.4rem;
    width: 0.3rem;
    height: 0.4rem;
    overflow: hidden;
    text-indent: -99rem;
  }
}
</style>