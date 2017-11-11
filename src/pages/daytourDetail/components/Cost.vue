<template>
    <div class="cost-box" id="costCon">
        <h3 class="cost-title cost-border">费用及退款说明</h3>
        <div class="cost-con">
            <h4 class="cost-subtitle">费用包含</h4>
            <div class="cost-structure-list">
                <div class="cost-structure-item cost-border">
                    <h4 class="structure-item-title">门票</h4>
                    <p class="structure-item-desc">
                        行程中所含的景点首道大门票:故宫（赠送珍宝馆）+八达岭长城
                    </p>
                </div>
                <div class="cost-structure-item cost-border">
                    <h4 class="structure-item-title">交通</h4>
                    <p class="structure-item-desc">
                        全程空调旅游车
                    </p>
                </div>
                <div class="cost-structure-item cost-border">
                    <h4 class="structure-item-title">用餐</h4>
                    <p class="structure-item-desc">
                        行程内午餐费用
                    </p>
                </div>
                <div class="cost-structure-item cost-border">
                    <h4 class="structure-item-title">儿童价说明</h4>
                    <p class="structure-item-desc">
                        身高0.8m-1.4m需提交儿童价格：含半价门票+餐费+导服+车费（1.2以下免门票，导游现退半价门票）<br />
                        身高1.4m以上（含1.4m)需提交成人价格，如有学生证件请出示给导游，现场退学生半价门票<br />
                        身高0.8m以下儿童且不需要占座则无须按儿童价格提交
                    </p>
                </div>
            </div>
            <h4 class="cost-subtitle">费用不含</h4>
            <div class="cost-structure-list">
                <div class="cost-structure-item cost-border">
                    <h4 class="structure-item-title">八达岭往返滑车或缆车</h4>
                    <p class="structure-item-desc">
                        八达岭往返滑车140元；缆车140元/人
                    </p>
                </div>
                <div class="cost-structure-item cost-border">
                    <h4 class="structure-item-title">其他</h4>
                    <p class="structure-item-desc">
                        其他个人消费
                    </p>
                </div>
            </div>
            <h4 class="cost-subtitle">退款说明</h4>
            <p class="refund-desc">
                退款时间：使用日期截止前1天12:00前可以申请退款; <br />
                1）出行前一天12:00之前申请退款无手续费。。 
            </p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .cost-box {
        background: #fff;
    }
    .cost-title {
        position: relative;
        overflow: hidden;
        height: .84rem;
        padding: 0 .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .84rem;
        text-indent: .16rem;
    }
    .cost-border:before {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .1rem;
        border-bottom: 1px solid #e0e0e0;
        transform: scaleY(.5);
        transform-origin: 0 100%; 
    }
    .cost-title:after {
        content: " ";
        position: absolute;
        top: .28rem;
        left: .2rem;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        -webkit-border-radius: .06rem;
        -moz-border-radius: .06rem;
        border-radius: .06rem;
    }
    .cost-con {
        overflow: hidden;
        padding: 0 .24rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }
    .cost-subtitle {
        padding: .24rem 0 .1rem;
        color: #ff8300;
        font-size: .3rem;
        line-height: .42rem;
    }
    .cost-structure-list {
        border-right: 1px solid #eee;  
        border-bottom: 1px solid #eee;
    }
    .cost-structure-item {
        position: relative;
        overflow: hidden;
        color: #212121;
        background: #f5f5f5;
        font-size: .28rem;
        line-height: .4rem;
    }
    .cost-structure-item:before {
        top: -.1rem;
    }
    .structure-item-title {
        position: absolute;
        top: 50%;
        width: 1.8rem;
        text-align: center;
        transform: translateY(-50%);
    }
    .structure-item-desc {
        margin-left: 1.8rem;
        padding: .2rem;
        background: #fff;
    }
    .refund-desc {
        color: #616161;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-word;
        padding-bottom: .2rem;
    }
</style>