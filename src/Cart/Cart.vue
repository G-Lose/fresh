<template>
  <div class="content">
    <TopComponent></TopComponent>
    <div class="b_p_con" id="cart_type">
      <p class="cart_type express b" >
        <a href="#">包邮</a>全场
        <span class="red_text">优惠</span>包邮,&nbsp; &nbsp; &nbsp;
        <span class="red_text"></span>
      </p>
    </div>

    <div class="b_p_con" id="cart_pro_list">
      <div class="cart_list" v-for="item in cartList" :key="item.data_id">
        <li class :data_id="item.data_id">
          <img
            :src="item.src"
            alt
          />
          <div class="c_pro">
            <p class="c_p_title">{{ item.des_info }}</p>
            <p class="c_p_stand">{{ item.des_title }}</p>
            <p class="c_p_price">{{ item.des_now_m }}</p>
            <div class="cart_p_num"> <!-- el-input -->
               <el-input-number size="mini" @change="handleChange(item.data_id,$event)" v-model="item.number" :min="1" :max="10" label="描述文字"></el-input-number>
              <!-- <div class="c_takeoff_sub" ></div>
              <input type="text" v-model="item.number"  />
              <div class="c_add_one_sub"  @click="add(item.number)"></div> -->
            </div>
          </div>
          <div class="c_del" @click="remove(item.data_id)">{{ item.add_cart }}</div>
        </li>
      </div>
    </div>
    <div class="mintarget"></div>
    <div class="cart_sub">
      <p>
        <span class="red_text">
          商品总额:&nbsp;￥
          <span class="price">{{sumAmout}}</span>&nbsp;&nbsp;
        </span>
      </p>
      <a href="#">
        去结账(
        <em class="totalQty">{{number}}</em>)
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { mapActions } from 'vuex'
import TopComponent from "../Slot/TopComponent";

export default {
  data() {
    return {
    };
  },
  components: {
    TopComponent
  },
  computed:{
     cartList(){
      return this.$store.state.cartList
    },
    /* 数量 */
    number(){
      return this.$store.getters.number
    },
    sumAmout(){
      return this.$store.getters.sumAmout
    }
    
     
  },
  methods: {
    /* 更新 */
    handleChange(newnum,event){
      console.log(newnum,event)
      this.$store.dispatch('setchange',{newnum,event})
    },

    /* 删除 */
    remove(id){
      this.$store.dispatch('setremove',id);
      /* console.log(id,ele)
      console.log(this.$refs.ele,'9999') */
    },

    /* 渲染购物车 */
    ...mapActions(['getamoute'])
  },
  created(){
     this.getamoute() 
  }
};
</script>

<style lang="scss" scoped>
.content {
  .b_p_con {
    .express {
      margin-top: 0.9rem;
      background: #fffacc;
      line-height: 0.68rem;
      height: 0.68rem;
      font-size: 0.24rem;

      a {
        display: inline-block;
        margin: 0.17rem 0.3rem 0 0.3rem;
        width: 0.68rem;
        height: 0.3rem;
        text-align: center;
        line-height: 0.25rem;
        border: 1px solid #f00;
        border-radius: 0.1rem;
        font-size: 0.24rem;
        color: #f00;
      }
      .red_text {
        color: #f00;
        font-size: 0.28rem;
      }
    }
    .cart_list {
      background: #f8f8f8;
      width: 100%;
      li {
        position: relative;
        width: 96%;
        margin: 0 auto;
        min-height: 2.4rem;
        padding-bottom: 0.1rem;
        overflow: hidden;
        border-bottom: 1px solid #f1f1f1;
        img {
          /* display: inline-block; */
          width: 2.4rem;
          height: 2.4rem;
          float: left;
        }
        .c_pro {
          float: left;
          width: 4rem;
          color: #333;
          padding-top: 0.15rem;
          margin-left: 0.17rem;
          .c_p_title {
            overflow: hidden;
            width: inherit;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 0.28rem;
            line-height: 0.42rem;
          }
          .c_p_stand {
            font-size: 0.24rem;
            color: #999;
            line-height: 0.42rem;
          }
          .c_p_price {
            background: url(../assets/yuan.jpg) no-repeat 0.05rem 0.125rem;
            padding-left: 0.22rem;
            margin: 0.08rem 0;
            background-size: 0.15rem 0.18rem;
            color: #ff5656;
            font-size: 0.3rem;
            font-weight: 200;
            line-height: 0.42rem;
          }
          .cart_p_num {
            position: relative;
            width: 2.24rem;
            height: 0.58rem;
            background: #fff url(../assets/c_p_num.png) no-repeat center center;
            background-size: 1.45rem 0.3rem;
            text-align: center;
            border-radius: 0.3rem;

            /* 计时器 */
            .el-input-number{
              width: 2.24rem;
              height: .58rem;
              border-radius: 0.3rem;
            }
            /* input {
              font-size: 0.28;
              width: 0.8rem;
              height: 0.58rem;
              line-height: 0.58rem;
              text-align: center;
              font-size: 0.3rem;
              background-color: transparent;
              color: #333;
              position: absolute;
              top: 0rem;
              left: 0.75rem;
            }
            .c_takeoff_sub {
              width: 0.5rem;
              height: 0.6rem;
              position: absolute;
              left: 0.2rem;
              top: 0rem;
              cursor: pointer;
            }
            .c_add_one_sub {
              width: 0.5rem;
              height: 0.6rem;
              color: #333;
              position: absolute;
              right: 0.2rem;
              top: 0rem;
              cursor: pointer;
            } */
          }
        }
        .c_del {
          /* width: 5%; */
          float: right;
          background: url(../assets/c_del.jpg) no-repeat;
          background-size: 0.32rem 0.32rem;
          width: 0.5rem;
          height: 0.5rem;
          overflow: hidden;
          margin-top: 1rem;
          color: transparent;
          font-size: 0.24rem;
        }
      }
    }
  }
  .cart_sub {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index:1000;
    text-align: center;
    width: 100%;
    font-size: 0.28rem;
    background: #798;
    p {
      height: 0.7rem;
      line-height: 0.7rem;
      background: #fffacc;
      .red_text {
        color: #f00;
      }
    }

    a {
      display: block;
      width: 100%;
      background: #ffee3c;
      height: 0.9rem;
      line-height: 0.9rem;
      color: #333;
      font-size: 0.32rem;
      border-top: 1px solid #ddd;
    }
  }
  .mintarget{
    height:1.65rem;
  }
}
</style>