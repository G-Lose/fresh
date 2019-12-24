<template>
  <transition name="filtran">
    <div class="filter" v-show="istrue">
      <div class="header">
        <em @click="filtnone()"></em>
        <span>筛选</span>
      </div>
      <ul>
        <li @click="checkall()">
          <img src="../images/all_h.png" alt />
          <p>全选</p>
        </li>
        <li v-for="(item) in goodlist.children" :key="item.name" @click="checknow($event)">
          <input
            type="checkbox"
            class="active"
            :checked="checked"
            :value="item.name"
            ref="ifcheck"
            name="checkbox"
            v-model="checkedname"
          />
          <!-- v-model="checkall2" -->
          <img :src="item.imageUrl" alt />
          <p>{{item.name}}</p>
        </li>
      </ul>
      <div class="footer">
        <p @click="filtnone()">确定</p>
      </div>
    </div>
  </transition>
</template>
<script>
import PubSub from "pubsub-js";
export default {
  data: function() {
    return {
      goodlist: [{}],
      checkedgou: -1,
      checked: false, //全选反选控制
      istrue: false, //控制筛选div
      inpchecked: false, //检测是否有选中
      checkedname: [] //获取选中项渲染到delist
    };
  },
  watch: {},
  methods: {
    //全选反选
    checkall() {
      this.checked = !this.checked;
    },
    checknow(ev) {
      //点图控checkbox
      if (ev.target.tagName.toLowerCase() == "img") {
        if (event.currentTarget.firstChild.checked) {
          event.currentTarget.firstChild.checked = false;
        } else {
          event.currentTarget.firstChild.checked = true;
        }
        let isok = false;
        isok = this.$refs.ifcheck.some(item => item.checked);
        PubSub.publish("filcheck", isok);
        let ipval = event.currentTarget.firstChild.value;
        if (event.currentTarget.firstChild.checked) {
          this.checkedname.push(ipval);
        } else {
          for (var i = 0; i < this.checkedname.length; i++) {
            if (this.checkedname[i] == ipval) {
              this.checkedname.splice(i, 1);
            }
          }
        }
        PubSub.publish("ckname", this.checkedname); //找到选中项名字传输
        // window.console.log(this.checkedname);
      }
    },
    //控制筛选div显示隐藏
    filtnone() {
      this.istrue = false;
      let isok = false;
      isok = this.$refs.ifcheck.some(item => item.checked);
      PubSub.publish("filcheck", isok);
    }
  },
  // computed: {
  //   checkall2: {
  //     get() {
  //       let ischeck = false;
  //       ischeck =
  //       return ischeck;
  //     }
  //   }
  // },

  async created() {
    PubSub.subscribe("ckname2", (num, num2) => {
      if (num2) {
        this.checkedname = [];
      } else {
        this.checkedname = [];
      }
    });
    PubSub.subscribe("filshow", (event, num) => {
      // 箭头函数
      // 删除成功
      this.istrue = num;
    });
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
    this.goodlist = children[0];
    // window.console.log(children)
  }
};
</script>
<style lang="scss" scoped>
.filtran-enter-active {
  transition: all 0.3s; /*all 所有效果，持续1秒 */
}
/*隐藏过渡效果*/
.filtran-leave-active {
  transition: all 1s;
}
/*显示前或隐藏后的效果*/
.filtran-enter,
.filtran-leave-to {
  // opacity: 0; /*都是隐藏效果*/
  transform: translateY(160%); /*水平方向 X 坐标移动10px*/
}

.filter {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  display: block;
  position: fixed;
  z-index: 15;
  width: 100%;
  height: 100%;
  top: 0%;
  background: #f7f5f6;
  overflow-y: auto;

  .header {
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #ffee3c;
    position: fixed;
    width: 100%;
    z-index: 101;
    font-size: 0.3rem;
    em {
      background: url(../images/back_yellow1.png) no-repeat;
      width: 10%;
      height: 100%;
      position: absolute;
      left: 0;
      background-size: cover;
    }
    span {
      font-size: 0.32rem;
    }
  }
  ul {
    overflow: hidden;
    padding: 1% 5%;
    margin: 0.8rem 0 1rem 0;
    z-index: 15;
    li {
      position: relative;
      width: 17%;
      float: left;
      text-align: center;
      color: #000;
      padding: 3% 4%;
      font-size: 0.2rem;
      height: 1.6rem;
      input[type="checkbox"] {
        cursor: pointer;
        position: relative;
        width: 1rem;
        height: 1rem;
        font-size: 0.9rem;
        visibility: hidden;
      }
      input[type="checkbox"]::after {
        position: absolute;
        top: 0;
        background-color: #fff;
        color: black;
        width: 0.32rem;
        height: 0.32rem;
        display: inline-block;
        visibility: visible;
        padding-left: 0px;
        text-align: center;
        content: " ";
        border-radius: 50%;
      }

      input[type="checkbox"]:checked::after {
        content: "✓";
        font-size: 0.2rem;
        font-weight: bold;
        background-color: #ffee3c;
      }

      .active {
        position: absolute !important;
        background: url(../images/gou_1.png) no-repeat !important;
        background-size: contain !important;
        bottom: 36% !important;
        right: 14% !important;
        width: 0.32rem !important;
        height: 0.32rem !important;
      }
      img {
        border-radius: 50%;
        border: none;
        width: 100%;
        vertical-align: middle;
      }
      p {
        margin-top: 0.1rem;
      }
    }
  }
  .footer {
    position: relative;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    text-align: center;
    bottom: 0;
    position: fixed;

    p {
      width: 60%;
      margin: 0.2rem auto;
      height: 0.6rem;
      background: #ffee3c;
      color: #333;
      line-height: 0.66rem;
      border: 1px solid #d4d4d4;
      border-radius: 0.43rem;
      font-size: 0.36rem;
      font-family: "Helvetica Neue", Helvetica, sans-serif;
      cursor: pointer;
    }
  }
}
</style>