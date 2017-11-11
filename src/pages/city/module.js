import axios from 'axios'
import { GET_CITY_DATA, CHANGE_CITYTYPE_DEFAULT, CHANGE_CITY_DEFAULT } from './type'

export default {
    state: {
        defaultCityType: "domestic",
        defaultCity: "北京",
        domesticCity: {
            hotCity: [],
            allCity: {}
        },
        foreignCity: {
            hotCity: [],
            allCity: {}
        }
    },
    actions: {
        [GET_CITY_DATA](context) {
            axios.get("/static/city.json")
                .then((response) => {
                    context.commit(GET_CITY_DATA, response);
                })
        }
    },
    mutations: {
        [GET_CITY_DATA](state, payload) {
            state.domesticCity = payload.data.data.domesticCity;
            state.foreignCity = payload.data.data.foreignCity;
        },
        [CHANGE_CITYTYPE_DEFAULT](state, payload) {
            state.defaultCityType = payload.cityType;
        },
        [CHANGE_CITY_DEFAULT](state, payload) {
            state.defaultCity = payload.city;
        }
    }
}