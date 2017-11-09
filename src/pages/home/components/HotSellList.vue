<template>
    <div class="lasy-load">
        <h2 class="modtitle">热销推荐</h2>
        <div class="hot-con">
            <ul class="hotlist">
                <li class="hotlist-item" v-for="item in HotSellListData" :key="item.id">
                    <router-link to="/">
                        <div class="hotlist-img">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="hotlist-infos">
                            <div class="hotlist-title">{{item.title}}</div>
                            <div class="hotlist-desc">{{item.desc}}</div>
                        </div>
                        <div class="hotlist-price hot-price">
                            ¥<em class="price-num">{{item.price}}</em><span class="price-text">起</span>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="modmore">
                <router-link to="/">
                    查看所有产品
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters(["HotSellListData"])
    }
</script>

<style scoped>
    .modtitle{
        width: 3rem;
        height: .8rem;
        padding-left: .26rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: .8rem;
        color: #212121;
    }
    .hot-con{
        background: #fff;
    }
    .hotlist-item{
        position: relative;
        overflow: hidden;
        height: 1.4rem;
        padding: .24rem;
    }
    .hotlist-item:before{
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        transform: scaleY(.5);
        border-bottom: 1px solid #e0e0e0;
        transform-origin: 0 100%;
    }
    .hotlist-img{
        position: absolute;
        top: .24rem;
        left: .24rem;
        width: 1.4rem;
        height: 1.4rem;
    }
    .hotlist-img img{
        vertical-align: top;
        transition: opacity 400ms;
        width: 1.4rem;
        height: 1.4rem;
    }
    .hotlist-infos{
        margin-left: 1.6rem;
    }
    .hotlist-title{
        overflow: hidden;
        margin-top: .04rem;
        margin-bottom: .1rem;
        color: #212121;
        font-size: .3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hotlist-desc{
        overflow: hidden;
        margin-bottom: .1rem;
        height: .4rem;
        line-height: .4rem;
        color: #9e9e9e;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hotlist-price{
        margin-left: 1.6rem;
        color: #ff8300;
    }
    .hot-price{
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
    }
    .hotlist-price .price-num{
        font-size: .36rem;
        padding: 0 .04rem;
    }
    .price-text{
        color: #9e9e9e;
        font-size: .24rem;
    }
    .modmore{
        height: .88rem;
        color: #00afc7;
        line-height: .88rem;
        text-align: center;
    }
    .modmore a{
        color: #00afc7;
    }
</style>