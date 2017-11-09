<template>
  <div class="home-reserved-space">
      <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in swiperInfo" :key="item.id">
            <router-link :to="item.link">
                <div class="img-box">
                    <img class="swiper-img" :src="item.imgUrl"/>
                </div>
            </router-link>
          </swiper-slide>
          <div class="home-swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper';
	export default {
      props: ["swiperInfo"],
    	data() {
      		return {
        		swiperOption: {
		          	autoplay: 3000,
		          	direction: 'horizontal',
		          	autoHeight: true,
		          	pagination: '.home-swiper-pagination',
					      bulletClass: 'home-swiper-bullet',
					      bulletActiveClass: 'home-swiper-bullet-active',
		          	observeParents: true,
					      autoplayDisableOnInteraction: false
        		}
      		}
    	},
      components: {
        swiper: swiper,
        "swiper-slide": swiperSlide
      }
  	}
</script>

<style>
  .home-swiper-pagination {
      position: absolute;
      height: .2rem;
      z-index: 9;
      text-align: center;
  }
  .home-swiper-bullet {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      margin: 0 .08rem;
      border-radius: .1rem;
      background: rgba(255, 255, 255, 0.5);
  }
  .home-swiper-bullet-active {
      background: #fff;
  }
</style>

<style scoped>
  .home-reserved-space {
      height: 0;
      padding-bottom: 31.25%;
  }
	.img-box {
      width: 100%;
	}
	.swiper-img {
		  width: 100%;
	}

</style>
