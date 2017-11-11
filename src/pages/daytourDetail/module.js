import axios from 'axios'
import { GET_HEADER_INFO } from './type.js'

export default {
    state: {
        "headerInfo": {},
        "productEval": {},
        "mapInfo": {
            position: [116.397026,39.918058]
        }
    },
    actions: {
        // context是一个与store实例有相同属性和方法的context对象
        [GET_HEADER_INFO](context) {
            axios.get("/static/tourday.json")
            .then((res) => {
                context.commit(GET_HEADER_INFO, res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
    mutations: {
        [GET_HEADER_INFO](state, payload) {
            state.headerInfo = payload.headerInfo;
            state.productEval = payload.productEval;
            state.mapInfo = payload.mapInfo;
        }
    }
}