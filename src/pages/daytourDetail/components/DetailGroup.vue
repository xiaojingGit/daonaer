<template>
    <div class="detail" ref="detail">
        <div class="tab-group detail-group" :class="{'fixed-top': isFixed}">
            <div class="tabs">
                <a href="#tripCon" class="tabs-item" :class="{active: isActive === 1}">行程介绍</a>
                <a href="#costCon" class="tabs-item" :class="{active: isActive === 2}">费用说明</a>
                <a href="#useIntroCon" class="tabs-item" :class="{active: isActive === 3}">使用说明</a>
            </div>
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
        data() {
            return {
                isFixed: false,
                isActive: 1
            }
        },
        components: {
            'tourday-detail-trip-intro': tripIntro,
            'tourday-detail-cost': cost,
            'tourday-detail-useintro': useintro,
        },
        mounted() {
            this.detailGroupEle = this.$refs.detail;
            this.costEle = this.$refs.cost.$el;
            this.useintro = this.$refs.useintro.$el;
            this.init();
            this.onScroll();
        },
        methods: {
            init() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop >= this.detailGroupEle.offsetTop - 100) {
                    this.isFixed = true;
                }else {
                    this.isFixed = false;
                }
            },
            onScroll() {
                window.addEventListener("scroll", this.handleScroll);
            },
            handleScroll() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                
                if(scrollTop >= this.detailGroupEle.offsetTop - 100) {
                    this.isFixed = true;
                } else {
                    this.isFixed = false;
                }

                if(scrollTop >= this.costEle.offsetTop - 200 && scrollTop <= this.useintro.offsetTop - 200) {
                    this.isActive = 2;
                }else if (scrollTop >= this.costEle.offsetTop - 200 && scrollTop >= this.useintro.offsetTop - 200) {
                    this.isActive = 3;
                }else {
                    this.isActive = 1;
                }
                
            },
		    destroyed() {
			    window.removeEventListener("scroll", this.handleScroll);
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