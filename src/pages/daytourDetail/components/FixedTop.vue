<template>
    <div class="hide-top" v-bind:style="{opacity : opacityValue}" >
        <router-link to="/list" class="goback-link">
            <span class="iconfont icon-fanhui"></span>
        </router-link>
        <h1 class="main-title">故宫</h1>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                opacityValue : 0
            }
        },

        mounted() {
            this.initOpacity();
            this.onScroll();
        },
        
        methods: {
            initOpacity() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.opacityValue = 1 / 200 * scrollTop;
            },
            onScroll() {
                window.addEventListener("scroll", this.handleScroll);
            },
            handleScroll() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    this.opacityValue = 1 / 200 * (scrollTop <= 200 ? scrollTop : 200);
            }
        },
		destroyed() {
			window.removeEventListener("scroll", this.handleScroll);
		}
    }
</script>

<style scoped>
    .hide-top {
        position: fixed;
        display: block;
        top: 0px;
        left: 0px;
        width: 100%;
        height: .88rem;
        background: #00bcd4;
        opacity: 1;
        z-index: 91;
    }
    .goback-link {
        position: absolute;
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .36rem;
        color: #fff;
    }
    .main-title {
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
    }
</style>