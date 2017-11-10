<template>
    <div class="notice-page">
        <div class="notice-inner">
            <span class="iconfont notice-icon">&#xe648;</span>
            因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。
            <span class="iconfont notice-closeicon">&#xe61a;</span>
        </div>
    </div>
</template>

<script>
    export default {

	}

</script>

<style scoped>
    .notice-page {
        margin-bottom: .2rem;
        height: .88rem;
        line-height: .88rem;
        padding-left: .14rem;
        background-color: #fdeede;
        color: #f1441a;
    }
    .notice-inner {
        padding-right: .6rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
    }
    .notice-icon {
        font-size: .44rem;
        color: #f67353;
        margin-right: .1rem;
    }
    .notice-closeicon {
        position: absolute;
        top: .05rem;
        right: .2rem;
        color: #c7bcaf;
    }
</style>