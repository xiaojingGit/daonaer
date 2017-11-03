<template>
  	<div class="page">
    	<index-header />
    	<index-banner-swiper />
      <hot-sell-list />
    	<index-weeklytrip />
    </div>
</template>
<script>
import header from "./Header.vue"; //局部组件
import swiper from './BannerSwiper.vue';
import hotSellList from './HotSellList.vue';
import weeklyTrip from "./weeklyTrip.vue";
export default {
  components:{
      "index-header": header,
      "index-banner-swiper": swiper,
      "hot-sell-list": hotSellList,
      "index-weeklytrip":weeklyTrip
  }
}
</script>

<style scoped>
    .page{
        background: #f5f5f5;
    }
</style>
