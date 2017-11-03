<template>
  	<div>
    	<index-header />
    	<index-banner-swiper />
    	<index-weeklytrip />
    </div>
</template>
<script>
import header from "./Header.vue"; //局部组件
import swiper from './BannerSwiper.vue';
import weeklyTrip from "./weeklyTrip.vue";
export default {
  components:{
      "index-header": header,
      "index-banner-swiper": swiper,
      "index-weeklytrip":weeklyTrip
  }
}
</script>

<style scoped>

</style>
