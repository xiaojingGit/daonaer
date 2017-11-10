<template>
    <div>
        <div class="ticket-page"  v-for="items in ticketsList" :key="items.id">
            <h3 class="ticket-type">
                <span class="ticketype-ticket"></span>
                {{items.title}}
            </h3>
            <div class="ticket-list-wrapper" :class="{'ticket-open':showItem(items.id)}">
            <div class="ticket-list-multi"  v-for="value in items.dataList" :key="value.id">
                <div class="ticket-type-info">
                    <h5 class="ticket-type-name ticket-ellipsis2">
                        {{value.ticketType}}
                        <span class="ticket-type-subname">
                            {{value.tip}}
                        </span>
                    </h5>
                    <div class="ticket-type-price">
                        ¥
                        <em class="ticket-price-num">{{value.price}}</em>
                        <span class="ticket-numword">起</span>
                    </div>
                    <div class="ticket-type-extend iconfont  iconfont-down-up" :class="{'icon-up':changeIcon(value.id), 'icon-down-trangle': !changeIcon(value.id) }"  @click="handleUpDownClick(value.id)"></div>
                </div>
                <div class="ticket-default"  v-if = "changeIcon(value.id)">
                    <div class="ticket-value ticket-item">
                        <div class="ticket-main">
                            <div>
                                <div class="ticket-supplier">
                                    <span class="ticket-qunar iconfont">&#xe613;</span>
                                    去哪儿直销
                                </div>
                                <h6 class="ticket-title ticket-ellipsis2">
                                    {{value.ticketType}}{{value.tip}}
                                </h6>
                                <ul class="ticket-light"></ul>
                                <ul class="ticket-light">
                                    <span class="ticket-desctag">
                                        <span class="iconfont ticket-tagicon">&#xe607;</span>
                                        15:25前可订今日
                                    </span>
                                    <span class="ticket-desctag">
                                        <span class="iconfont ticket-tagicon">&#xe713;</span>
                                        条件退
                                    </span>
                                </ul>
                                <div class="ticket-detail" data-clktype="product-detail" data-sightid="38170" data-preference="false" data-pid="430250064" data-priceid="3043097901" data-straightsign="true" data-classify="1" data-supid="15363">
                                </div>
                            </div>
                        </div>
                        <div class="ticket-side flexbox-layout border-left">
                            <a href="" class="ticket-link" role="TicketLink" title="故宫门票">
                                <strong class="ticket-sale price">
                                    ¥
                                    <em class="price-num">
                                    {{value.price}}
                                    </em>
                                </strong>
                                <em role="downloadAppBtn" class="ticket-btn">
                                    预订
                                </em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="ticket-more-refresh"  @click = "handleShowMore(items.id)" v-if = "!showItem(items.id)">
                查看剩余产品
                <span class="ticket-iconfont iconfont">&#xe610;</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["ticketsList"],
        data() {
            return {
                showBuyTypes: 0,
                classActive: 0,
                outsideClickArr: [],
                insideClickArr: [],
                ifShow: 0
            }
        },
        methods: {
            showItem(value) {
                var isShow = false;
                for(var i =0 ; i< this.outsideClickArr.length; i++) {
                     if(value == this.outsideClickArr[i]) {
                        isShow = true;
                        break;
                    }
                }
                return isShow;
            },
            changeIcon(value) {
                var isShow = false;
                for(var i =0 ; i< this.insideClickArr.length; i++) {
                     if(value == this.insideClickArr[i]) {
                        isShow = true;
                        break;
                    }
                }
                return isShow;
            },
            handleUpDownClick(index) {
                let inArray = false;
                for(var i = 0 ; i < this.insideClickArr.length; i++) {
                    if(this.insideClickArr[i] == index) {
                        inArray = true;
                        this.insideClickArr.splice(i, 1);
                        break;
                    }
                }
                if(!inArray) {
                    this.insideClickArr.push(index);
                }
            },
            handleShowMore(index) {
                let inArray = false;

                for(var i =0 ; i<this.outsideClickArr.length; i++) {
                     if(this.outsideClickArr[i] == index) {
                        inArray = true;
                        break;
                    }
                }

                if(!inArray) {
                    this.outsideClickArr.push(index);
                }
            }
        }
	}

</script>

