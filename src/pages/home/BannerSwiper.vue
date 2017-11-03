<template>
	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide>
	    	<div class="img-box">
	    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/16/1d7693c6bd8abd02.png_640x200_43c308dd.png" alt="" />
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class="img-box">
		    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg" alt="" />
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class="img-box">
		    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" alt="" />
	    	</div>
	    </swiper-slide>
	    <div class="home-swiper-pagination"  slot="pagination"></div>
  	</swiper>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper';
	export default {
    	data() {
      		return {
        		swiperOption: {
		          	autoplay: 3000,
		          	direction: 'horizontal',
		          	autoHeight: true,
		          	pagination: '.home-swiper-pagination',
					bulletClass: 'home-bullet',
					bulletActiveClass: 'home-bullet-active',
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
	.img-box{
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img{
		width: 100%;
	}
	.home-swiper-pagination{
		position: absolute;
		height: .2rem;
		z-index: 9;
		text-align: center;
	}
	.home-bullet{
		display: inline-block;
		width: .2rem;
		height: .2rem;
		margin: 0 .08rem;
		border-radius: .1rem;
		background: #fff;	
	}
	.home-bullet-active{
		opacity: .5;
	}
</style>