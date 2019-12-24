<template>
  <div>
    <div>
      <router-view />
    </div>

    <template>
      <div>
        <!-- v-show="$route.meta.nav"  隐藏显示 -->
        <ul class="foot" v-show="$route.meta.nav">
          <li v-for="(item,index) in data" :key="item.id">
            <a href="###" @click.prevent="goto(item.name,index)">
              <img :src="item.linkurl" alt />
              <p>{{ item.text }}</p>
            </a>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "group",
      data: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          id: "page_index",
          linkurl: require("../images/ft1.png")
        },
        {
          name: "type",
          path: "/type",
          text: "分类",
          id: "page_classify",
          linkurl: require("../images/ft2.png")
        },
        {
          name: "group",
          path: "/group",
          text: "两鲜团",
          id: "page_group",
          linkurl: require("../images/ft3.png")
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的两鲜",
          id: "page_mff",
          linkurl: require("../images/ft4.png")
        }
      ]
    };
  },
  methods: {
    goto(name, index) {
      this.$router.push(name);
      this.currentidx = index;
      // window.console.log(1);
      if (index == 0) {
        this.data[0].linkurl = require("../images/ft1a.png");
        this.data[3].linkurl = require("../images/ft4.png");
      }
      if (index == 3) {
        this.data[3].linkurl = require("../images/ft4a.png");
        this.data[0].linkurl = require("../images/ft1.png");
      }
    }
  },
  created() {
    // console.log(this.$route);
    this.goto(this.$route);
  }
};
</script>

<style lang="scss" scoped>
/*  a{
      text-decoration:none !important; 
      color:#333 !important ;
      
    } */
.foot {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: table;
  border-top: 1px solid #e1e1e1;
  background: #fafafa;
  overflow: hidden;
  height: 1rem;
  z-index: 3;
  li {
    display: table-cell;
    width: 25%;
    text-align: center;
    vertical-align: middle;
    height: 0.3rem;
    a {
      display: inline-block;
      min-width: 0.6rem;
      font-size: 0.2rem;
      line-height: 100%;
      background-size: 0.56rem 0.56rem;
      background-position: center top;
      background-repeat: no-repeat;
      //   padding-top: 0.6rem;
      width: 1.2rem;
      height: 1rem;
      color: #666;
      border-radius: 0.2rem;
      img {
        margin-top: 0.1rem;
        width: 0.56rem;
        height: 0.56rem;
      }
    }
    // .active {
    //   // background-color: #feee3c;
    // }
  }
}
</style>