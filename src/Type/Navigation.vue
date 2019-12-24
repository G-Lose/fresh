<template>
  <div>
    <div>
      <router-view />
    </div>

    <template>
      <!-- v-show="$route.meta.nav"  隐藏显示 -->
      <ul class="channel_icon" v-show="$route.meta.nav">
        <li v-for="item in data" :key="item.id" @click.prevent="goto(item.name)">
          <a href="#" :id="item.id">{{ item.text }}</a>
        </li>
      </ul>
      
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
          id: "page_index"
        },
        {
          name: "type",
          path: "/type",
          text: "分类",
          id: "page_classify"
        },
        {
          name: "group",
          path: "/group",
          text: "两鲜团",
          id: "page_group"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的两鲜",
          id: "page_mff"
        }
      ]
    };
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    }
  },
  created() {
    // console.log(this.$route);
    this.goto(this.$route)
  }
};
</script>

<style lang="scss" scoped>
/*  a{
      text-decoration:none !important; 
      color:#333 !important ;
      
    } */
.channel_icon {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: pink;
 /*  display: table; */
  li {
    width: 25%;
    height: 100%;
    display: inline-block;
    position: relative;
    /* text-align: center;
    vertical-align: middle; */
    a {
      text-decoration: none;
      color: #333;
      display: inline-block;
      min-width: 0.6rem;
      font-size: 0.2rem;
      line-height: 100%;
      text-align: center ;
      background-size: 0.56rem 0.56rem;
      background-position: center top;
      background-repeat: no-repeat;
      padding-top: 0.6rem;
      position:absolute;
      top:50%;
      left:50%;
      margin-top:-25%;
      margin-left:-25%;
    }
    #page_index {
      background-image: url(../assets/index_d.png);
    }
    #page_classify {
      background-image: url(../assets/classify_d.png);
    }
    #page_group {
      background-image: url(../assets/group_d.png);
    }
    #page_mff {
      background-image: url(../assets/mff_d.png);
    }
  }
}
</style>