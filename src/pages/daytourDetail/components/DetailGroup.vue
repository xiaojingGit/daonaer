<template>
    <div class="detail" ref="detail">
        <div class="tab-group detail-group" ref="tabsBar">
            <ul class="tabs" ref="tabList">
                <li class="tabs-item active" ref="tripTab" @click="toggleTripGroup">行程介绍</li>
                <li class="tabs-item" ref="costTab" @click="toggleCostGroup">费用说明</li>
                <li class="tabs-item" ref="useTab" @click="toggleUseGroup">使用说明</li>
            </ul>
        </div>
        <tourday-detail-trip-intro ref="trip"/>
        <tourday-detail-cost ref="cost"/>
        <tourday-detail-useintro ref="useintro"/>
    </div>
</template>

<script>

    import tripIntro from './TripIntro'
    import cost from './Cost'
    import useintro from './UseIntro'

    export default {
        components: {
            'tourday-detail-trip-intro': tripIntro,
            'tourday-detail-cost': cost,
            'tourday-detail-useintro': useintro,
        },
        mounted() {
            this.detailGroupEle = this.$refs.detail;
            this.tripEle = this.$refs.trip.$el;
            this.costEle = this.$refs.cost.$el;
            this.useintro = this.$refs.useintro.$el;
            this.tabItems = this.$refs.tabList.children;
            this.init();
            this.onScroll();
        },
        methods: {
            init() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop >= this.detailGroupEle.offsetTop) {
                    this.$refs.tabsBar.className = "tab-group detail-group fixed-top";
                }
            },
            toggleTripGroup(e) {
                let scrollTop = this.tripEle.offsetTop;
                document.documentElement.scrollTop ? document.documentElement.scrollTop = scrollTop : document.body.scrollTop = scrollTop;           
            },
            toggleCostGroup(e) {
                let scrollTop = this.costEle.offsetTop;
                document.documentElement.scrollTop ? document.documentElement.scrollTop = scrollTop : document.body.scrollTop = scrollTop;           
            },
            toggleUseGroup(e) {
                let scrollTop = this.useintro.offsetTop;
                document.documentElement.scrollTop ? document.documentElement.scrollTop = scrollTop : document.body.scrollTop = scrollTop;           
            },
            onScroll() {
                window.addEventListener("scroll", this.handleScroll.bind(this));
            },
            handleScroll() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                // debugger
                if(scrollTop >= this.detailGroupEle.offsetTop) {
                    this.$refs.tabsBar.className = "tab-group detail-group fixed-top";
                } else {
                    this.$refs.tabsBar.className = "tab-group detail-group";
                }

                if(scrollTop >= this.costEle.offsetTop - 200 && scrollTop <= this.useintro.offsetTop - 200) {
                    this.setActiveBar(this.$refs.costTab);
                }else if(scrollTop >= this.costEle.offsetTop - 200 && scrollTop >= this.useintro.offsetTop - 200) {
                    this.setActiveBar(this.$refs.useTab);
                }else {
                    this.setActiveBar(this.$refs.tripTab);
                }
                
            },
            setActiveBar(dom) {
                dom.className = "tabs-item active";
                for(let tabitem of this.tabItems) {
                    if(tabitem != dom) {
                        tabitem.className = "tabs-item";
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .detail {
        margin-top: .2rem;
    }
    .tab-group.fixed-top {
        position: fixed;
        top: .88rem;
        width: 100%;
        background: #fff;
        z-index: 9;
    }
    .tab-group {
        min-height: .6rem;
        background: #fff;
    }
    .tabs {
        display: flex;
        justify-content: space-around;
    }
    .tabs-item {
        width: 100%;
        height: .4rem;
        padding: .2rem 0;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
        text-align: center;
    }
    .tabs-item.active {
        color: #00afc7;
        border-bottom: .04rem solid #00afc7;
    }
</style>