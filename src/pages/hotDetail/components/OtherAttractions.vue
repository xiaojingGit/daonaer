<template>
    <div>
        <div class="recommend-container border-bottom">
            <h3 class="recommend-title border-bottom">看了该景点的人还看了</h3>
            <div class="recommend-list" v-for = "item in otherAttractions" :key = "item.id">
                <a href="//touch.piao.qunar.com/touch/detail.htm?id=4194325354&amp;cat=from_area%3Dts_hot_recommend%26from_index%3D0%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" role="sightLink">
                    <div class="recommend-item">
                        <img class="recommend-img" v-lazy="item.imgSrc" style="">
                        <div class="recommend-info border-bottom">
                            <div class="recommend-sight">
                                {{item.scenicSpot}}
                                <span class="recomment-sightstar">({{item.tip}})</span>    
                            </div>
                            <div class="recommend-price price">
                                ¥
                                <em class="price-num">{{item.price}}</em>
                                <span class="recommend-flag">起</span>
                            </div>
                            <div class="recommend-comment">
                                <span class="mpf-starlevel">
                                    <i class="iconfont mpf-starlevel-gain" data-score="4.44">&#xe625;&#xe625;&#xe625;&#xe625;&#xe625;</i>
                                </span>
                                <span class="recommend-commentnum">{{item.num}}条评论</span>
                            </div>
                            <div class="recommend-position">
                                <span class="recommend-subposition border-left">{{item.place}}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       props: ['otherAttractions']
    }

</script>

<style scoped>
    .recommend-container {
        position: relative;
        margin-top: .2rem;
        margin-bottom: .4rem;
    }
    .recommend-container::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
    }
    .recommend-title {
        padding: 0 .2rem;
        height: .88rem;
        background: #fff;
        color: #333;
        font-size: .3rem;
        line-height: .88rem;
        text-indent: .2rem;
    }
    .recommend-title::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
    }
    .recommend-title::after {
        content: " ";
        position: absolute;
        top: .33rem;
        left: .2rem;
        width: .06rem;
        height: .25rem;
        background: #1ba9ba;
        border-radius: .04rem;
    }
    .recommend-list {
        overflow: hidden;
        background: #fff;
    }
    a {
        color: #00afc7;
        text-decoration: none;
    }
    .recommend-img {
        margin: .2rem .2rem 0 .2rem;
        width: 1.62rem;
        height: 1.62rem;
        float: left;
        vertical-align: center;
    }
    .recommend-info {
        position: relative;
        padding-top: .2rem;
        margin-left: 2.02rem;
        height: 1.8rem;
    }
    .recommend-info::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
    }
    .recommend-sight {
        position: absolute;
        top: .2rem;
        left: 0;
        right: 1.5rem;
        height: .4rem;
        line-height: .4rem;
        font-size: .3rem;
        color: #212121;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .recommend-price {
        position: absolute;
        right: .2rem;
        top: .2rem;
        line-height: .4rem;
        vertical-align: baseline;
        color: #ff9800;
    }
    .recommend-price .price-num {
        font-size: .36rem;
    }
    .recommend-flag {
        color: #9e9e9e;
        line-height: .4rem;
    }
    .recommend-comment {
        position: absolute;
        top: 1rem;
        left: 0;
    }
    .recommend-container .mpf-starlevel {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        width: 1.4rem;
        height: .28rem;
    }
    .recommend-position {
        position: absolute;
        bottom: .24rem;
        left: 0;
        color: #9e9e9e;
        font-size: .24rem;
    }
    .recomment-sightstar {
        font-size: .3rem;
        color: #adadad;
    }
    .recommend-commentnum {
        margin-left: .1rem;
        line-height: .28rem;
        font-size: .24rem;
        vertical-align: middle;
        color: #9e9e9e;
    }
    .recommend-subposition {
        padding: 0 .04rem 0 .1rem;
    }
    .mpf-starlevel-gain{
        line-height: .8;
    }
</style>