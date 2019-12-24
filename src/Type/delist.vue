<template>
  <div class="delist">
    <Head></Head>
    <Banner />
    <Filtrate />
    <Foot></Foot>
    <DFilter></DFilter>
    <Ckname />
    <Wrapdata />
  </div>
</template>
<script>
import Head from "./dlhead";
import Banner from "./dlbanner";
import Filtrate from "./dlfiltrate";
import Foot from "./dlfoot";
import DFilter from "./dlfilter";
import Ckname from "./dlckname";
import Wrapdata from "./dlwrapdata";
export default {
  data: function() {
    return {
      istrue: false
    };
  },

  components: {
    Head,
    Banner,
    Filtrate,
    Foot,
    DFilter,
    Ckname,
    Wrapdata
  }
};

(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 640) {
        // 这里的640 取决于设计稿的宽度
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
</script>
<style lang="scss" scoped>
</style>