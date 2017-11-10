<template>
    <div class="product-card border-bottom">
        <div class="product-card-left">
            <div class="card-left-main">
                <h2 class="main-info-title">{{data.tripName}}</h2>
                <ul class="main-info-taglist">
                    <li class="main-info-tagitem">
                        <span class="iconfont icon-zhongbiao"></span>
                        {{data.date}}
                    </li>
                </ul>
                <ul class="main-info-taglist">
                    <li v-for="item in data.serveContatin" class="main-info-tagitem">
                        <span class="iconfont icon-dui"></span>
                        {{item}}
                    </li>
                    
                </ul>
                <ul class="main-info-taglist latest-refund">
                    <li class="main-info-tagitem">
                        <span class="iconfont icon-gaojing"></span>
                        已过最晚退款时间
                    </li>
                </ul>
            </div>
        </div>
        <div class="product-card-right">
            <div class="info-price">
                <span class="price">
                    ￥<em class="price-num">{{data.unitPrice}}</em>
                </span>/张
            </div>
            <div class="info-note">预订须知</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["data"]
    }
</script>

<style scoped>
    .product-card {
        position: relative;
        overflow: hidden;
        min-height: 1.1rem;
        padding: .2rem .2rem .1rem .2rem;
        background: #fff;
    }
    .border-bottom:before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    .product-card-left {
        margin-right: 1.9rem;
        float: left;
    }
    .main-info-title {
        margin-bottom: .04rem;
        line-height: .44rem;
        color: #212121;
        font-size: .32rem;
    }
    .main-info-taglist {
        margin-left: -.2rem;
        overflow: hidden;
    }
    .main-info-tagitem {
        float: left;
        margin-left: .2rem;
        line-height: .44rem;
        color: #616161;
        font-size: .24rem;
    }
    .main-info-tagitem .iconfont {
        font-size: .24rem;
        color: #00bcd4;
    }
    .latest-refund .iconfont {
        color: #d00;
    }
    .product-card-right {
        position: absolute;
        right: .2rem;
        top: .2rem;
        width: 1.8rem;
        text-align: right;
    }
    .info-price {
        height: .44rem;
        line-height: .44rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
    .price {
        color: #ff8300;
    }
    .price-num {
        margin-left: .04rem;
        font-size: .4rem;
    }
    .info-note {
        margin-top: .12rem;
        line-height: .32rem;
        color: #00bcd4;
        font-size: .28rem;
    }
</style>