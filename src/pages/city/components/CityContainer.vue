<template>
    <div class="city-container">
        <div class="mp-tab-con">
            <ul class="tab-list">
                <li class="tab-item" :class="{active: cityType === 'domestic'}" @click="toggleCity('domestic')">国内</li>
                <li class="tab-item" :class="{active: cityType === 'foreign'}" @click="toggleCity('foreign')">国际</li>
            </ul>
        </div>
        <div class="city-list-box" :class="{hidden: cityType !== 'domestic'}">
            <h2 class="hot-city-tit">热门城市</h2>
            <ul class="city-lists">
                <li v-for="item in hotDomesticCity" class="city-item">
                    <span class="city-link" @click="changeDefaultCity(item)">{{item}}</span>
                </li>
            </ul>
            <h2 class="hot-city-tit">字母排序</h2>
            <letter key="domesticCityLetter" :cityList="domesticCityList" suffix="domestic"/>
            <template v-for="(item, key) in domesticCityList">
                <h2 :id="'domestic-'+key" class="hot-city-tit">{{key}}</h2>
                <ul class="city-lists">
                    <li v-for="city in item" class="city-item">
                        <span class="city-link" @click="changeDefaultCity(city)">{{city}}</span>
                    </li>
                </ul>
            </template>
        </div>
        <div class="city-list-box" :class="{hidden: cityType !== 'foreign'}">
            <h2 class="hot-city-tit">热门城市</h2>
            <ul class="city-lists">
                <li v-for="item in hotForeignCity" class="city-item">
                    <span class="city-link" @click="changeDefaultCity(item)">{{item}}</span>
                </li>
            </ul>
            <h2 class="hot-city-tit">字母排序</h2>
            <letter key="foreignCityLetter" :cityList="foreignCityList" suffix="foreign"/>
            <template v-for="(item, key) in foreignCityList">
                <h2 :id="'foreign-'+key" class="hot-city-tit">{{key}}</h2>
                <ul class="city-lists">
                    <li v-for="city in item" class="city-item">
                        <span class="city-link" @click="changeDefaultCity(city)">{{city}}</span>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
    import letter from './Letter'
    import { CHANGE_CITYTYPE_DEFAULT, CHANGE_CITY_DEFAULT } from '../type.js'
    import { mapMutations } from 'vuex'

    export default {
        
        computed: {
            cityType() {
                return this.$store.state.city.defaultCityType;
            },
            hotDomesticCity() {
                return this.$store.state.city.domesticCity.hotCity;
            },
            domesticCityList() {
                return this.$store.state.city.domesticCity.allCity;
            },
            hotForeignCity() {
                return this.$store.state.city.foreignCity.hotCity;
            },
            foreignCityList() {
                return this.$store.state.city.foreignCity.allCity;
            }
        },

        methods: {
            toggleCity(str) {
                this.$store.commit({
                    type: CHANGE_CITYTYPE_DEFAULT,
                    cityType: str
                });
            },
            changeDefaultCity(city) {
                this.$store.commit({
                    type: CHANGE_CITY_DEFAULT,
                    city: city
                });
                this.$router.push("/");
            }
        },

        components: {
            letter: letter
        }
        
    }
</script>

<style scoped>
    .city-list-box.hidden {
        display: none;
    }
    .mp-tab-con {
        height: .4rem;
        line-height: .4rem;
        background-color: #00bcd4;
        padding: .2rem 1rem;
        color: #fff;
    }
    .tab-list {
        border: 1px solid #fff;
        border-radius: .03rem;
        zoom: 1;
        overflow: hidden;
    }
    .tab-item {
        width: 50%;
        float: left;
        text-align: center;
        background-color: #00bcd4;
        font-size: .28rem;
        color: #fff;
    }
    .tab-item.active {
        background-color: #fff;
        color: #00bcd4;
    }
    .hot-city-tit {
        font-size: .24rem;
        margin: .24rem .3rem;
    }
    .city-lists {
        position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
    }
    .city-lists:before {
        content: '';
        position: absolute;
        width: 33.33%;
        left: 33.33%;
        height: 100%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
    }
    .city-lists:after {
        content: '';
        position: absolute;
        width: 10%;
        left: 75%;
        height: 100%;
        border: 0;
    }
    .city-item {
        width: 33.33%;
        height: .9rem;
        line-height: .9rem;
        font-size: .28rem;
        text-align: center;
        border-bottom: .02rem solid #ddd;
        margin-bottom: -1px;
        float: left;
        position: relative;
        z-index: 10;
        color: #212121;
    }
    .city-link {
        color: #212121;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .28rem;
    }
</style>