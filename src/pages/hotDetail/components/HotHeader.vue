<template>
    <div class="hot-header" >
        <div class="hot-header-right-return" v-if = "returnShow">
            <a href="/">
            <span class="iconfont hot-header-return icon-fanhui"></span>
            </a>
        </div>
        <div class="hot-header-header" :style = "{'opacity': headerReturnOpacity}" ref="div">
            <a href="/">
            <span class="iconfont hot-header-header-return icon-fanhui"></span>
            </a>
            故宫
        </div>
        <div class="hot-header-wrap" id="imgcontainer" @click = "ifShowImgList">
            <img class="hot-header-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
        </div>
        <div class="hot-header-info">
            <div class="hot-header-title">故宫(AAAAA景区)</div>
            <div class="hot-header-imgswipeicon">
                <span class="hot-header-iconfont iconfont">&#xe618;</span>
                <em class="hot-header-imgswipeicon-number">10</em>
            </div>
        </div>
        <div v-if = "showImgList" class="mp-imgswiper" @click = "closeImgList">
            <swiper :options="swiperOption"  ref="mySwiper">
                <swiper-slide v-for="item in imgList" :key="item.id">
                    <div class="img-box">
                        <img class="swiper-img" :src="item.imgUrl"/>
                    </div>
                    
                </swiper-slide>
                
            </swiper>
            <div class="mp-imgswipe-bar"></div>
        </div>
       
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    export default {
        props: ['imgList'],
        data() {
            return{
                returnShow: true,
                headerReturnOpacity: 0,
                scrollTop: 0,
                swiperOption: {
		          	direction: 'horizontal',
		          	autoHeight: true,
                    observeParents: true,
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 10,
                    pagination: '.mp-imgswipe-bar',
                    paginationType: 'fraction'
                },
                showImgList: false
            }  
        },
        components: {
            swiper: swiper,
            "swiper-slide": swiperSlide
        },
        methods: {
            handleScroll() {
                var top = (window.scrollY / 300) > 1? 1 :( window.scrollY / 300);
                this.returnShow = (top == 0) ? true: false;
                this.$refs.div.style.opacity = top;
            },
            ifShowImgList() {
                this.showImgList = true;
            },
            closeImgList() {
                this.showImgList = false;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll.bind(this))
        }
	}

</script>

<style scoped>
    .swiper-wrapper {
        margin-top: 3rem;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
    }
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
        color: #fff;
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
    .mp-imgswiper {
        overflow: hidden;
        padding-top: 3rem;
        position: fixed;
        z-index: 99;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #000;
    }
    .img-box {
        z-index: 1000;
        width: 100%;
        height: 5rem;
    }
    .swiper-img {
        width: 100%;
        height: 100%;
    }
    .mp-imgswipe-show {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: #000;
        left: 0px;
        transform: translateX(0px);
        z-index: 2;
    }
    .mp-imgswipe-bar {
        position: absolute;
        z-index: 1009;
        right: 0;
        width: 100%;
        height: .8rem;
        color: #fff;
        text-align: center;
    }
    .mp-imgswipe-note {
        
        font-size: .24rem;
        line-height: .8rem;
        text-align: center;
    }
  
</style>