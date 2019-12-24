<template>
  <div id="lxw">
    <header>
      <div class="back" @click="before()"></div>
      <span class="title">分类</span>
      <div class="search"></div>
      <router-link to="/cart">
      <div class="car"></div></router-link>
    </header>
    <main>
      <div class="vegetable" v-for="(item) in goodlist" :key="item.name">
        <!-- v-for="(item) in goodlist" :key="item" -->
        <span>{{ item.name }}</span>
        <ul class="goodlist">
          <li v-for="(item2) in item.children" :key="item2.name">
            <router-link to="./delist">
              <img :src="item2.imageUrl" alt />
              <p>{{item2.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 640) {
        // 这里的640 取决于设计稿的宽度
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
export default {
  data: function() {
    return {
      goodlist: [{}]
    };
  },
  async created() {
    //发送ajax请求数据，渲染
    let {
      data: {
        data: {
          categoryTree: { children }
        }
      }
    } = await this.$axios.get("https://wx.freshfresh.com/gateway", {
      params: {
        clientVersion: "m3.0.0",
        module: "appguide",
        version: "3.0",
        method: "ChildPageManager.GetCategoryList",
        bizContent: { CategoryID: 0, CategoryOnly: true }
      }
    });

    this.goodlist = children;
  },
  methods: {
    before() {
      // window.console.log(111);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
#lxw {
  @function vw($px) {
    @return ($px/750) * 100vw;
  }

  background-color: #edebec;

  header {
    width: 100%;
    height: 0.9rem;
    background-color: #ffee3c;
    position: relative;
    overflow: hidden;

    span {
      position: absolute;
      left: 50%;
      top: 48%;
      height: 0.26rem;
      transform: translate(-50%, -50%);
      font-size: vw(36);
      font-weight: 200;
      line-height: 0.26rem;
    }

    .back {
      width: vw(30);
      height: vw(40);
      background: url(../images/ia_100000149.jpg);
      background-size: contain;
      margin-left: vw(30);
      margin-top: vw(23);
    }

    .search {
      width: vw(40);
      height: vw(40);
      background: url(../images/ia_100000147.png);
      background-size: contain;
      position: absolute;
      top: vw(22);
      right: vw(106);
      background-repeat: no-repeat;
    }

    .car {
      width: vw(46);
      height: vw(50);
      background: url(../images/ia_100000148.png);
      background-size: contain;
      position: absolute;
      top: vw(22);
      right: vw(21);
      background-repeat: no-repeat;
    }
  }

  main {
    .vegetable {
      text-align: center;
      background-color: #f8f6f7;
      margin-bottom: 0.2rem;

      span {
        // font-family: "Helvetica Neue", Helvetica, sans-serif;
        background: url(../images/ia_100000165.png) no-repeat right center;
        background-size: 0.3rem 0.3rem;
        padding-right: 0.4rem;
        color: #333;
        font-size: 0.32rem;
        font-weight: 600;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        position: relative;
        top: 0.2rem;
      }

      .goodlist {
        padding: 1.1rem 0 0.1rem;
        width: 94%;
        margin: -0.6rem auto;
        text-align: center;
        overflow: hidden;
        margin-bottom: 0.2rem;

        li {
          width: 25%;
          float: left;
          text-align: center;
          padding-bottom: 0.2rem;

          img {
            width: 1.4rem;
            height: 1.4rem;
            margin-bottom: 0.1rem;
          }

          p {
            display: block;
            font-size: 0.26rem;
            color: #666;
            height: 0.4rem;
            line-height: 0.4rem;
          }
        }
      }
    }
  }
}
</style>
