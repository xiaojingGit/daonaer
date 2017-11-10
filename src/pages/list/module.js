import axios from 'axios'
import {SET_DATA,AJAX_GET_DATA} from "./types.js"
export default{
	state: {
		ticketInfo:[],
		tagFilterInfo:[]
	},
	mutations: {
		[SET_DATA](state,payload){
			state.ticketInfo = payload.ticket;
			state.tagFilterInfo = payload.tagfilter;
		}
	},
	actions: {
		[AJAX_GET_DATA](context){
			axios.get('/static/daytrip.json?city=北京',{
				params: {
					pageNo:1,
					pageSize:5
				}
			})
			.then((res) => {
				context.commit(SET_DATA,res.data.data)
			})
		}
	}
}