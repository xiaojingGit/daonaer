<template>
    <div class="tour-detail-page">
        <div class="main-con">
            <tourday-detail-fixedtop />
            <tourday-detail-header />
            <tourday-detail-comments />
            <tourday-detail-tag />
            <tourday-detail-userComments />
            <tourday-detail-footer />
        </div>
    </div>
</template>

<script>

    import header from './components/Header'
    import comments from './components/ProductEval'
    import detailGroup from './components/DetailGroup'
    import userComments from './components/UserComments'
    import footer from './components/Footer.vue'
    import fixedtop from './components/FixedTop'

    import { GET_HEADER_INFO } from './type.js'

    export default {
        components: {
            "tourday-detail-header": header,
            "tourday-detail-comments": comments,
            'tourday-detail-tag': detailGroup,
            'tourday-detail-userComments': userComments,
            'tourday-detail-footer': footer,
            'tourday-detail-fixedtop': fixedtop
        },
        mounted() {
            this.$store.dispatch(GET_HEADER_INFO);
            this.onScroll();
        },
        methods: {
            onScroll() {
                window.addEventListener("scroll", (e) => {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                })
            }
        }
    }
</script>

<style scoped>
    .tour-detail-page{
        background: #f1f5f6;
    }
    .detail-group {
        margin-top: .2rem;
        padding: .01rem 0;
        background-color: #fff
    }
</style>