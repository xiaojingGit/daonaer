<template>
  	<div>
    	<index-header />
    	<index-banner-swiper />
      <index-activity />
    </div>
</template>
<script>
import header from "./Header.vue"; //局部组件
import swiper from './BannerSwiper.vue';
import activity from "./activity.vue"; //获取组件
export default {
  components:{
      "index-header": header,
      "index-banner-swiper": swiper,
      "index-activity": activity
  }
}
</script>

<style scoped>

</style>
