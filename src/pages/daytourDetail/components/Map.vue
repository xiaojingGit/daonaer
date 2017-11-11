<template>
    <div class="map-container">
        <el-amap :zoom="zoom" :center="center"></el-amap>
    </div>
</template>

<script>

    export default {
        props: ["position"],
        data() {
            return {
                zoom: 15,
                center: this.$props.position
            }
        }
    }
</script>

<style scoped>
    .map-container {
        height: 100%;
    }
</style>