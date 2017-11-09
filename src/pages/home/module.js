import axios from 'axios';
import { SET_DATA, AJAX_GET_DATA } from './types.js';
export default {
    state: {
        swiperInfo: [],
        iconInfo: [],
        activity: [],
        hotlist: [],
        weeklyTrip: [],
        num: 4
    },
    mutations: {
        [SET_DATA](state, payload) {  //state是原来的数据 payload是新获取的数据
            state.swiperInfo = payload.data.data.swiperInfo;   //payload是ajax请求过来的数据
            state.iconInfo = payload.data.data.iconInfo;
            state.activity = payload.data.data.activityData;
            state.hotlist = payload.data.data.hotList;
            state.weeklyTrip = payload.data.data.weeklyTripList.splice(0, state.num);
        }
    },
    actions: {                          //处理异步的
        [AJAX_GET_DATA](context) {//context是actions里面的调用自己用的
          axios.get('../../static/index.json?city=北京')
              .then((response) => {
                  if(response.status == 200 ) {
                      context.commit(SET_DATA, response)  //改变mutations里面的数据,
                  }
              });
        }
    },
    getters: {

        listSwiperData (state) {
            const result = [];
            state.iconInfo.forEach((value, index) => {
            let page = Math.floor(index / 8);
                if( !result[page] ) {
                    result[page] = [];
                }
                result[page].push(value);
              })
              return result
        },

        ActivityDataImages (state) {
            return state.activity
        },

        HotSellListData (state) {
            return state.hotlist
        },

        WeeklyTripListData (state) {
            return state.weeklyTrip
        }

    }
}
