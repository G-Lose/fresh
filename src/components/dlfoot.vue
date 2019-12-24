<template>
  <div>
    <ul class="foot">
      <li v-for="(item,index) in footlist" :key="item.linkname">
        <a href="###" @click.prevent="change(item.name,index)">
          <img :src="item.linkurl" alt />
          <p>{{ item.linkname }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      footlist: [
        {
          linkname: "首页",
          linkurl: require("../images/ft1.png"),
          name: "home"
        },
        {
          linkname: "分类",
          linkurl: require("../images/ft2.png"),
          name: "type"
        },
        {
          linkname: "两鲜团",
          linkurl: require("../images/ft3.png"),
          name: "group"
        },
        {
          linkname: "我的两鲜",
          linkurl: require("../images/ft4.png"),
          name: "mine"
        }
      ],
      currentidx: 0
    };
  },
  methods: {
    change(name, index) {
      this.currentidx = index;
      // window.console.log(1);
      this.$router.push(name);
      if (index == 0) {
        this.footlist[0].linkurl = require("../images/ft1a.png");
        this.footlist[3].linkurl = require("../images/ft4.png");
      }
      if (index == 3) {
        this.footlist[3].linkurl = require("../images/ft4a.png");
        this.footlist[0].linkurl = require("../images/ft1.png");
      }
    }
  },
  created() {
    this.footlist[0].linkurl = require("../images/ft1a.png");
    // console.log(this.$route);
    this.change(this.$route);
  }
};
</script>
<style lang="scss" scoped>
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