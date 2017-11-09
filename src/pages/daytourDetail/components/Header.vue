<template>
    <div>
        <div class="header">
            <img class="header-img" :src="headerInfo.imgSrc" alt="">
            <div class="img-infocon">
                <span class="infocon-left">出发地:{{headerInfo.startPoint}}</span>
                <span class="infocon-right">{{headerInfo.tripName}}</span>
            </div>
            <div class="header-back">
                <div class="headerback-bg"></div>
                <span class="iconfont icon-fanhui"></span>
            </div>
        </div>
        <div class="header-prdcard">
            <h3 class="prdcard-name">{{headerInfo.cardTit}}</h3>
            <div class="prdcard-price-con">
                <em class="prdcard-price-icon">￥</em>
                <span class="prdcard-price-text">{{headerInfo.price}}</span>
                <span class="prdcard-price-gray">起</span>
                <span class="prdcard-bookingahead-text">可订{{headerInfo.orderDate}}</span>
                <span class="prdcard-supplier">已售:{{headerInfo.soldNum}}</span>
            </div>
            <div class="prdcard-tagcon">
                <div class="prdcard-tag-item">
                    <span class="iconfont icon-dui"></span>
                    <span class="prdcard-tag-desc">条件退</span>
                </div>
                <div class="prdcard-tag-item">
                    <span class="iconfont icon-dui"></span>
                    <span class="prdcard-tag-desc">铁定成团</span>
                </div>
                <div class="prdcard-tag-item">
                    <span class="iconfont icon-dui"></span>
                    <span class="prdcard-tag-desc">无自费</span>
                </div>
                <div class="prdcard-tag-item">
                    <span class="iconfont icon-dui"></span>
                    <span class="prdcard-tag-desc">无购物</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState({
            headerInfo: state => state.tourday.headerInfo
        })
    }
</script>

<style scoped>
    .header {
        position: relative;
        overflow: hidden;
        height: 4rem;
    }
    .header-img {
        width: 100%;
        min-height: 4rem;
    }
    .img-infocon {
        position: absolute;
        left: 0;
        bottom: 0;
        overflow: hidden;
        width: 100%;
        font-size: 0;
    }
    .infocon-left, .infocon-right {
        overflow: hidden;
        display: inline-block;
        width: 40%;
        height: .34rem;
        margin-bottom: .22rem;
        color: #fff;
        font-size: .24rem;
        line-height: .34rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .infocon-left {
        margin-left: .2rem;
    }
    .infocon-right {
        margin-right: .2rem;
        float: right;
        text-align: right;
    }
    .header-back {
        position: absolute;
        top: .1rem;
        left: .1rem;
        width: .72rem;
        height: .72rem;
        line-height: .72rem;
        text-align: center;
        color: #fff;
    }
    .headerback-bg {
        display: block;
        width: .72rem;
        height: .72rem;
        background-color: #000;
        opacity: .5;
        border-radius: 50%;
        line-height: .72rem;
    }
    .header-back .icon-fanhui {
        position: absolute;
        left: 0;
        top: .01rem;
        width: .72rem;
        line-height: .72rem;
        font-size: .36rem!important;
        font-weight: 900;
        text-align: center;
    }
    .header-prdcard {
        position: relative;
        margin-top: -.1rem;
        padding: .2rem .2rem 0 .2rem;
        background: #fff;
        border-radius: .1rem .1rem 0 0;
    }
    .prdcard-name {
        overflow: hidden;
        display: -webkit-box;
        line-height: .44rem;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        color: #212121;
        font-size: .36rem;
    }
    .prdcard-price-con {
        overflow: hidden;
        margin: .16rem 0;
        height: .48rem;
        font-size: 0;
    }
    .prdcard-price-icon {
        color: #ff8300;
        font-size: .24rem;
    }
    .prdcard-price-text {
        color: #ff8300;
        font-size: .48rem;
    }
    .prdcard-price-gray, .prdcard-supplier {
        color: #9e9e9e;
        font-size: .24rem;
    }
    .prdcard-bookingahead-text {
        color: #616161;
        font-size: .24rem;
        margin-left: .2rem;
    }
    .prdcard-supplier {
        float: right;
        height: .24rem;
        margin-top: .2rem;
        color: #616161;
    }
    .prdcard-tagcon {
        overflow: hidden;
        padding-bottom: .2rem;
        font-size: 0;
    }
    .prdcard-tag-item {
        float: left;
        height: .34rem;
        font-size: .24rem;
        line-height: .34rem;
    }
    .prdcard-tag-item:not(:last-child) {
        margin-right: .2rem;
    }
    .prdcard-tag-item .icon-dui {
        margin-right: .04rem;
        color: #00afc7;
        font-size: .28rem;
        vertical-align: -.02rem
    }
    .prdcard-tag-desc {
        color: #616161;
    }
</style>