<template>
  	<header class="mp-header">
  		<a class="mp-header-left iconfont icon-fanhui"></a>
  		<div class="mp-header-title" >
	  		<a class="mp-linkarea" title="北京" href="/">
		  		<i class="mp-icon-search iconfont icon-sousuo"></i>
		  		<span class="mp-single-line">输入城市/景点/游玩主题</span>
	  		</a>
  		</div>
  		<div class="mp-header-right" >
  			<a href="/touch/toNewCityList.htm" title="城市选择" class="mp-linkarea">
	  			<span class="mp-nav-city">
	  			北京<i class="mp-iconfont"></i>
	  			</span>
  			</a>
  		</div>
  	</header>
</template>
<script>
	export default {
	 
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mp-header{
	height: .88rem;
	background:#00bcd4;
	display: flex;
}
.mp-header-left{
	font-size: .36rem;
	display: inline-block;
	color: #fff;
	line-height: .88rem;
	padding:0 .2rem;
	width:.4rem;
}
.mp-header-title{
	flex:1;
	height: .6rem;
	margin:.14rem 0;
	background:#fff;
	line-height: .6rem;
	border-radius: .06rem;
}
.mp-linkarea{
	color:#e4e7ea;
	display: inline-block;
}
.mp-icon-search{
	margin-left:.2rem;
}
.mp-single-line{
	margin-left:.1rem;
}
.mp-header-right{
	display: inline-block;
	line-height: .88rem;
	margin-right:.04rem;
	color: #fff;
}
.mp-nav-city{
	padding:0 .22rem;
	color: #fff;
}
.mp-iconfont{
	width: 0;
	height: 0;
	border-left: .13rem solid transparent;
    border-right: .13rem solid transparent;
    border-top: .13rem solid #fff;
    margin-left:.04rem;
    display: inline-block;
    line-height: .88rem;
}
</style>
