 import axios from 'axios'
 export default {
    state: {
        todayTickets:[],
        otherAttractions:[],
        imgList: []
    },
    mutations: {
        setdata(state, payload) {
            state.todayTickets = payload.ticketsList;
            state.otherAttractions = payload.othersAttractiona; 
            state.imgList = payload.imgList;
        }
    },
    actions: {
        getDataList(context) {
            axios.get("../../static/hotDetail.json?palce=故宫")
            .then((res) => {
                context.commit("setdata", res.data.data)
            })
        }  
    },
    getters: {

    }
  }