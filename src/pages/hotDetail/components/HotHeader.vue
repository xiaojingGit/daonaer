<template>
    <div class="hot-header">
        <div class="hot-header-right-return" v-if = "returnShow">
            <span class="iconfont hot-header-return icon-fanhui"></span>
        </div>
        <div class="hot-header-header" :style = "{'opacity': headerReturnOpacity}">
            <span class="iconfont hot-header-header-return icon-fanhui"></span>
            故宫
        </div>
        <div class="hot-header-wrap" id="imgcontainer">
            <img class="hot-header-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
        </div>
        <div class="hot-header-info">
            <div class="hot-header-title">故宫(AAAAA景区)</div>
            <div class="hot-header-imgswipeicon">
                <span class="hot-header-iconfont iconfont">&#xe618;</span>
                <em class="hot-header-imgswipeicon-number">10</em>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return{
                returnShow: true,
                headerReturnOpacity: 0,
                scrollTop: 0
            }  
        },
        methods: {
            handleScroll() {
                var newScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(newScrollTop >= 10 && newScrollTop > this.scrollTop) {
                    this.scrollTop = newScrollTop;
                    this.returnShow = false;
                    this.headerReturnOpacity >= 1? this.headerReturnOpacity = 1: this.headerReturnOpacity += 0.03;
                }else if(newScrollTop <= 100 && newScrollTop < this.scrollTop){
                    this.scrollTop = newScrollTop;
                    this.returnShow = false;
                    this.headerReturnOpacity <= 0? this.headerReturnOpacity = 0: this.headerReturnOpacity -= 0.03;
                    if(newScrollTop == 0 ){
                    this.returnShow = true;
                    this.headerReturnOpacity = 0;
                }
                } 
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
	}

</script>

<style scoped>
    .hot-header-return{
        position: absolute;
        top: .1rem;
        left: .1rem;
        width: .72rem;
        height: .72rem;
        border-radius: 50%;
        background-color: #000;
        opacity: .5;
        font-size: .36rem;
        line-height: .72rem;
        text-align: center;
        color: #fff;
    }
    .hot-header-header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 91;
        width: 100%;
        height: .88rem;
        background: #00bcd4;
        opacity: 0;
        font-size: .28rem;
        color: #fff;
        line-height: .88rem;
        text-align: center;
    }
    .hot-header-header-return {
        position: absolute;
        top: 0;
        left: 5%;
    }
    .hot-header {
        position: relative;
        width: 100%;
    }
    .hot-header-wrap {
        overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 55%;
    }
    .hot-header-img {
        width: 100%;
        vertical-align: top;
    }
    .hot-header-info {
        position: absolute;
        right: .2rem;
        bottom: .26rem;
        left: .2rem;
        min-height: .4rem;
         color: #fff;
    }
    .mp-hot-header-title {
        position: relative;
        z-index: 1;
        margin-right: 1.4rem;
        line-height: .4rem;
        font-size: .32rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    }
    .hot-header-imgswipeicon {
        position: absolute;
        right: 0;
        top: 0;
        width: 1.2rem;
        height: .4rem;
        background: rgba(0,0,0,.5);
        border-radius: .2rem;
        font-size: .24rem;
        line-height: .4rem;
        text-align: center;
    }
    .hot-header-iconfont {
        position: relative;
        top: .02rem;
        font-size: .24rem;
    }
    .hot-header-imgswipeicon-number{
        margin-left: .1rem;
        font-size: .24rem;
        line-height: .4rem;
        text-align: center;
    }
    .hot-header-info::after {
        content: " ";
        display: block;
        position: absolute;
        bottom: -0.25rem;
        left: -0.2rem;
        width: 120%;
        height: .6rem;
        background-color: transparent;
        background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.8)));
        background-image: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
    }
       
 
</style>