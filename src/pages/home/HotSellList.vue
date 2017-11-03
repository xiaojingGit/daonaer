<template>
    <div class="lasy-load">
        <h2 class="modtitle">热销推荐</h2>
        <div class="hot-con">
            <ul class="hotlist">
                <li class="hotlist-item" v-for="item in hotList" :key="item.id">
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
    export default {
        data() {
            return {
                hotList: [{
                    id: 1,
                    src: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
                    title: "故宫",
                    desc: "东方宫殿建筑代表，世界宫殿建筑典范",
                    price: 40
                }, {
                    id: 2,
                    src: "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg",
                    title: "八达岭长城",
                    desc: "不到长城非好汉",
                    price: 25
                }, {
                    id: 3,
                    src: "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg",
                    title: "颐和园",
                    desc: "保存完整的一座皇家行宫御苑",
                    price: 1
                }, {
                    id: 4,
                    src: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg",
                    title: "北京欢乐谷",
                    desc: "七大主题园区带你畅享北京欢乐谷",
                    price: 11
                }, {
                    id: 5,
                    src: "http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg",
                    title: "慕田峪长城",
                    desc: "秀美长城，关键是人少",
                    price: 19.1
                }]
            }
        }
    }
</script>

<style scoped>
    .modtitle{
        height: .8rem;
        padding-left: .26rem;
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