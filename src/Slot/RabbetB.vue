<template>
    <div>
        <slot name="cart"><span class="num_1">1</span></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
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