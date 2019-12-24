<template>
<div class="waps">
    <Header></Header>

    <Nav></NaV>
    <Main>
      <div class="box">主体内容</div>
    </Main>

    <Return></Return>

    <Footer></Footer>
    <div class="jjj"></div>
</div>
</template>

<script>
import Header from './Header'
import Nav from './Nav.vue'
import Main from './Main'
import Return from './Return'
import Footer from './Footer'

export default {
    components:{
    Header,
    Nav,
    Main,
    Return,
    Footer,
    }
}
</script>

<style lang="scss">
html.body{
  height:100%;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
.jjj{
  height: .5rem;
}
</style>