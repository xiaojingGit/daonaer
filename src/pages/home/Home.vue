<template>
  	<div>
    	<index-header />
    	<index-banner-swiper />
    </div>
</template>
<script>
import header from "./Header.vue"; //局部组件
import swiper from './BannerSwiper.vue';
export default {
  components:{
      "index-header": header,
      "index-banner-swiper": swiper
  }
}
</script>

<style scoped>

</style>
