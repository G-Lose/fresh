<template>
    <div>
        <slot name="search"></slot>
        <slot name="before"></slot>
        <slot name="wz"></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .pre_btn {
      position: absolute;
      left: 0.3rem;
      top: 0.22rem;
      background: url(../assets/pre.jpg) no-repeat left top;
      background-size: 0.3rem 0.4rem;
      width: 0.3rem;
      height: 0.4rem;
      overflow: hidden;
      text-indent: -99rem;
    }
    .num_1 {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        min-width: 0.3rem;
        line-height: 0.3rem;
        position: absolute;
        right: 0;
        top: -0.1rem;
        font-size: 0.2rem;
        background-color: #ff5656;
        border-radius: 0.15rem;
        color: #fff;
      }
</style>