<template>
    <div class="order-page">
        <div class="bg-fixed"></div>
        <div class="order-maincon">
            <order-fill-header />
            <order-fill-product-card :data="data"/>
            <order-fill-buynum/>
            <order-fill-traveller />
            <order-fill-commit-order :data="data"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import header from './components/Header'
    import productCard from './components/ProductCard'
    import buyNum from './components/BuyNum'
    import traveller from './components/Traveller'
    import commitOrder from './components/CommitOrder'

    export default {
        data() {
            return {
                pageId: "",
                data: {}
            }
        },
        mounted() {
            this.pageId = this.$route.query.id;
            axios.get("/static/bookinfo.json?id=" + this.pageId)
                .then((response) => {
                    this.data = response.data.data;
                })
        },
        components: {
            'order-fill-header': header,
            'order-fill-product-card': productCard,
            'order-fill-buynum': buyNum,
            'order-fill-traveller': traveller,
            'order-fill-commit-order': commitOrder
        }
    }
</script>

<style scoped>
    .bg-fixed {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        z-index: -1;
    }
    .order-maincon {
        position: relative;
        z-index: 1;
    }
</style>