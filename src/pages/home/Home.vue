<template>
  <div>
    <index-header /> 
    </div>
  </div>
</template>
<script>
import header from "./Header.vue"; //局部组件 
export default {
  components:{
      "index-header": header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../iconfont/iconfont.css";
</style>
