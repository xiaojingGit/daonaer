<template>
    <div>
        <ul class="activity-list">
            <li class="activity-item">
                <i class="activity-icon iconfont icon-dingwei"></i>定位失败
            </li>
            <li class="activity-item">
                <i class="activity-icon iconfont icon-earth"></i>5折泡温泉
            </li>
        </ul>

        <ul class="activity-img-list">
            <li class="activity-img-item" v-for="item in ActivityDataImages" :key="item.id">
                <router-link :to="item.linkTo">
                    <img class="activity-item-img" :src="item.imgUrl" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters(["ActivityDataImages"])
    }
</script>

<style>
    .activity-list {
        display: flex;
        overflow: hidden;
        border-top: 1px solid #f1f1f1;
        width: 100%;
        background: #ffffff;
    }
    .activity-item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50%;
        height: .98rem;
        line-height: .98rem;
        text-align: center;
        font-size: .28rem;
        color: #212121;
    }
    .activity-item:first-child {
        border-right: 1px solid #eaeaea;
    }
    .activity-icon {
        margin-right: .05rem;
        color: #616161;
        font-size: .32rem;
    }
    .activity-img-list {
        display: flex;
        overflow: hidden;
        margin-top: .2rem;
        width: 100%;
        background: #ffffff;
    }
    .activity-img-item {
        width: 50%;
        height: 1.4rem;
    }
    .activity-img-item:first-child {
        border-right: 1px solid #eaeaea;
    }
    .activity-item-img {
        width: 100%;
        height: 100%;
    }
</style>
