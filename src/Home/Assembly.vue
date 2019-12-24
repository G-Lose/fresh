<template>
  <!-- 商品组合套餐 -->

  <div v-if="como">
    <div class="modproDiv" v-for="(item,index) in como" :key="index">
      <div class="pro_mod_title" v-for="ele in item.pro_mod_title" :key="ele.h3">
        <h3>{{ ele.h3 }}</h3>
        <p>{{ ele.p }}</p>
      </div>
      <div class="action_btn" v-for="(ele) in item.action_btn" :key="ele.id" :data-id="ele.id">
        <img :src="ele.img" alt />
      </div>
      <div class="pro_mod_list">
        <div class="swipe">
          <ul class="clearfix">
            <!-- <div>{{item.pro_mod_list}}</div> -->
            <!-- 商品轮播图 -->
            <SwipeList :item="item.pro_mod_list"></SwipeList>
          </ul>
        </div>
      </div>
    </div>
    <!-- 底部 -->

    <!-- <div>
      <div class="bottom_nav" v-if="this.como[0].action_btn.length">
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
    </div> -->

  </div>

  <!-- <div v-else>
    <el-table v-loading.fullscreen.lock="true"></el-table>
  </div> -->
</template>

<script>
import SwipeList from "./SwipeList";
/* import { forestgreen } from "color-name"; */
export default {
  data() {
    return {
      current: 2,
      como: []
    };
  },
  components: {
    SwipeList
  },
  
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://localhost:1910/home/home2", {
      params: {
        page: 1,
        num: 1,
        sort: 2
      }
    });
    this.como = data[0];
    let a=JSON.stringify(data[0])
    let b=a.split(',"_id"')
    let c=JSON.parse(b[0]+'}') 
    this.como=c
   /*  console.log(this.como[0].action_btn.length,'888') */
    
  }
};
</script>

<style lang="scss">
// 多组合
.modproDiv {
  margin-top: 0.2rem;
  .pro_mod_title {
    background: #f8f6f7;
    padding: 0.15rem 0;
    text-align: center;
    color: #999;
    font-size: 0.24rem;
    line-height: 150%;
    h3 {
      height: 0.5rem;
      line-height: 0.5rem;
      color: #333;
      font-size: 0.26rem;
      font-weight: 600;
      display: inline-block;
      text-align: left;
    }
    p {
      line-height: 0.3rem;
      width: 96%;
      margin: 0 auto;
      font-size: 0.28rem;
    }
  }
  .action_btn {
    img {
      border: none;
      width: 100%;
      vertical-align: middle;
    }
  }
  .pro_mod_list {
    background: #f8f6f7;
    padding: 0.2rem 0;
    /* height: 3rem; */
    overflow: hidden;
    position: relative;
    .swipe {
      overflow: hidden;
      width: 100%;
      height: 100%;
      ul {
        width: 110%;
        margin: 0rem auto;
        /*  li {
          width: 21%;
          height: 3.3rem;
          margin-right: 0.01rem;
          float: left;
          text-align: center;
          position: relative;
          flex: initial;
          min-width: 2rem;
          a {
            color: #666;
            .lazy {
              width: 2rem;
              height: 2rem;
              margin-bottom: 0.08rem;
            }
            .mod_title {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              line-height: 140%;
              padding: 0 0.1rem;
              font-size: 0.2rem;
            }
            .mod_price {
              color: #ff5454;
              font-weight: 600;
              margin-top: 0.05rem;
              font-size: 0.2rem;
            }
          }
        } */
      }
    }
  }
}

/* xia */
.bottom_nav {
  text-align: center;
  color: #999;
  line-height: 150%;
  padding: 0.2rem 0;
  font-size: 0.2rem;
  background-color: #edebec;
  /*  background: #000; */
  margin-bottom: 0.6rem;
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