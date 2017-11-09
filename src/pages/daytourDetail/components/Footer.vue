<template>
    <div>
        <div class="mark" v-if="markShow" @click="handleMarkClick"></div>
        <div class="tourday-footer">
            <div class="whitespace"></div>
            <div class="footer-con">
                <div class="footer-left">
                    <span class="iconfont icon-161019kefuicon"></span>
                    <span class="chat-text">咨询</span>
                </div>
                <div class="footer-right">
                    <span class="order-btn" @click="handleBookingBtnClick">立即预订</span>
                </div>
            </div>
        </div>
        
        <order-card :show="show" @hideChild="handleMarkClick"/>
        
    </div>
</template>

<script>
    import orderCard from './OrderCard'

    export default {
        data() {
            return {
                show: false,
                markShow: false
            }
        },
        components: {
            "order-card": orderCard
        },
        methods: {
            handleBookingBtnClick() {
                this.show = true;
                this.markShow = true;
            },
            handleMarkClick() {
                this.show = false;
                this.markShow = false;
            }
        }
    }
</script>

<style scoped>
    
    .mark {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.5;
        z-index: 99;
    }
    .whitespace {
        width: 100%;
        height: 1.2rem;
    }
    .footer-con {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .98rem;
        z-index: 82;
        line-height: .98rem;
    }
    .footer-left {
        display: flex;
        flex-direction: column;
        float: left;
        padding: .16rem 0 .06rem;
        width: 1.02rem;
        background: #fff;
        color: #616161;
        text-align: center;
    }
    .footer-left .iconfont {
        position: relative;
        top: -.02rem;
        height: .4rem;
        font-size: .3rem;
        line-height: .4rem;
    }
    .chat-text {
        height: .28rem;
        font-size: .2rem;
        line-height: .28rem;
    }
    .footer-right {
        overflow: hidden;
        height: .98rem;
        line-height: .98rem;
        background: #ff9800;
        color: #fff;
        font-size: .4rem;
        text-align: center;
    }
    .order-btn {
        display: block;
        background: transparent;
        border: 0;
        color: #fff;
    }
</style>