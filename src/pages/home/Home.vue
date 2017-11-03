<template>
  	<div>
    	<index-header />
    	<index-banner-swiper />
        <index-icon-swiper />
    </div>
</template>
<script>
import header from "./Header.vue"; //局部组件
import swiper from './BannerSwiper.vue';
import iconSwiper from "./IconSwiper.vue";
export default {
    components:{
        "index-header": header,
        "index-banner-swiper": swiper,
        "index-icon-swiper": iconSwiper
    }
}
</script>

<style scoped>

</style>