<style scoped>
    
    .ticket-page {
        height: auto;
        margin-top: .2rem;
        background: #fff;
    }
    .ticket-list-wrapper{
        height: 4.32rem;
        overflow: hidden;
    }
    .ticket-type {
        overflow: hidden;
        position: relative;
        z-index: 4;
        margin-bottom: -.02rem;
        padding: 0 .2rem;
        height: .88rem;
        background: #fff;
        color: #333;
        font-size: .32rem;
        line-height: .88rem;
        text-indent: .4rem;
    }
    .ticket-type::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
    }
    .ticketype-ticket {
        display: inline-block;
        position: absolute;
        width: .36rem;
        height: .36rem;
        top: .26rem;
        left: .2rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }
    .ticket-list-multi {
        position: relative;
        overflow: hidden;
    }
    .ticket-list-multi::before {
        content: " ";
        overflow: hidden;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
    }
    .ticket-type-info {
        position: relative;
        z-index: 2;
        margin-bottom: -.02rem;
        padding: .24rem .2rem;
        background: #fff;
    }
    .ticket-type-info::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #e0e0e0;
    }
    .ticket-type-name {
        margin-right: 1.8rem;
        width: 4.4rem;
        color: #333;
        font-size: .3rem;
        line-height: .48rem;
    }

    .ticket-ellipsis2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .ticket-type-subname {
        font-size: .24rem;
        color: #888;
        line-height: .32rem;
        margin: .1rem 0 .14rem .1rem;
        margin-right: 1.84rem;
    }
    .ticket-type-price {
        position: absolute;
        top: 50%;
        right: .46rem;
        margin-top: -.2rem;
        overflow: hidden;
        height: .4rem;
        color: #ff9800;
        font-size: .32rem;
        line-height: .4rem;
    }
    .price-num {
        margin-left: .04rem;
        font-size: .36rem;
        font: .28rem Tahoma,Helvetica,sans-serif;
    }
    .ticket-numword {
        display: inline-block;
        color: #9e9e9e;
        font-size: .24rem;
    }
    .ticket-type-extend {
        right: .15rem;
        margin-top: -.2rem;
        color: #bbb;
        font-size: .32rem;
        overflow: hidden;
        position: absolute;
        top: 50%;
        height: .4rem;
        line-height: .4rem;
    }
    .ticket-default {
        background: #f5f5f5; 
        display: block;
    }
    .ticket-item {
        background: #f5f5f5;
        box-sizing: border-box;
        padding: .25rem;

    }
    .ticket-supplier {
        font-size: .32rem;
        padding: .08rem 0;
        color: #333;
        font-size: .28rem;
        line-height: .36rem;
    }
    .ticket-qunar {
        display: inline-block;
        overflow: hidden;
        width: .3rem;
        height: .3rem;
        margin-right: .06rem;
        background: #00bcd4;
        background-size: 100% 100%;
        vertical-align: -.04rem;
        color: #fff;
        border-radius: .06rem;
    }
    .ticket-title {
        padding-top: 0;
        width: 4.2rem;
        color: #888;
        font-size: .24rem;
        line-height: .36rem;
        padding: .08rem 0;
    }
    .ticket-light {
        overflow: hidden;
    }
    .ticket-desctag:not(:last-child) {
        margin-right: .24rem;
    }
    .ticket-desctag {
        display: inline-block;
        color: #616161;
        font-size: .24rem;
        line-height: .32rem;
        white-space: nowrap;
    }
    .ticket-tagicon {
        display: inline-block;
        margin-right: .08rem;
        color: #1ba9ba;
        font-size: .2rem;
    }
    .ticket-detail {
        line-height: .36rem;
        font-size: .24rem;
        color: #999;
    }
    .ticket-main, .ticket-side {
        display: flex;
        align-items: center;
    }
    .ticket-side{
        position: absolute;
        top: 50%;
        right: 0.2rem;
        width: 1.55rem;
    }
    .ticket-side::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 150%;
        border-left: 1px solid #e0e0e0;
    }
    .ticket-link {
        box-sizing: border-box;
        display: block;
        width: 100%;
        padding-left: .2rem;
    }
    .ticket-sale {
        height: .32rem;
        display: block;
        overflow: hidden;
        line-height: .28rem;
        text-align: center;
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
        color: #ff9800;
    }
    .price-num {
        margin-left: .04rem;
        font-size: .32rem;
        line-height: .3rem;
        font: .28rem Tahoma,Helvetica,sans-serif;
    }
    .ticket-btn {
        display: block;
        overflow: hidden;
        height: .6rem;
        border-radius: .06rem;
        background: #ff9800;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;  
        text-align: center;
    }
    .ticket-more-refresh {
        position: relative;
        margin-top: -.02rem;
        height: .8rem;
        background: #fff;
        color: #616161;
        line-height: .8rem;
        text-align: center;
        z-index: 2;
    }
    .ticket-iconfont {
        margin-left: .1rem;
        color: #616161;
        font-size: .2rem;
    }
    .ticket-open {
        height: auto;
    }

</style>