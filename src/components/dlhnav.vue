<template>
  <div class="nav">
    <div class="wnav">
      <ul class="lnav">
        <li
          v-for="(item,index) in leiname"
          :key="item.name"
          :class="currentIdx==index ? 'active': ''"
          @click="currentIdx=index"
        >
          <a href="###">{{ item.name}}</a>
        </li>
      </ul>
    </div>
    <div v-show="isok" class="opennav"></div>
    <h2 v-show="isok" class="openh2">全部分类</h2>
    <div class="pdown" @click="open()">
      <img src="../images/open_l.jpg" alt />
    </div>
    <table v-show="isok" class="openlist">
      <tbody>
        <tr>
          <td
            v-for="(item,index) in leiname"
            :key="item.name"
            :class="currentIdx==index ? 'active': ''"
            @click="currentIdx=index"
          >
            <a>
              <img :src="item.url" alt />
              <p>{{ item.name }}</p>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      leiname: [
        {
          name: "推荐",
          url: require("../images/newbai.png")
        },
        {
          name: "蔬菜豆制品",
          url: require("../images/newbai2.png")
        },
        {
          name: "水 果",
          url: require("../images/newbai3.png")
        },
        {
          name: "肉禽蛋",
          url: require("../images/newbai4.png")
        },
        {
          name: "火 锅",
          url: require("../images/newbai5.png")
        },
        {
          name: "乳 品",
          url: require("../images/newbai6.png")
        }
      ],
      isok: false,
      currentIdx: 1
    };
  },
  methods: {
    open() {
      this.isok = !this.isok;
    }
  }
};
</script>
<style lang="scss" scoped>
.active {
  border-bottom: 2px solid #4b943c;
  a {
    color: #4b943c !important;
    img {
      background-color: #feee3c;
    }
  }
}
.nav {
  position: relative;
  background: #fff;
  height: 0.8rem;
  z-index: 11;
  font-size: 0.28rem;
  .wnav {
    width: 90%;
    position: relative;
    height: 100%;
    .lnav {
      height: 0.59rem;
      line-height: 0.59rem;
      padding: 0.1rem 0;
      overflow: hidden;
      width: 100%;
      li {
        float: left;
        min-width: 0.7rem;
        margin: 0 0.12rem;
        text-align: center;
        a {
          font-size: 0.28rem;
          color: #666;
          height: 100%;
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
  .opennav {
    background: #000;
    opacity: 0.5;
    position: fixed;
    left: 0;
    top: 0.9rem;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 1;
  }
  .openh2 {
    font-size: 0.26rem;
    color: #333;
    display: block;
    width: 100%;
    background: #f8f6f7;
    height: 0.8rem;
    line-height: 0.8rem;
    text-indent: 0.3rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .openlist {
    background: #fff;
    border-collapse: collapse;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0.8rem;
    z-index: 10;

    tbody {
      display: flex;
      flex-direction: column;
      tr {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #e5e5e5;
        td {
          float: left;
          display: flex;
          vertical-align: middle;
          text-align: center;
          width: 24.2%;
          height: 1.6rem;
          border-right: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          a {
            display: flex;
            flex-direction: column;
            min-width: 0.58rem;
            font-size: 0.24rem;
            color: #666;
            margin: auto;
            img {
              width: 0.58rem;
              height: 0.58rem;
              margin: auto;
              margin-bottom: 0.1rem;
            }
          }
        }
      }
    }
  }
}
.pdown {
  position: absolute;
  right: 0;
  top: 0.17rem;
  display: block;
  width: 10%;
  height: 0.4rem;
  padding-top: 0;
  text-align: center;
  border-left: 0.03rem solid #bfbfbf;
  z-index: 10;
  img {
    width: 0.26rem;
    height: 0.16rem;
    margin-top: 0.05rem;
    transition: all 0.4s ease;
  }
}
</style>