<template>
    <div class="footer">
        <div class="booking-intro">
            <em class="booking-right">产品价格</em>
            <strong class="booking-right booking-price">
                ￥<em class="price-num">{{$store.state.orderfill.num}}</em>
            </strong>
        </div>
        <router-link to="/" class="booking-btn">提交订单</router-link>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .footer {
        position: fixed;
        z-index: 92;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: #fff;
    }
    .footer:before {
        content: " ";
        position: absolute;
        top: -.02rem;
        left: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #c9cccd;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    .booking-intro {
        position: relative;
        float: left;
        width: 50%;
        font-size: .24rem;
        line-height: 1rem;
        text-indent: .2rem;
    }
    .booking-right {
        color: #ff8300;
    }
    .price-num {
        font-size: .48rem;
    }
    .booking-btn {
        float: right;
        width: 50%;
        border: 0 none;
        background: #ff9800;
        color: #fff;
        font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
        text-align: center;
    }
</style>