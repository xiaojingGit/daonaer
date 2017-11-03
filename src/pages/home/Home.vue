<template>
  	<div class="page">
    	<index-header />
    	<index-banner-swiper />
        <index-icon-swiper />
        <index-activity />
        <hot-sell-list />
    	<index-weeklytrip />
    </div>
</template>

<script>
import header from "./Header.vue"; //局部组件
import swiper from './BannerSwiper.vue';
import iconSwiper from "./IconSwiper.vue";
import hotSellList from './HotSellList.vue';
import weeklyTrip from "./weeklyTrip.vue";
import activity from "./activity.vue"; //获取组件

export default {
  components:{
        "index-header": header,
        "index-banner-swiper": swiper,
        "hot-sell-list": hotSellList,
        "index-weeklytrip":weeklyTrip,
        "index-activity": activity,
        "index-icon-swiper": iconSwiper
  }
}
</script>

<style scoped>
    .page{
        background: #f5f5f5;
    }
</style>
