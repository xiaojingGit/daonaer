<template>
  	<header class="mp-header">
  		<a class="mp-header-left iconfont icon-fanhui" href="/"></a>
  		<div class="mp-header-title" >
	  		<input type="text" name="keyword" id="search-input-bind" value="一日游" class="mp-search-input">
	  		<a class="mp-search-delete" id="search-form-delete"></a>
  		</div>
  		<span class="mp-header-right" >
			<a data-search="submit" class="mp-search-submit" rel="nofollow" id="search-form-submit">搜索</a>
  		</span>
  	</header>
</template>
<script>
	export default {

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mp-header{
	position: relative;
	display: flex;
	height: .88rem;
	background:#00bcd4;
	z-index: 2;
}
.mp-header-left{
	display: inline-block;
	padding:0 .2rem;
	width:.4rem;
	font-size: .36rem;
	color: #fff;
	line-height: .88rem;
}
.mp-header-title{
	position: relative;
	flex:1;
	height: .6rem;
	margin:.14rem 0;
	background:#fff;
	line-height: .6rem;
	border-radius: .06rem;
	padding:0 .6rem 0 .2rem;
}
.mp-search-input{
	position: relative;
	display: block;
	width: 100%;
	height: .4rem;
	line-height: .4rem;
	padding: .1rem 0;
	border: 0;
	font-family: "Microsoft Yahei",Arial;
	font-size: .28rem;
	border-radius: .06rem;
}
.mp-search-delete{
	display: none;
    position: absolute;
    top: .04rem;
    right: 0;
    width: .58rem;
    height: .58rem;
    background: url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .1rem no-repeat;
    background-size: 3rem 3rem;
}
.mp-header-right{
	display: inline-block;
	height: .88rem;
	line-height: .88rem;
	padding: 0 .1rem;
	text-align: center;
}
.mp-search-submit{
	display: inline-block;
	width: .74rem;
	margin-right: .04rem;
	color: #fff;
	font-size: .28rem;
}
</style>
