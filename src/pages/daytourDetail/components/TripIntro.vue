<template>
    <div class="trip-detail" id="tripCon">
        <div class="routesum">
            <div class="routesum-outter">
                <div class="routesum-inner">
                    <div class="routesum-item">
                        <span class="inline-block iconfont icon-jiaotong"></span>
                        <span class="inline-block routesum-title">交通</span>
                        <span class="inline-block routesum-content">汽车往返</span>
                    </div>
                    <div class="routesum-item">
                        <span class="inline-block iconfont icon-yongcan"></span>
                        <span class="inline-block routesum-title">用餐</span>
                        <span class="inline-block routesum-content">包含餐宿</span>
                    </div>
                </div>
            </div>
            <div class="trip-feature">
                <h3 class="trip-title">行程亮点</h3>
                <ul class="feature-list">
                    <li class="feature-item">
                        ★登八达岭长城，逛故宫，一天饱览两大“双遗”景点
                    </li>
                    <li class="feature-item">
                        ★品尝京城老字号庆丰包子；，坐拥北京绚烂的穹顶
                    </li>
                    <li class="feature-item">
                        ★专业导游陪同讲解，无任何强制购物和隐性消费
                    </li>
                </ul>
            </div>
            <div class="trip-arrange">
                <h3 class="trip-title arrange-title">行程安排</h3>
                <div class="arrange-detail">
                    <div class="arrange-item">
                        <span class="arrange-date">07:30</span>
                        <div class="arrange-route">
                            <div class="trip-point">
                                <span class="iconfont icon-didiantubiao"></span>
                                <router-link to="/daytourdetail" class="route-point">集合地点</router-link>
                                <p class="route-desc">
                                    北京市东城区人民英雄纪念碑(天安门广场人民英雄纪念碑的北侧（导游举橘红色“旭冉假期”导游旗）集合)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="arrange-item">
                        <span class="arrange-date">08:30</span>
                        <div class="arrange-route">
                            <div class="trip-point">
                                <span class="iconfont icon-tubiaozhizuomoban"></span>
                                <router-link to="/daytourdetail" class="route-point">故宫博物院</router-link>
                                <p class="route-desc">
                                    前往【故宫博物院】，赠送游览珍宝馆。（游览时间：约2.5小时）配备每人一台无线耳麦，让您能在100米内清晰聆听到导游的讲解，请妥善保管，游览完毕后归还到导游处
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="arrange-item">
                        <span class="arrange-date">08:30</span>
                        <div class="arrange-route">
                            <div class="trip-point">
                                <span class="iconfont icon-zhongbiao"></span>
                                <router-link to="/daytourdetail" class="route-point">返程</router-link>
                                <p class="route-desc">
                                    行程结束后将您送回【鸟巢·水立方】自由活动和散团
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trip-arrange-more">
                <router-link to="/daytourdetail" class="link-morepro-intro">查看更多产品介绍</router-link>
            </div>
            <div class="trip-map">
                <trip-map :position="position"/>
            </div>
        </div>
    </div>
</template>

<script>

    import map from './Map'

    export default {
        computed: {
            position() {
                return this.$store.state.tourday.mapInfo.position
            }
        },
        components: {
            'trip-map': map
        }
    }
</script>

<style scoped>
    @import "../css/tripintro.css";
</style>