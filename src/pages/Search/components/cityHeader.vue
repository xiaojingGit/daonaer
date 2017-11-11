<template>
    <div class="city-header">
        <router-link to="/" class="city-header-left iconfont icon-fanhui"></router-link>
        <div class="city-header-center">
            <input type="text" class="city-header-center-input" placeholder="输入城市或景点">
        </div>
        
        <div class="city-header-right">
            <router-link to="">
                <span class="city-header-right-search">搜索</span>
             </router-link>
        </div>
        
    </div>
</template>

<script>
   
    export default {
       
    }
</script>

<style>
   .city-header {
        display: flex;
        height: .88rem;
        background:#00bcd4;
   }
   .city-header-left {
        display: inline-block;
        padding:0 .2rem;
        width:.4rem;
        font-size: .36rem;
        color: #fff;
        line-height: .88rem;
   }
   .city-header-center {
        overflow: hidden;
        flex:1;
        box-sizing: border-box;
        height: .6rem;
        margin: .14rem 0;
        background: #fff;
        line-height: .6rem;
        border-radius: .06rem;
   }
   .city-header-center-input {
        margin-left: 0.1rem;
        width: 100%;
        border: 0;
        font-family: "Microsoft Yahei",Arial;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
   }
   .city-header-right {
        line-height: 0.88rem;
        
   }
   .city-header-right-search {
        font-size: 0.28rem;
        color: #fff;
        padding: 0 0.2rem 0 0.2rem;
   }
</style>
