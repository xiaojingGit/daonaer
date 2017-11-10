<template>
    <div class="comments-page">
        <span class="comments-icon"></span>
        <span class="comments-starlevel">
            <i class="iconfont comments-starlevel-gain" style="width:100.0%">&#xe644;&#xe644;&#xe644;&#xe644;&#xe644;</i>
        </span>
        <span class="comments-tagscore">5.0分</span>
        <router-link class="comments-total" mp-role="commentLink" to="//touch.piao.qunar.com/touch/sight/comment.htm?sightId=989946426&amp;cat=from_area%3Dts_hot_recommend%26from_index%3D0%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC">
            <span class="comments-totalnum">
                153582评论&nbsp;
                <span class="iconfont comments-rightarrow">&#xe61a;</span>
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {

	}

</script>

<style scoped>
    .comments-page{
        margin-bottom: .2rem;
        background-color: #fff;
        height: .8rem;
        line-height: .8rem;
    }
    .comments-icon{
        display: inline-block;
        position: relative;
        top: .08rem;
        width: .36rem;
        height: .36rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
        margin-left: .2rem;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }
    .comments-starlevel {
        display: inline-block;
        position: relative; 
        top: .04rem;
        width: 1.4rem;
        height: .28rem;
    }
    .comments-starlevel-gain{ 
        display: inline-block;
        overflow: hidden;
        position: absolute;
        top: -0.24rem;
        left: 0;
        width: 100.0%;
        z-index: 2;
        font-size: .28em;
        color: #00bcd4;
    }
    .comments-tagscore {
        display: inline-block;
        margin-left: .1rem;
        color: #00afc7;
    }
    .comments-total {
        float: right;
        display: block;
        margin-bottom: .2rem;
    }
    .comments-totalnum {
        display: inline-block;
        line-height: .28rem;
        font-size: .28rem;
        margin-left: .16rem;
        margin-right: .2rem;
        color: #9e9e9e;
    }
    .comments-rightarrow {
        position: relative;
        top: .02rem;
    }
       
 
</style>