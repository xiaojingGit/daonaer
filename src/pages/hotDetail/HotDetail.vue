<template>
  	<div class="hotDetail-page">
    	<hot-header :imgList = "imgList" />
        <hot-base-info />
        <hot-comment />
        <hot-notice />
        <hot-recommendation />
        <hot-tickets-list :ticketsList="ticketsList" />
        <hot-user-comments />
        <hot-other-attractions :otherAttractions = "otherAttractions" />
    </div>
</template>

<script>
import HotHeader from './components/HotHeader'
import BaseInfo from './components/BaseInfo'
import Comment from './components/Comment'
import Notice from './components/Notice'
import Recommendation from './components/Recommendation'
import TicketsList from './components/TicketsList'
import UserComments from './components/UserComments'
import OtherAttractions from './components/OtherAttractions'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
    components:{
        'hot-header': HotHeader,
        'hot-base-info': BaseInfo,
        'hot-comment': Comment,
        'hot-notice': Notice,
        'hot-recommendation': Recommendation,
        'hot-tickets-list': TicketsList,
        'hot-user-comments': UserComments,
        'hot-other-attractions': OtherAttractions
    },
    computed: mapState ({
        ticketsList: (state) => {
            return state.hotDetail.todayTickets
        },
        otherAttractions: (state) => {
            return state.hotDetail.otherAttractions
        },
        imgList: (state) => {
            return state.hotDetail.imgList
        }
    }),
    mounted() {
        this.getHotDetail();
    },
    methods: mapActions ({
        getHotDetail: (dispatch) => {
            dispatch("getDataList")
        }
    })
}
</script>

<style scoped>
    .hotDetail-page{
        background: #f5f5f5;
    }
</style>
