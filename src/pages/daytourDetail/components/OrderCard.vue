<template>
    <transition name="slide-show">
        <div class="order-card" v-if="show">
            <div class="booking-info">
                <h5 class="booking-title">
                    <p class="txt-ellipsis">[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游</p>
                    <span class="iconfont icon-cuo" @click="handleCloseClick"></span>
                </h5>
                <p class="booking-price">
                    <span class="price">
                        ￥<em class="price-num">208</em>
                    </span>
                    <span class="price-text">起/份</span>
                </p>
            </div>
            <div class="booking-content">
                <div class="booking-calender">
                    <h6 class="booking-note">日期选择</h6>
                    <div class="booking-datecard">
                        <span class="datecard-item datecard-disabled">
                            <em class="datecard-name">今天</em>
                            <strong class="datecard-detail">11月08日</strong>
                        </span>
                        <span class="datecard-item datecard-disabled">
                            <em class="datecard-name">明天</em>
                            <strong class="datecard-detail">11月09日</strong>
                        </span>
                        <span class="datecard-item datecard-actived">
                            <em class="datecard-name">明天</em>
                            <strong class="datecard-detail">11月09日</strong>
                        </span>
                    </div>
                    <div class="booking-select">
                        <h6 class="booking-note">人群</h6>
                        <div class="booking-textcard">
                            <span class="play-date play-date-active">成人</span>
                            <span class="play-date">儿童</span>
                        </div>
                    </div>
                    <div class="booking-select">
                        <h6 class="booking-note">发车时间</h6>
                        <div class="booking-textcard">
                            <span class="play-date play-date-active">07:30</span>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/orderfill?id=1" class="booking-btn">立即预订</router-link>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ["show"],
        methods: {
            handleCloseClick() {
                this.$emit("hideChild");
            }
        }
    }
</script>

<style scoped>
    .slide-show-enter, .slide-show-leave-to {
        transform: translateY(100%);
    }
    .slide-show-enter-to, .slide-show-leave {
        transform: translateY(0);
    }
    .slide-show-enter-active, .slide-show-leave-active {
        transition: all .5s;
    }
    .order-card {
        position: fixed;
        z-index: 92;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 100;
    }
    .booking-info {
        padding: 0 .2rem;
    }
    .booking-title {
        margin-right: .6rem;
        padding: .3rem 0 .1rem 0;
        font-size: .34rem;
        line-height: .4rem;
    }
    .txt-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .booking-info .icon-cuo {
        position: absolute;
        right: .2rem;
        top: 0.28rem;
        font-size: .44rem;
    }
    .booking-price {
        line-height: .48rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
    .price {
        margin-right: .06rem;
        line-height: .48rem;
        color: #ff8300;
        font-size: .24rem;
    }
    .price-num {
        margin-left: .06rem;
        font-size: .36rem;
    }
    .price-text {
        line-height: .48rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
    .booking-calender {
        margin: .18rem .2rem 0 .2rem;
        padding-bottom: .3rem;
    }
    .booking-note {
        padding-top: .1rem;
        line-height: .66rem;
        color: #333;
        font-size: .26rem;
    }
    .booking-datecard {
        overflow: hidden;
    }
    .datecard-item {
        float: left;
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
        min-width: 1.2rem;
        min-height: .82rem;
        width: 22.5%;
        height: .86rem;
        margin-left: 3.33%;
        border: .02rem solid #bdbdbd;
        border-radius: .1rem;
        text-align: center;
    }
    .datecard-disabled {
        border-color: #ececec;
        background: #fff;
    }
    .datecard-item:first-child {
        margin-left: 0;
    }
    .datecard-name {
        display: block;
        width: 100%;
        padding-top: .08rem;
        color: #212121;
        font-size: .28rem;
        line-height: .36rem;
    }
    .datecard-disabled .datecard-name, .datecard-disabled .datecard-detail {
        color: #dedede;
    }
    .datecard-detail {
        display: block;
        width: 100%;
        padding-bottom: .06rem;
        color: #888;
        font-size: .24rem;
        line-height: .32rem;
    }
    .datecard-actived {
        position: relative;
        border-color: #00bcd4;
        color: #fff;
        background: #00bcd4;
    }
    .datecard-actived:after {
        content: '√';
        display: block;
        position: absolute;
        z-index: 2;
        right: -.03rem;
        bottom: -.03rem;
        color: #00bcd4;
        font-family: 'mpiconfont';
        speak: none;
        font-size: .32rem;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }
    .datecard-actived .datecard-name, .datecard-actived .datecard-detail {
        color: #fff;
    }
    .booking-select {
        margin: 0 .2rem;
        padding-bottom: .3rem;
        overflow: hidden;
    }
    .booking-textcard {
        margin-top: -.15rem;
    }
    .play-date {
        display: inline-block;
        float: left;
        margin-right: .2rem;
        margin-top: .15rem;
        border: .02rem solid #c7ced4;
        padding: 0 .2rem;
        line-height: .53rem;
        background: #fff;
        font-size: .28rem;
        border-radius: .1rem;
    }
    .play-date-active {
        position: relative;
        border: .02rem solid #00bcd4;
        background: #00bcd4;
        color: #fff;
        overflow: hidden;
    }
    .play-date-active:after {
        content: '√';
        display: block;
        position: absolute;
        z-index: 2;
        right: -.03rem;
        bottom: -.03rem;
        color: #00bcd4;
        font-family: 'mpiconfont';
        speak: none;
        font-size: .32rem;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }
    .booking-btn {
        display: block;
        width: 100%;
        border: 0 none;
        background: #ff9800;
        color: #fff;
        font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
        text-align: center;
    }
</style>