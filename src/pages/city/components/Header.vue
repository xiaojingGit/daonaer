<template>
    <div class="mp-header">
        <router-link to="/" class="mp-header-left" mp-role="left">
            <span class="iconfont icon-fanhui"></span>
        </router-link>
        <h1 class="mp-header-title" mp-role="title">城市选择</h1>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .mp-header {
        position: relative;
        height: .68rem;
        line-height: .68rem;
        border-bottom: 0;
        background: #00bcd4;
        z-index: 91;
    }
    .mp-header-left {
        position: absolute;
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
        font-size: .36rem;
        color: #fff;
        text-align: center;
    }
    .mp-header-title {
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
    }
</style>