<template>
    <div class="user-comments detail-group">
        <h3 class="comments-title comments-border">用户评论</h3>
        <div class="comments-detail">
            <div class="comments-item">
                <div class="comments-level">
                    <div class="icon-level">
                        <span class="iconfont icon-dengji"></span>
                        <span class="iconfont icon-dengji"></span>
                        <span class="iconfont icon-dengji"></span>
                        <span class="iconfont icon-dengji"></span>
                        <span class="iconfont icon-dengji"></span>
                    </div>
                    <div class="comments-date">b*5 &nbsp;2017-11-06</div>
                </div>
                <p class="comments-desc">
                    我是第一次报一天游的，在沒有报前总覺得不好，但旭冉旅遊团的小凡称小格格，真的值得一赞，剛好是北京下暴雨的一天，
                    我們往八达岭长城开去，已經差不多到，才收到全封閉通知，小格格还幫我們全去了幾個售票处问问可以上去长城吗，這点
                    小格格很细心，在讲解途中，很全面很细致，真的值得赞！下次來北京，一定找你小格格做導遊！
                </p>
                <div class="comments-imgs">
                    <img class="comment-img" src="https://imgs.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" alt="">
                    <img class="comment-img" src="https://imgs.qunarzz.com/piao/fusion/1706/e4/f93db5e711aa0002.jpg_240x240_0c43da7f.jpg" alt="">
                    <img class="comment-img" src="https://imgs.qunarzz.com/piao/fusion/1706/fb/265568d0f571d02.jpg_240x240_004845eb.jpg" alt="">
                    <img class="comment-img" src="https://imgs.qunarzz.com/piao/fusion/1706/3e/b9ff164f5879be02.jpg_240x240_a2fab685.jpg" alt="">
                    <img class="comment-img" src="https://imgs.qunarzz.com/piao/fusion/1706/58/c29546f2e32f6102.jpg_240x240_34da6f79.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="more-comments comments-border">
            <a href="/daytourdetail" class="more-comments-link"></a>
            查看更多评论
            <span class="iconfont icon-iconfontqianjin"></span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .comments-title {
        position: relative;
        overflow: hidden;
        height: .84rem;
        padding: 0 .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .84rem;
        text-indent: .16rem;
    }
    .comments-title:after {
        content: " ";
        position: absolute;
        top: .28rem;
        left: .2rem;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        border-radius: .06rem;
    }
    .comments-border:before {
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
    .comments-detail {
        overflow: hidden;
        padding: 0 .24rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }
    .comments-item {
        padding: .2rem 0 !important;
        color: #616161;
        border-bottom: 1px dashed #ccc;
    }
    .comments-item:last-child {
        border-bottom: 0;
    }
    .comments-level {
        height: .32rem;
    }
    .icon-level {
        float: left;
    }
    .icon-level .icon-dengji {
        font-size: .24rem!important;
        color: #00bcd4;
    }
    .comments-date {
        float: right;
        margin-left: .2rem;
        color: #616161;
    }
    .comments-desc {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        margin: .1rem 0;
        font-size: .28rem;
        line-height: .4rem;
    }
    .comments-imgs {
        overflow: hidden;
        overflow-x: auto;
        font-size: 0;
        white-space: nowrap;
    }
    .comment-img {
        width: 1.6rem;
        height: 1.6rem;
    }
    .comment-img:not(:first-child) {
        margin-left: .2rem;
    }
    .more-comments {
        position: relative;
        height: .8rem;
        color: #616161;
        font-size: .28rem;
        line-height: .8rem;
        text-align: center;
    }
    .more-comments:before {
        top: 0;
    }
    .more-comments-link {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .more-comments .iconfont{
        color: #9e9e9e;
        font-size: .2rem;
        margin-left: .08rem;
    }
</style>