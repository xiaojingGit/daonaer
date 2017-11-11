<template>
    <div class="traveller-box">
        <div v-for="(item, index) in travellerNum" class="traveller">
            <div class="intro-row border-bottom">
                <label class="row-field">游客{{index + 1}}</label>
                <input type="text" id="travellerName" placeholder="游客姓名" class="input-text">
            </div>
            <div class="intro-row border-bottom">
                <label class="row-field">手机号</label>
                <input type="text" id="travellerName" placeholder="请填写手机号" class="input-text">
            </div>
            <div class="intro-row border-bottom">
                <label class="row-field">身份证</label>
                <input type="text" id="travellerName" placeholder="请填写正确的身份证号" class="input-text">
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        computed: {
            travellerNum() {
                return this.$store.state.orderfill.num;
            }
        }
    }
</script>

<style scoped>
    .traveller-box {
        margin-bottom: 1rem;
    }
    .traveller {
        position: relative;
        margin: .2rem 0;
    }
    .intro-row {
        position: relative;
        overflow: hidden;
        min-height: .5rem;
        padding: .24rem;
        background: #fff;
    }
    .row-field {
        float: left;
        width: 1.6rem;
        color: #616161;
        font-size: .3rem;
        line-height: .5rem;
    }
    .input-text {
        height: .38rem;
        padding: .06rem 0;
        border: 0;
        font: normal .32rem/.38rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
        color: #212121;
        background: 0;
    }
    .border-bottom:after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
</style>