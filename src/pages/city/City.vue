<template>
    <div class="city-page">
        <div class="city-page-bg"></div>
        <div class="city-con">
            <city-header />
            <city-container />
        </div>
    </div>
</template>

<script>
    import header from './components/Header'
    import container from './components/CityContainer'
    import { GET_CITY_DATA } from './type.js'

    import { mapActions } from 'vuex'

    export default {
        components: {
            'city-header': header,
            'city-container': container
        },
        mounted() {
            !this.$store.state.city.domesticCity.hotCity.length && this.getCityData();
        },
        methods: mapActions({
            getCityData(dispatch) {
                dispatch(GET_CITY_DATA);
            }
        })
    }
</script>

<style scoped>
    .city-page-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        z-index: 1;
    }
    .city-con {
        position: relative;
        z-index: 2;
    }
</style>