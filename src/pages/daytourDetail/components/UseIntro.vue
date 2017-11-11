<template>
    <div class="useintro" id="useIntroCon">
        <h3 class="useintro-title">使用说明</h3>
        <div class="useintro-con" :style="{height: height}">
            <div class="useintro-item">
                <h4 class="useintro-subtitle">出团信息</h4>
                <p class="useintro-item-desc">
                    商家会在出游前1天的20点前与您确认出团信息。若您在超过此时间预订，商家会在您预订成功后10分钟内与您确认出团信息。
                </p>
            </div>
            <div class="useintro-item">
                <h4 class="useintro-subtitle">预订须知</h4>
                <p class="useintro-item-desc">
                    （故宫实行实名制购票，参观故宫的成人游客请带好身份证，1.2米以上的儿童请携带户口本，方便购票；成人无证件不可参
                    观，请理解；暑期及节假日外，故宫景点每周一闭馆)。
                </p>
            </div>
            <div class="useintro-item">
                <h4 class="useintro-subtitle">使用说明</h4>
                <p class="useintro-item-desc">
                    无需咨询，请直接提交订单，网上支付，我社以我社以系统订单为准，统一给导游派发游客名单，无需纸质凭证， 导游会在
                    提前一天17:00-20:00以电话或短信的形式和您联系，请保持预定时手机畅通，如未接到出行通知，请致电去哪客服
                </p>
            </div>
            <div class="useintro-item">
                <h4 class="useintro-subtitle">注意事项</h4>
                <p class="useintro-item-desc">
                    周六日、节假日、暑期，八达岭高速经常遇有堵车，请游客耐心等候，如因堵车原因，无法正点到达景区游览，游览时间往后
                    顺延，敬请谅解！如因堵车原因，造成景区无法游览，我们只能抱歉的退还未产生的费用，比如：门票或餐费，敬请谅解！
                </p>
            </div>
        </div>
        <div class="more-useintro more-btn" ref="morebtn" @click="handleMoreClick">
            <span class="more-text">更多使用说明</span>
            <span class="iconfont" :class="{'icon-down-trangle': downTrangle, 'icon-up': upTrangle}"></span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                height: "242px",
                downTrangle: true,
                upTrangle: false
            }
        },
        methods: {
            handleMoreClick(e) {

                if(this.height === "242px") {
                    this.height = "auto";
                    this.$refs.morebtn.className = "more-useintro";
                    this.downTrangle = false;
                    this.upTrangle = true;
                } else {
                    this.height = "242px";
                    this.$refs.morebtn.className = "more-useintro more-btn";
                    this.downTrangle = true;
                    this.upTrangle = false;
                }

            }
        }
    }
</script>

<style scoped>
    .useintro {
        margin-top: .2rem;
        background: #fff;
    }
    .useintro-title {
        position: relative;
        overflow: hidden;
        height: .84rem;
        padding: 0 .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .84rem;
        text-indent: .16rem;
    }
    .useintro-title:before {
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
    .useintro-title:after {
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
    .useintro-con {
        overflow: hidden;
        padding: 0 .24rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }
    .useintro-subtitle {
        padding: .24rem 0 .1rem;
        color: #ff8300;
        font-size: .3rem;
        line-height: .42rem;
    }
    .useintro-item-desc {
        color: #616161;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-word;
    }
    .more-useintro {
        position: relative;
        padding: .24rem 0 .3rem;
        height: .4rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
        text-align: center;
    }
    .more-btn:before {
        content: '';
        position: absolute;
        left: 0;
        top: -.6rem;
        width: 100%;
        height: .6rem;
        background-image: -webkit-linear-gradient(top,rgba(255,255,255,1),rgba(255,255,255,.2));
        background: linear-gradient(to top,rgba(255,255,255,1),rgba(255,255,255,.2));
    }
    .more-text {
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
        text-align: center;
    }
</style>