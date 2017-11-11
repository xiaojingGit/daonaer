 import axios from 'axios'
 export default {
    state: {
        ticketsList:[],
        otherAttractions:[],
        imgList: [],
        commentsImg: []
    },
    mutations: {
        setdata(state, payload) {
            state.ticketsList = payload.ticketsList;
            state.otherAttractions = payload.othersAttractiona; 
            state.imgList = payload.imgList;
            state.commentsImg = payload.commentsImg;
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