<template>
  <div class="icon-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in listSwiperData" :key="item.id">
                <ul class="icon-pag">
                    <li v-for="innerItem in item" :key="innerItem.id" class="icon-list">
                        <router-link :to="innerItem.linkTo">
                            <div class="icon-img-con">
                                <img :src="innerItem.imgUrl" class="icon-img"/>
                            </div>
                            <div class="icon-keywords">{{innerItem.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </swiper-slide>
    
            <div class="icon-swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import { mapGetters } from 'vuex';
	export default {
    	data() {
      		return {
            swiperOption: {
              direction: 'horizontal',
              autoHeight: true,
              pagination: '.icon-swiper-pagination',
              bulletClass: 'icon-bullet',
              bulletActiveClass: 'icon-bullet-active',
              observeParents: true,
            }
         }
    	},

      computed: mapGetters(['listSwiperData']),
      
      components: {
            swiper,
            swiperSlide
          }
      }
</script>
<style>
    .icon-swiper-pagination{
        position: absolute;
        bottom: 0rem!important;
        left: 0;
        width: 100%;
        text-align: center;
        background: #fff;
    }

    .icon-bullet{
        display: inline-block;
        margin: 0 4px;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background: rgba(144,144,144,0.8);
    }

    .icon-bullet-active{
        background: rgba(0,175,190,.8);
    }
</style>

<style scoped>
    .icon-swiper{
        position: relative;
        height:3.8rem;
        background-color: #fff;
    }

	.icon-pag {
        visibility: visible;
        position: relative;
        overflow: hidden;
        padding: .1rem 0;
        overflow: hidden;
        width: 100%;
        height: 3.4rem;
        z-index: 2;
    }

    .icon-list{
        float: left;
        width: 25%;
        height: 1.3rem;
        padding-top: .3rem;
        text-align: center;
    }

    .icon-img-con{
        display: inline-block;
        width: .66rem;
        height: .66rem;
        text-align: center;
    }

    .icon-img{
        width: .66rem;
        height: .66rem;
        background: 0;
    }

    .icon-keywords{
        padding-top: .2rem;
        line-height: 1;
        width:100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #212121;
        font-size: .28rem;
        text-align: center;

    }

    


</style>
