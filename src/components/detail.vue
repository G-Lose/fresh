<template>
  <div class="detail">
    <h1>
      商品详情
      <router-link to="/home">
        <a class="back" href="home"></a>
      </router-link>
      <router-link to="/cart">
        <a href="###" class="cart"></a>
      </router-link>
      <span></span>
    </h1>
    <div class="swiper">
      <div class="slider">
        <ul>
          <li>
            <img src="../images/swb1.jpg" alt />
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="gdinf">
      <div class="inf debox">
        <h3>B级-新疆阿克苏冰糖心苹果 4个装</h3>
        <p>不套袋不打蜡，评价说“糖心肉眼可见”！</p>
        <p>
          <span>15.90</span>&nbsp;&nbsp;
          <del>19.90</del>
        </p>
      </div>
    </div>
    <div class="gdchoose gdbox">
      <ul class="gdcs">
        <li
          v-for="(item,index) in cslist"
          :class="curidx==index?'gdcsli active':'gdcsli'"
          :key="item.name"
          @click="changcs(index)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="gdplace debox">
      <ul>
        <li class="place">新疆阿克苏</li>
        <li class="times">每三天采购</li>
        <li class="saveway">冷藏储存</li>
      </ul>
    </div>
    <div class="gdwhy debox">
      <h2>两鲜为什么选择它</h2>
      <div class="whychoose">
        <img src="../images/usertou.jpg" alt />
        <div>
          <span>Chad 资深国产水果买手</span>
        </div>
        <p>冰糖心苹果当属新疆阿克苏产的为上乘，但不是每一颗“冰糖心”都产自红旗坡，两鲜为您带来的这颗冰糖心便来自阿克苏地区冰糖心苹果的核心产区——红旗坡，地处天山南麓中段，塔克拉玛干沙漠北缘，独特的碱性砂质土壤，只选7年小树种植，饱满个大，果皮稍显丑陋是因为拒绝套袋不打蜡，保留了那份甘甜和清香，果肉细嫩，且凝聚了高甜度的“冰糖心”，口感脆爽，果味十足，回味不寡淡。阿克苏，维语意为“清澈的水”，冰糖心苹果当属新疆阿克苏产的为上乘，但不是每一颗“冰糖心”都产自红旗坡，红旗坡地处天山南麓中段，光照充足以及采用无污染的冰川雪融河流灌溉，使苹果的糖分往果核部分聚集，堆积成琥珀色结晶体，从而形成冰糖心。历经三次霜降，糖心80%以上，平均糖度18以上。拥有28年苹果种植历史的农户，配上有着15年青壮年的好果树，采用自然农法种植，才能产出如此好品质的阿克苏冰糖心苹果。阿克苏，维语意为“清澈的水”，冰糖心苹果当属新疆阿克苏产的为上乘，但不是每一颗“冰糖心”都产自红旗坡，红旗坡地处天山南麓中段，光照充足以及采用无污染的冰川雪融河流灌溉，使苹果的糖分往果核部分聚集，堆积成琥珀色结晶体，从而形成冰糖心。历经三次霜降，糖心80%以上，平均糖度18以上。拥有28年苹果种植历史的农户，配上有着15年青壮年的好果树，采用自然农法种植，才能产出如此好品质的阿克苏冰糖心苹果。冰糖心苹果当属新疆阿克苏产的为上乘，但不是每一颗“冰糖心”都产自红旗坡，两鲜为您带来的这颗冰糖心便来自阿克苏地区冰糖心苹果的核心产区——红旗坡，地处天山南麓中段，塔克拉玛干沙漠北缘，独特的碱性砂质土壤，只选7年小树种植，饱满个大，果皮稍显丑陋是因为拒绝套袋不打蜡，保留了那份甘甜和清香，果肉细嫩，且凝聚了高甜度的“冰糖心”，口感脆爽，果味十足，回味不寡淡。</p>
      </div>
    </div>
    <div class="addcart">
      <div class="inputbox">
        <input type="text" :value="gdnum" class="inputnum" disabled />
        <div class="cut" @click="cut"></div>
        <div class="add" @click="add"></div>
      </div>
      <div class="addcar">加入购物车</div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      gdnum: 1,
      curidx: 0,
      cslist: [
        {
          name: "B级小果4个装，单果200g以上，果径80-85mm"
        },
        {
          name: "A级大果9个装，单果300g以上，果径90-95mm"
        },
        {
          name: "A级大果4个装，单果300g以上，果径90-95mm"
        },
        {
          name: "4个装，单果250g以上，果径85-90mm"
        }
      ]
    };
  },
  methods: {
    add() {
      this.gdnum++;
    },
    cut() {
      if (this.gdnum > 0) {
        this.gdnum--;
      }
    },
    changcs(index) {
      this.curidx = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.detail {
  .back {
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
  .debox {
    text-align: center;
    background: #f8f6f7;
    margin: 0 auto;
    overflow: hidden;
  }
  .addcart {
    display: flex;
    border-top: 1px solid #ddd;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    background-color: #fff;
    .inputbox {
      width: 38%;
      background: #f1eff1 url(../images/c_p_num.png) no-repeat center center;
      background-size: 60%;
      border-radius: 0.3rem;
      text-align: center;
      height: 0.7rem;
      margin: auto 0.2rem;
      position: relative;
      .inputnum {
        display: inline-block;
        width: 0.8rem;
        margin: auto 0;
        text-align: center;
        font-size: 0.3rem;
        height: 0.7rem;
        line-height: 0.7rem;
        background-color: transparent;
        color: #333;
      }
      .cut {
        width: 0.6rem;
        height: 0.6rem;
        color: #333;
        position: absolute;
        left: 0.4rem;
        top: 0.1rem;
        cursor: pointer;
      }
      .add {
        width: 0.6rem;
        height: 0.6rem;
        color: #333;
        position: absolute;
        right: 0.4rem;
        top: 0.1rem;
        cursor: pointer;
        float: left;
        z-index: 10;
      }
    }
    .addcar {
      width: 60%;
      float: left;
      text-align: center;
      color: #333;
      background: #ffee3c;
      height: 0.95rem;
      line-height: 0.95rem !important;
      -webkit-flex: 1;
      flex: 1;
      font-size: 0.3rem;
      margin: 0;
      border-radius: 0;
    }
  }

  .gdwhy {
    .whychoose {
      margin-bottom: 0.9rem;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
        margin-top: 0.15rem;
      }
      span {
        margin: 0.1rem auto 0;
        display: inline-block;
        padding: 0 0.08rem;
        height: 0.38rem;
        line-height: 0.38rem;
        background: #ffec43;
        border-radius: 0.16rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.24rem;
      }
      p {
        width: 5.9rem;
        margin: 0.2rem auto 0;
        background: #fff;
        padding: 0.25rem 0.45rem;
        border-radius: 0.2rem;
        color: #666;
        font-size: 0.24rem;
        text-align: left;
        text-align: justify;
        line-height: 150%;
      }
    }
  }
  .gdplace {
    margin-bottom: 0.2rem;
    ul {
      display: flex;
      margin-top: 0.3rem;
      font-size: 0.24rem;
      li {
        float: left;
        width: 33.3%;
        -webkit-flex: 1;
        flex: 1;
        height: 0.45rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-top: 0.45rem;
        margin-bottom: 0.3rem;
      }
      .place {
        background: url(../images/local.png) no-repeat center top;
        background-size: 0.3rem 0.38rem;
      }
      .times {
        background: url(../images/airport.png) no-repeat center top;
        background-size: 0.4rem 0.4rem;
      }
      .saveway {
        background: url(../images/tep.png) no-repeat center top;
        background-size: 0.2rem 0.4rem;
      }
    }
  }
  .gdchoose {
    background-color: #fff;
    .gdcs {
      // margin-top: 0.15rem;
      font-size: 0.26rem;
      display: flex;
      flex-direction: column;

      .gdcsli {
        display: inline-block;
        min-width: 1rem;
        max-width: 4.5rem;
        padding: 0 0.3rem;
        height: 0.56rem;
        line-height: 0.56rem;
        border: 1px solid #c6c4c5;
        border-radius: 0.1rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: auto;
        margin-top: 0.1rem;
      }
      .active {
        border: 1px solid #4b943d;
        background: url(../images/s01.png) no-repeat right bottom;
        background-size: 0.3rem 0.26rem;
      }
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
    .back {
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
    .cart {
      background: url(../images/cart.png) no-repeat;
      background-size: 0.46rem 0.4rem;
      display: table;
      width: 0.46rem;
      height: 0.4rem;
      position: absolute;
      right: 0.2rem;
      top: 0.22rem;
    }
  }
  .swiper {
    text-align: center;
    background: #f8f6f7;
    margin: 0 auto;
    overflow: hidden;
    .slider {
      overflow: hidden;
      position: relative;
      ul {
        padding-top: 0.5rem;
        position: relative;
        list-style: none;
        display: flex;
        z-index: 1;
        li {
          float: left;
          position: relative;
          width: 100%;
          flex-shrink: 0;
          img {
            width: 100%;
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
  .gdinf {
    .inf {
      h3 {
        font-size: 0.32rem;
        font-weight: 600;
        line-height: 180%;
        margin-top: 0.2rem;
      }
      p {
        color: #4b943d;
        padding-bottom: 0.15rem;
        font-size: 0.26rem;
        span {
          background: url(../images/doller.jpg) no-repeat 0.05rem 0.33rem;
          padding-left: 0.24rem;
          background-size: 0.15rem 0.18rem;
          color: #ff5656;
          line-height: 100%;
          font-size: 0.5rem;
          font-weight: 600;
        }
        del {
          font-size: 0.24rem;
          color: #999;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>