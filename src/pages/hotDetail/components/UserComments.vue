<template>
    <div>
        <div class="comment-container">
            <h3 class="comment-title">用户评论</h3>
            <div class="comment-list">
                <div class="comment-item border-top">
                    <div class="comment-stardate">
                        <span class="comment-starlevel">
                            <i class="iconfont comment-starlevel-gain">&#xe644;&#xe644;&#xe644;&#xe644;&#xe644;</i>
                            <i class="iconfont comment-starlevel-total"></i>
                        </span>
                        <span class="comment-date">c*2&nbsp;&nbsp;2017-09-08</span>
                    </div>
                    <p class="comment-content" :class="{'comment-content-open': !showMore}">直接把故宫所有需要买票的地方的票都买了，不用取票，直接刷身份证就可以进，很方便，这次去的时间可能不凑巧，最中央的几个大殿都不让进，只有钟表馆，珍宝馆还有其他的陈列文物的地方是允许进的，不过我对钟表馆里的各种钟表是欣赏不来的，珍宝馆里的玉石雕刻的确是很精巧，故宫一趟转下来腿都要断了。。真的是很大，光看没有什么感觉，只有转的时候才能真正体会到故宫的宏伟。</p>
                    <div class="comment-foldbtn iconfont" @click = "handleClick" :class="{'icon-down-trangle': showMore, 'icon-up': !showMore}"></div>
                    <div class="comment-imgs" role="scrollImages">
                        <div class="comment-imgouter"  v-for = "item in commentsImg" :key = "item.id">
                            <div class="comment-imginner">
                                <img class="comment-img" v-lazy="item.imgUrl" style="">
                            </div>
                        </div>
                        <div class="comment-imgnumtag">
                            <span class="commenttag-bg"></span>
                            <span class="comment-tagnum">共9张</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more-refresh">
            查看全部评论
            <span class="iconfont">&#xe61a;</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['commentsImg'],
        data() {
            return {
                showMore: true
            }
        },
        methods: {
            handleClick() {
                this.showMore = !this.showMore;
            }
        }
    }

</script>

<style scoped>
    .comment-content-open {
        height: auto!important;
    }
    .comment-container {
        margin-top: .2rem;
        position: relative;
    }
    .comment-container::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
    }
    .comment-title {
        padding: 0 .2rem;
        height: .88rem;
        background: #fff;
        color: #333;
        font-size: .3rem;
        line-height: .88rem;
        text-indent: .2rem;
    }
    .comment-title::after {
        content: " ";
        position: absolute;
        top: .33rem;
        left: .2rem;
        width: .06rem;
        height: .25rem;
        background: #1ba9ba;
        border-radius: .04rem;
    }
    .comment-list {
        background: #fff;
    }
    .comment-item {
        padding: .1rem .2rem .3rem .2rem;
        position: relative;
    }
    .comment-item::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #e0e0e0;
    }
    .comment-stardate {
        margin-top: .1rem;
        line-height: .6rem;
    }
    .comment-starlevel {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        width: 1.4rem;
        height: .28rem;
        font-size: .28rem;
        line-height: .6rem;
    }
    .comment-starlevel-gain {
        display: inline-block;
        position: absolute;
        top: -.2rem;
        left: .2rem;
        z-index: 2;
        height: .28rem;
        font-size: .28rem;
        color: #00bcd4;
    }
    .comment-starlevel-total {
        color: #ddd;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .comment-date {
        overflow: hidden;
        position: relative;
        float: right;
        top: .16rem;
        margin-left: .2rem;
        width: 2rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: .28rem;
        font-size: .24rem;
        vertical-align: middle;
        color: #212121;
    }
    .comment-content {
        height: 105px;
        overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
        line-height: .42rem;
        font-size: .26rem;
        color: #616161;
    }
    .comment-foldbtn {
        height: .48rem;
        line-height: .48rem;
        text-align: center;
        font-size: .26rem;
        color: #9e9e9e;
    }
    .comment-imgs {
        margin: .2rem 0 .1rem 0;
        position: relative;
        zoom: 1;
        overflow: hidden;
    }
    .comment-imgouter {
        float: left;
        width: 33.33%;
        margin-bottom: .1rem;
    }
    .comment-imginner {
        margin-left: .07rem;
        margin-right: .07rem;
    }
    .comment-img {
        width: 100%;
        background-size: contain;
    }
    .comment-imgnumtag {
        position: absolute;
        bottom: .8rem;
        right: 0;
    }
    .comment-imgnumtag .commenttag-bg {
        position: absolute;
        right: .07rem;
        display: inline-block;
        background: #000;
        opacity: .5;
        height: .4rem;
        width: .94rem;
        border-top-left-radius: .2rem;
        border-bottom-left-radius: .2rem;
    }
    .comment-imgnumtag .comment-tagnum {
        position: absolute;
        right: .07rem;
        height: .4rem;
        width: .94rem;
        line-height: .4rem;
        font-size: .24rem;
        color: #fff;
        text-align: right;
        padding-right: .05rem;
    }
    .more-refresh {
        position: relative;
        margin-top: -.02rem;
        height: .8rem;
        background: #fff;
        color: #616161;
        line-height: .8rem;
        text-align: center;
        z-index: 2;
    }
    .more-refresh::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #e0e0e0;
    }
</style>