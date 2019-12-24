<template>
  <div class="listwrapper">
    <div class="scroll">
      <ul>
        <router-link to="/detail">
          <li>
            <a href="###">
              <img src="../images/gl1.jpg" alt />
            </a>
            <div class="goodinfo">
              <a href="###">
                <p class="inftitle">永安冬笋 650g</p>
                <p class="inftex">配雪菜肉丝简直就是盖浇面的灵魂！还可以煲汤或涮锅！</p>
                <p class="price">
                  <del class="oldpri">￥36.90</del>
                  <span class="nowpri">￥31.90</span>
                </p>
              </a>
              <div class="addcar">加入购物车</div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.listwrapper {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  position: relative;
  top: 0;
  background-color: #f8f6f7 !important;
  .scroll {
    overflow: hidden;
    padding-bottom: 1.3rem;
  }
  ul {
    display: -webkit-flex;
    box-sizing: content-box;
    -webkit-box-orient: vertical;
    flex-direction: column;
    background: #f8f6f7;
    transform: translate3d(0px, 0px, 0px);
    min-height: 5rem;
    li {
      width: 99%;
      height: 2.4rem;
      overflow: hidden;
      padding-left: 1%;
      position: relative;
      border-bottom: 1px solid #dedcdd;
      a {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: auto;
        height: 100% /*width: 30%;*/;
        img {
          width: auto;
          height: 100%;
          float: left;
        }
      }
      .goodinfo {
        float: right;
        text-align: right;
        padding: 0.2rem 0.3rem 0 0;
        line-height: 150%;
        width: 62%;
        height: 100%;
        a {
          width: 90%;
          height: auto;
          .inftitle {
            // float: left;
            font-size: 0.24rem;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 0.4rem;
            line-height: 0.4rem;
          }
          .inftex {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.26rem;
            font-weight: 600;
            color: #333;
          }
        }

        .price {
          width: auto;
          display: block;
          height: 0.4rem;
          position: relative;
          .oldpri {
            font-size: 0.22rem;
            color: #999;
            margin-right: 0.1rem;
            line-height: 0.5rem;
            position: absolute;
            top: 0;
            right: 1.25rem;
          }
          .nowpri {
            background-size: 0.15rem 0.18rem;
            color: #ff5656;
            font-size: 0.36rem;
            font-weight: 600;
            line-height: 0.4rem;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      }
      .addcar {
        min-width: 1.8rem;
        height: 0.5rem;
        line-height: 0.48rem !important;
        display: inline-block;
        background: #ffee3c;
        border-radius: 0.2rem;
        text-align: center;
        font-size: 0.24rem;
        margin-top: 0.1rem;
        position: absolute;
        bottom: 0.35rem;
        right: 0.3rem;
      }
    }
  }
}
</style>