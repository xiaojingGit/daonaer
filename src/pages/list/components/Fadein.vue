<template>
  	<div class="daytrip-bottom-bar daytrip-bottom-fadein" ref="fadein" :style="{transform: translateY}">
  		<div class="daytrip-typefilter-outer">
  			<ul class="daytrip-typefilter daytrip-flexbox">
  				<li class="daytrip-typefilter-item daytrip-flexbox-layout">
  					<div class="daytrip-typefilter-icon iconfont icon-fenlei"></div>
  					<div class="daytrip-typefilter-name">全部分类</div>
  				</li>
  				<li class="daytrip-typefilter-item daytrip-flexbox-layout">
  					<div class="daytrip-typefilter-icon iconfont icon-shaixuan"></div>
  					<div class="daytrip-typefilter-name">筛选</div>
  				</li>
  				<li class="daytrip-typefilter-item daytrip-flexbox-layout">
  					<div class="daytrip-typefilter-icon iconfont icon-paixu"></div>
  					<div class="daytrip-typefilter-name">推荐排序</div>
  				</li>
  			</ul>
  		</div>
  	</div>
</template>
<script>
	export default {
		data() {
			return{
				translateY: "translateY(0)"
			}
		},
		mounted:function(){
			window.addEventListener('scroll',this.handleScroll)
		},
		methods:{
			handleScroll:function(){
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
				if(scrollTop > this.scrollTop){
					this.translateY = "translateY(100%)";
				}else{
					this.translateY = "translateY(0)";			
				}
				this.scrollTop = scrollTop;
			}
		},
		destroyed:function(){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.daytrip-bottom-bar{
		background:transparent none;
		z-index: 4;
	}
	.daytrip-bottom-fadein{
		transform: translateY(0);
	}
	.daytrip-bottom-bar{
		position: fixed;
		right: 0;
		bottom:0;
		left: 0;
		width:100%;
		transition: transform .3s ease-out;
	}
	.daytrip-typefilter-outer{
		position: relative;
		background:rgba(0,0,0,.8);
	}
	.daytrip-typefilter{
		text-align: center;
	}
	.daytrip-flexbox{
		display: flex;
	}
	.daytrip-typefilter-item{
		padding: .08rem .1rem 0;
		color: #fff;
	}
	.daytrip-flexbox-layout{
		flex:1;
	}
	.daytrip-typefilter-icon{
		display: inline-block;
		position: relative;
		height: .32rem;
		font-size: .32rem;
		vertical-align: top;
	}
	.daytrip-typefilter-name{
		overflow: hidden;
		height: .4rem;
		font-size: .24rem;
		line-height: .4rem;
	}
</style>
