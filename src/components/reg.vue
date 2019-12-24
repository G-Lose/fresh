<template>
  <div class="regbox">
    <h1>
      注册
      <router-link to="/mine">
        <a href="###"></a>
      </router-link>
    </h1>
    <div class="regcon">
      <form action :model="ruleForm" ref="ruleForm">
        <!-- :rules="rules" -->
        <div>
          <input
            type="text"
            placeholder="请输入您的手机号码"
            v-model="ruleForm.username"
            maxlength="11"
            @blur="checkname()"
          />
          <a href="###" class="clearin" va></a>
        </div>
        <div>
          <input type="text" name id placeholder="短信验证码" />
          <a href="###" class="getcode">获取验证码</a>
        </div>
        <div>
          <input type="password" v-model="ruleForm.psw" placeholder="设置登陆密码" @input="checkpsw()" />
          <a href="###" class="clearin"></a>
        </div>
        <div :class="regutrue&&regptrue?'regtrue':'regfalse'" @click="regnow('ruleForm')">确定</div>
      </form>
      <p class="service">
        注册即表示您已同意
        <a href="https://qiniu.freshfresh.com/sa/sensorsdata.min.js">《两鲜服务协议》</a>
      </p>
      <p class="gologin">
        <router-link to="/login">
          <a href="###">我有两鲜账号，去登录</a>
        </router-link>
      </p>
    </div>
    <div class="tips" v-show="errshow">{{ errtip }}</div>
  </div>
</template>
<script>
import Qs from "qs";
export default {
  data: function() {
    //验证用户名是否存在
    return {
      ruleForm: {
        username: "",
        psw: ""
      },
      errshow: false,
      errtip: "",
      timer: null,
      regutrue: false,
      regptrue: false
    };
  },
  // mounted() {
  //   if (this.errshow) {
  //     this.timer = setTimeout(() => {
  //       this.num--;
  //     }, 1000);
  //     if (this.num <= 0) {
  //       this.errshow = false;
  //     }
  //   }
  // },
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
  methods: {
    showtime() {
      this.timer = setTimeout(() => {
        this.errshow = false;
      }, 3000);
    },
    checkpsw() {
      if (this.ruleForm.psw === "") {
        this.errtip = "密码不能为空";
        this.errshow = true;
        this.regptrue = false;
      } else if (this.ruleForm.psw.length < 6) {
        this.errtip = "密码长度最少6位";
        this.errshow = true;
        this.regptrue = false;
      } else {
        this.errshow = false;
        this.regptrue = true;
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
            let { data } = await this.$axios.get(
              "http://localhost:10111/users/check",
              {
                params: {
                  username: this.ruleForm.username
                }
              }
            );
            if (data.code == 1) {
              this.errshow = false;
              this.regutrue = true;
              //可以注册
              // alert("注册成功")
              // window.console.log(data);
            } else {
              //不能注册
              this.errtip = "用户名已存在!";
              this.errshow = true;
              this.regutrue = false;
            }
          }
        }
      }
    },
    async regnow() {
      if (this.regutrue && this.regptrue) {
        // alert("注册成功!");
        //需求：发起请求，实现注册功能
        let { username: username, psw } = this.ruleForm;
        var datastr = Qs.stringify({ username, psw });
        let { data } = await this.$axios.post(
          "http://localhost:10111/users/reg",
          datastr,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          }
        );
        //成功就跳转到登录页并把用户名带过去
        if (data.code) {
          this.$router.push({
            name: "login",
            query: { username },
            // params: { username }
          });
          alert("注册成功");
        } else {
          alert("注册失败");
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.regbox {
  background-color: #fafafa;
  position: fixed;
  height: 100%;
  width: 100%;
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
  .gologin {
    padding-top: 0.7rem;
    text-align: center;
    a {
      color: #498f45;
      font-weight: 500;
      border-bottom: 1px solid #498f45;
    }
  }
  .regcon {
    width: 6.56rem;
    margin: 0.8rem auto 0;
    text-align: center;
    color: #999;
    padding-top: 0.9rem;
    .regfalse {
      background: #e5e5e5;
      color: #333;
      line-height: 0.86rem;
      border: 1px solid #d4d4d4;
      border-radius: 0.43rem;
      font-size: 0.36rem;
      font-family: "Helvetica Neue", Helvetica, sans-serif;
      cursor: pointer;
    }
    .regtrue {
      background: #ffee3c;
      color: #333;
      line-height: 0.86rem;
      border: 1px solid #d4d4d4;
      border-radius: 0.43rem;
      font-size: 0.36rem;
      font-family: "Helvetica Neue", Helvetica, sans-serif;
      cursor: pointer;
    }
    .service {
      font-size: 0.25rem;
    }
    form {
      text-align: center;
    }
    a {
      color: #498f45;
      font-weight: 500;
    }
    .clearin {
      position: absolute;
      right: 0.1rem;
      top: 0.12rem;
      background: url(../images/wenben_shanchu.png) no-repeat;
      background-size: 0.35rem 0.35rem;
      width: 0.24rem;
      height: 0.24rem;
      display: inline-block;
      cursor: pointer;
      display: none;
      outline: none;
      background-position: center;
      padding: 0.2rem 0.2rem;
      background-color: white;
    }
    div {
      width: 6.56rem;
      margin: 0 auto 0.3rem;
      position: relative;
    }
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
    .getcode {
      color: #498f45;
      position: absolute;
      right: 0.3rem;
      top: 0.25rem;
    }
    input:focus {
      border: 1px solid #4b943c;
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
}
</style>