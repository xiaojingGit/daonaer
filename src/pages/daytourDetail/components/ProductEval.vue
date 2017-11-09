<template>
    <div class="detail-group">
        <div class="comments-info-survey">
            <router-link class="comments-link" :to="productEval.link + ''"></router-link>
            <span class="comments-score">{{productEval.score}}</span>
            <span class="comments-score-text">分</span>
            <span class="comments-satisfied-degree">{{productEval.satisfyDegree}}</span>
            <span class="comments-totalnum">
                用户评论({{productEval.commentsNum}})
                <span class="iconfont icon-iconfontqianjin"></span>
            </span>
        </div>
        <div class="comments-con">
            <router-link class="comments-link" to="/daytourdetail"></router-link>
            <div class="comments-con-item">
                <div class="comments-level">
                    <div class="icon-level">
                        <template v-for="i in productEval.starNum">
                            <span class="iconfont icon-dengji"></span>
                        </template> 
                    </div>
                    <div class="comments-date">{{productEval.username}} &nbsp;{{productEval.commentsDate}}</div>
                </div>
                <p class="comments-text">{{productEval.commentsDesc}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        computed: mapState({
            productEval: state => state.tourday.productEval
        })
    }
</script>

<style scoped>
    .comments-info-survey, .comments-con {
        position: relative;        
    }
    .comments-info-survey {
        margin-top: .2rem;
        background-color: #fff;
        height: .8rem;
        line-height: .8rem;
    }
    .comments-link {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .comments-score {
        margin-left: .2rem;
        font-size: .4rem;
        color: #00afc7;
    }
    .comments-score-text {
        color: #00afc7;
    }
    .comments-satisfied-degree {
        display: inline-block;
        margin-left: .1rem;
        color: #616161;
    }
    .comments-totalnum {
        position: relative;
        top: .25rem;
        float: right;
        display: inline-block;
        line-height: .28rem;
        font-size: .28rem;
        margin-left: .16rem;
        margin-right: .2rem;
        color: #9e9e9e;
    }
    .comments-totalnum .icon-iconfontqianjin {
        position: relative;
        top: .02rem;
        font-size: .24rem;
    }
    .comments-con {
        padding: .1rem .2rem;
        background-color: #fff;
    }
    .comments-con:before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        transform: scaleY(.5);
        border-bottom: 1px solid #e0e0e0;
        transform-origin: 0 100%;
    }
    .comments-con-item {
        padding: .2rem 0 !important;
        color: #616161;
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
    .comments-text {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: .4rem;
        margin-top: .05rem;
    }
</style>