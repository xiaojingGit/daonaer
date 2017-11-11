import { ADD_NUM, MINUS_NUM } from './type.js'

export default {
    state: {
        "num": 1
    },
    mutations: {
        [ADD_NUM](state) {
            state.num += 1;
        },
        [MINUS_NUM](state) {
            state.num -= 1;
        }
    }
}