<template>
  	<div class="page">
        <index-header />
        <index-banner-swiper :swiperInfo="swiperInfo"/>
        <index-icon-swiper />
        <index-activity />
        <hot-sell-list />
        <index-weeklytrip />
    </div>
</template>

<script>
import header from './components/Header'
import swiper from './components/BannerSwiper'
import iconSwiper from './components/IconSwiper'
import hotSellList from './components/HotSellList'
import weeklyTrip from './components/weeklyTrip'
import activity from './components/Activity'
import axios from 'axios'
import { AJAX_GET_DATA } from './types.js'
import { mapState, mapActions } from 'vuex'
export default {

    components:{
          "index-header": header,
          "index-banner-swiper": swiper,
          "hot-sell-list": hotSellList,
          "index-weeklytrip":weeklyTrip,
          "index-activity": activity,
          "index-icon-swiper": iconSwiper
    },

    computed: mapState({
        swiperInfo: (state) => {
          return state.home.swiperInfo
        }
    }),

    mounted() {
        !this.swiperInfo.length && this.getHomeData();
    },

    methods: mapActions({
          getHomeData: (dispatch) => {
              dispatch(AJAX_GET_DATA)
          }
    })


}
</script>

<style scoped>
    .page {
        background: #f5f5f5;
    }
</style>
