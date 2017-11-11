<template>
  	<div class="daytrip-home">
    	<daytrip-header />
    	<daytrip-tagfilter :tagFilterInfo = "tagFilterInfo"/>
    	<daytrip-ticket :ticketInfo="ticketInfo" />
    	<daytrip-fadein />
    </div>
</template>
<script>
import header from './components/Header'
import tagfilter from './components/TagFilter'
import ticket from './components/ticket'
import fadein from './components/Fadein'
import axios from 'axios'
import {AJAX_GET_DATA} from './types.js'
import {mapState,mapActions} from 'vuex'
export default { 
	components:{
		"daytrip-header":header,
		"daytrip-tagfilter":tagfilter,
		"daytrip-ticket":ticket,
		"daytrip-fadein":fadein
	},
	computed:mapState({
		ticketInfo:(state) => {
			return state.list.ticketInfo
		},
		tagFilterInfo:(state) => {
			return state.list.tagFilterInfo			
		}
	}),
	mounted:function(){
		if(!this.ticketInfo.length && !this.tagFilterInfo.length){
			this.getDaytripData();
		}
	},
	methods:mapActions({
		getDaytripData:(dispatch) => {
			dispatch(AJAX_GET_DATA)
		}
	})
}
</script>	
<style scoped>
	.daytrip-home{
		background:#f5f5f5;
	}
</style>
