<template>
    <div class="mp-header">
        <router-link to="/" mp-role="left" class="mp-header-left" >
            <span class="iconfont icon-fanhui"></span>
        </router-link>
        <h1 mp-role="title" class="mp-header-title">订单填写</h1>
        <router-link to="/" class="mp-header-right" >登录</router-link>
                
    </div>
</template>

<script>
    
</script>

<style scoped>
    .mp-header {
        position: relative;
        height: .88rem;
        background: #00bcd4;
        z-index: 91;
    }
    .mp-header-left {
        position: absolute;
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        line-height: .88rem;
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
    .mp-header-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 1rem;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .28rem;
        color: #fff;
    }
</style>