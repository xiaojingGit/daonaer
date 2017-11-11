<template>
    <div class="buynum-box">
        <div class="buynum-con">
            <label class="row-field">购买数量</label>
            <div class="num-con">
                <span class="minus-num" @click="handleMinusNum">—</span>
                <input type="text" class="num-input" :value="num"/>
                <span class="add-num" @click="handleAddNum">+</span>
            </div>
        </div>
    </div>
</template>

<script>

    import {ADD_NUM, MINUS_NUM} from '../type.js'

    export default {
        computed: {
            num() {
                return this.$store.state.orderfill.num;
            }
        },
        methods: {
            handleMinusNum() {
                this.$store.commit(MINUS_NUM);
            },
            handleAddNum() {
                this.$store.commit(ADD_NUM);
            }
        }
    }
</script>

<style scoped>
    .buynum-box {
        position: relative;
        margin: .2rem 0;
    }
    .buynum-con {
        position: relative;
        overflow: hidden;
        min-height: .5rem;
        padding: .3rem .2rem .3rem .2rem;
        background: #fff;
    }
    .row-field {
        float: left;
        width: 1.6rem;
        color: #616161;
        font-size: .3rem;
        line-height: .5rem;
    }
    .num-con {
        float: right;
        width: 1.87rem;
        height: .6rem;
        padding: .01rem;
        border: 1px solid #f0f0f0;
        line-height: .6rem;
        font-size: 0;
    }
    .minus-num, .add-num {
        position: relative;
        display: inline-block;
        top: .02rem;
        left: .02rem;
        width: .55rem;
        height: .55rem;
        line-height: .54rem;
        text-align: center;
        background: #f0f0f0;
        font-size: .32rem;
        font-weight: 900;
        color: #cad1d7;
    }
    .num-input {
        width: .6rem;
        height: .6rem;
        padding: 0 .06rem;
        border: 0 none;
        font: normal .28rem/.6rem arial;
        text-align: center;
        vertical-align: top;
    }
    .add-num {
        background: #00afc7;
        color: #fff;
    }
</style>