<template>
    <div class="baseinfo-page">
        <div class="baseinfo-address" id="card-adress">
            <p class="baseinfo-address-txt">
                <span class="iconfont baseinfo-address-icon">&#xe611;</span>
                    北京市东城区景山前街4号
                <span class="iconfont baseinfo-address-arrow">&#xe61a;</span>
            </p>
        </div>
        <router-link class="baseinfo-intro" to="">
            <p class="baseinfo-intro-txt">
                <span class="iconfont baseinfo-intro-icon">&#xe618;</span>
                    查看景点简介及开放时间
                <span class="iconfont baseinfo-intro-arrow">&#xe61a;</span>
            </p>
        </router-link>
    </div>
</template>

<script>
    export default {

	}

</script>

<style scoped>
    .baseinfo-page {
        position: relative;
        top: -.1rem;
        padding: .1rem .2rem 0 .2rem;
        margin-bottom: .1rem;
        background: #fff;
        border-radius: .1rem .1rem 0 0;
    }
    .baseinfo-address, .baseinfo-intro {
        display: block;
        position: relative;
        height: .88rem;
        color: #212121;
        line-height: .88rem;
    }
    .baseinfo-address-txt, .baseinfo-intro-txt {
        overflow: hidden;
        padding-right: .56rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .baseinfo-address-icon, .baseinfo-intro-icon {
        margin-right: .2rem;
        font-size: .24rem;
        font-weight:900;
        color: #9e9e9e;
    }
    .baseinfo-address-arrow, .baseinfo-intro-arrow {
        position: absolute;
        right: 0;
        top: 0;
        color: #b9b9b9;
    }
    .baseinfo-intro::before {
        content: " ";
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #f0f0ef;
    }

       
 
</style>