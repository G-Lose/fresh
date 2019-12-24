<template>
<header>
    <div class="top_state">
    <a class="s_station">上海</a>
    <a class="search" href="#" data-s="home">搜索</a>
    <a class="cart" href="#" data-s="home" @click.prevent="cart">
        <span v-show="number">{{number}}</span>
    </a>
</div>
</header>

    
</template>

<script>

export default {
    methods:{
        cart(){
            this.$router.push("./cart") ;
        }
    },
    computed:{
        number(){
      return this.$store.getters.number
    },
    }
}
</script>

<style lang="scss">
header{
    position: fixed;
    width:100%;
    height:.9rem;
    z-index: 1000;
    top: 0;
    left: 0;
}
    .top_state {
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
        height: 0.9rem;
        background: #feee3c url(../assets/ff.png) no-repeat center 0.2rem;
        background-size: 2.8rem 0.25rem;
        position: relative;
        text-align: center;
        z-index: 10;

        .s_station {
            background: url(../assets/s_station.jpg) no-repeat right center;
            background-size: 0.11rem 0.1rem;
            padding-right: 0.2rem;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: left;
            display: inline-block;
            font-size: 0.2rem;
            margin-top: 0.4rem;
            position: relative;
            top: 0rem;
        }
        .search {
            position: absolute;
            background: url(../assets/search.png) no-repeat;
            background-size: 0.4rem 0.4rem;
            display: block;
            overflow: hidden;
            font-size:.373333rem;
            text-indent: -999rem;
            width: 0.46rem;
            height: 0.46rem;
            right: 1rem;
            top: 0.22rem;
        }     
        .cart {
            background: url(../assets/cart.png) no-repeat;
            background-size: 0.46rem 0.4rem;
            display: table;
             font-size:.373333rem;
            width: 0.46rem;
            height: 0.4rem;
            position: absolute;
            right: 0.2rem;
            top: 0.22rem;
            span{
                color:red;
                position: absolute;
                 right: 0.1rem;
                top: -0.24rem;
            }
        }      
    }
</style>