<template>
    <ul class="letter-list">
        <li v-for="(item, key) in cityList" class="letter-item">
            <a href="javascript:void(0)" class="letter-link" @click="goPoint('#'+suffix+'-'+key)">{{key}}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ["cityList", "suffix"],
        methods: {
            goPoint(id) {
                const offsetTop = document.querySelector(id).offsetTop;
                document.documentElement ? document.documentElement.scrollTop = offsetTop : document.body.scrollTop = offsetTop;
            }
        }
    }
</script>

<style scoped>
    .letter-list {
        position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        padding: .3rem 0;
    }
    .letter-item {
        width: 16.66%;
        line-height: .9rem;
        font-size: .28rem;
        text-align: center;
        float: left;
        position: relative;
        z-index: 10;
        color: #212121;
    }
    .letter-item .letter-link {
        color: #212121;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .28rem;
    }
</style>