<template>

    <div v-if="minlist.length">
      <!-- 商品列表 -->
      <h3 class="commend">买手推荐</h3>
      <ul class="commend_list">
        <li v-for="item in minlist" :key="item.data_id">
          <a href="#">
            <img class="clearfix" :src="item.src" alt :data-id="item.data_id" />
          </a>
          <div class="des clearfix" :data-id="item.data_id">
            <a data-id="18789" data-index="0" href="#">
              <p class="des_title">{{ item.des_title }}</p>
              <p class="des_info">{{ item.des_info }}</p>
              <p class="des_now_m">{{ item.des_now_m }}</p>
            </a>
            <div class="add_cart" @click="add(item.data_id)">{{ item.add_cart }}</div>
          </div>
        </li>
      </ul>
      
      <div class="more_sub_con" v-show="minlist.length">
        <a class="more_sub" href="#">还有24款产品</a>
      </div>
    </div>
    
    <!--  -->
   
  <div v-else>
    <el-table v-loading.fullscreen.lock="true"></el-table>
  </div>

</template>

<script>
export default {
  data() {
    return {
      minlist: [],
     
    };
  },
  methods:{
    async add(id){
      /* 点击商品查询商品id */
      let {data} = await this.$axios.get("http://localhost:1910/home/home1/" + id ) ;
      let {data_id,src,des_title,des_info,des_now_m,add_cart} = data[0]
      /* console.log(data_id,src,des_title,des_info,des_now_m,add_cart) ; */
      let min = {
       data_id:data_id,src,des_title,des_info,des_now_m,add_cart,number:2
      }  
      /* 发送axios请求到mongoDB 迁移后端 */
      /* console.log(min,"7//***") */
      this.$store.dispatch('setadd',min)
     /*  console.log(1) */
     
    }
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://localhost:1910/home/home1", {
      params: {
        page: 1,
        num: 13,
        sort: 5
      }
    });
    this.minlist = data;
  },
  mounted(){
    
  }
  
};
</script>

<style lang="scss">
// 商品列表
.commend {
  background: #f8f6f7;
  margin-top: 0.2rem;
  border-bottom: 0.02rem solid #dedcdd;
  color: #333;
  font-size: 0.26rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-weight: 600;
}
.commend_list {
  background: #f8f6f7;
  li {
    width: 99%;
    height: 2.4rem;
    overflow: hidden;
    padding-left: 1%;
    position: relative;
    border-bottom: 1px solid #dedcdd;
    img {
      width: auto;
      height: 100%;
      float: left;
    }
    .des {
      float: right;
      text-align: right;
      padding: 0.2rem 0.3rem 0 0;
      width: 62%;
      height: 2.2rem;

      .des_title {
        font-size: 0.24rem;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 0.4rem;
        line-height: 0.4rem;
      }
      .des_info {
        font-size: 0.26rem;
        font-weight: 600;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 0.4rem;
        line-height: 0.4rem;
      }
      .des_now_m {
        height: 0.4rem;
        color: #ff5656;
        font-size: 0.36rem;
        font-weight: 600;
      }
      .add_cart {
        width: 1.8rem;
        height: 0.5rem;
        line-height: 0.5rem;
        // display: inline-block;
        background: #ffee3c;
        border-radius: 0.2rem;
        text-align: center;
        font-size: 0.24rem;
        float: right;
        margin-top: 0.3rem;
      }
    }
  }
}


/*  */
.more_sub_con {
  height: 0.8rem;
  padding-top: 0.2rem;
  background: #f8f6f7;
  text-align: center;
  .more_sub {
    display: inline-block;
    width: 3.4rem;
    height: 0.6rem;
    text-align: center;
    border: 1px solid #4b943d;
    color: #4b943d;
    background: url(../assets/more_sub.jpg) no-repeat 2.7rem center;
    background-size: 0.25rem 0.25rem;
    border-radius: 0.3rem;
    font-size: 0.3rem;
    line-height: 0.58rem;
}
}
</style>