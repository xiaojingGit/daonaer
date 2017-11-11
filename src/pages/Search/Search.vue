<template>
  	<div class="city">
        <div class="bg-fixed"></div>
        <div class="con">
            <city-header />
            <city-options />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import header from './components/cityHeader'
import option from './components/cityOptions'
export default {
    components:{
          "city-header": header,
          "city-options": option,
    }
}
</script>

<style scoped>
    .bg-fixed {
      position: fixed;
      width: 100%;
      height: 100%;
      background: #f5f5f5;
      z-index: 1;
    }
    .con {
        position: relative;
        z-index: 10;
    }
</style>
