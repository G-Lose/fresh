<template>
    <nav class="ff_nav">
        <div class="scroll">
            <ul class="line_nav">
                <li class="current">
                    <a href="#">推荐</a> 
                </li>
            </ul>
            
        </div>
        <div class="img_box">
            <img src="../images/open_l.jpg">
        </div>
    </nav>
</template>

<script >

export default {
    
}
</script>

<style lang="scss">
    .ff_nav {
        margin-top:.9rem;
        background: #000;
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
        position: relative;
        background: #fff;
        height: 0.8rem;
        z-index: 11;
        position: relative;
        .scroll{
            height: 0.8rem;
            padding: 0.1rem 0;
            overflow: hidden;
            width: 100%;
            .line_nav {
                height: 0.59rem;
                line-height: 0.59rem;
                overflow: hidden;
                width: 90%;
                .current{
                    float: left;
                    margin: 0 0.12rem;
                    height:.59rem;
                    font-size:.28rem;
                    a{
                        display: block;
                        font-size:.28rem;
                        height:.59rem;
                        width: .59rem;
                        margin: 0 0.12rem;
                        color: #4b943c;
                        border-bottom: 0.05rem solid #4b943c;
                    }
                }
            }


            
            
        }
        .img_box{
            position: absolute;
            right: 0;
            top: 0.17rem;
            display: block;
            width: 10%;
            height: 0.4rem;
            padding-top: 0;
            text-align: center;
            border-left: 0.03rem solid #bfbfbf;
            z-index: 10;
            background-color: #fff;
            img{
                width: 0.26rem;
                height: 0.16rem;
                margin-top: .15rem;
                text-align: center;
                margin-top:.1rem;
            }
        }
    }
</style>