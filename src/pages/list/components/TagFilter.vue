<template>
  	<div class="daytrip-tagfilter-wrapper">
  		<div class="daytrip-tagfilter-container" :class="{'daytrip-tagfilter-unfold':isAction,'daytrip-tagfilter-fixed':isFixed}" ref="top">
  			<div class="daytrip-tagfilter-list" ref="wrapper" >
  				<ul class="daytrip-tagfilter-inner clearfix" :class="{'changeWidth':isWidth}">
  					<li class="daytrip-tagfilter-item" v-for="item in tagFilterInfo"  ref="li">
  						<span class="daytrip-tagfilter-name">{{item.tagname}}</span>
  					</li>
  				</ul>
  			</div>
  			<div class="daytrip-tagfilter-outer">
  				<h3 class="daytrip-tagfilter-title" v-show="isShow">
  					游玩景点
  					<span class="daytrip-tagfilter-subtitle">(可多选)</span>
  				</h3>
  			</div>
  			<div class="daytrip-tagfilter-expand tagfilter-expand-border" @click="toggle">
  				<span class="daytrip-tagfilter-iconfont iconfont" :class="{'icon-down-trangle':isA ,'icon-up':!isA}"></span>
  			</div>
  		</div>
  		<div class="daytrip-mask" v-show="isShow" @click="handleClick"></div>
  	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		props:["tagFilterInfo"],
		data:function(){
			return{
				isShow:false,
				isA:true,
				isAction:false,
				isWidth:false,
				isFixed:false,
				isClick:false,
				scrollTop:0
			}
		},
		mounted:function(){
			scrolls:this.$nextTick(() => { 
				this.scroll = new BScroll(this.$refs.wrapper, {
					scrollX: true,
   					bounce:true,
   					click: true
				}) 
			})
			window.addEventListener('scroll',this.handleFixed)		
		},
		methods:{
			toggle:function(){
				this.isShow = !this.isShow;
				this.isA = !this.isA;
				this.isAction = !this.isAction;
				this.isWidth = !this.isWidth;
				if(!this.isClick){
					this.isClick=true;
					window.addEventListener('scroll', this.handleScroll);
					this.isShow = true;
					this.$nextTick(() => { 
						this.scroll = new BScroll(this.$refs.wrapper, {
							scrollY: true,
		   					bounce:true,
		   					click: true
						}) 
					})	
				}else{
					this.isClick=false;
					window.removeEventListener('scroll', this.handleScroll);
					this.isShow = false;
					this.scroll.destroy();
					this.scroll = null;
					this.scrolls;	
				} 
			},
			handleScroll:function(){
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
				const offsetTop = this.$refs.top.offsetTop;
				var bottomBar = document.querySelector(".daytrip-bottom-fadein");
				bottomBar.style.transform = "translateY(0)";
				if(scrollTop > offsetTop){
					this.isFixed = true;
				}else{
					this.isFixed = false;
				}
			},
			handleClick:function(){
				if(!this.isClick){
					this.isClick = true;
					this.isWidth = true;
					this.isShow = true;
					this.isAction = true;
					this.isA = false;
					window.addEventListener('scroll', this.handleScroll);
					this.$nextTick(() => { 
						this.scroll = new BScroll(this.$refs.wrapper, {
							scrollY: true,
		   					bounce:true,
		   					click: true
						}) 
					})	
				}else{
					window.removeEventListener('scroll', this.handleScroll);
					this.isClick = false;
					this.isWidth = false;
					this.isShow = false;
					this.isAction = false;
					this.isA = true;
					this.scroll.destroy();
					this.scroll = null;
					this.scrolls;
				} 
			},
			handleFixed:function(){
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
				if(scrollTop > this.scrollTop){
					this.isFixed = false;
				}else{
					this.isFixed = true;
					if(scrollTop <= 88){
						this.isFixed = false;
					}	
				}
				this.scrollTop = scrollTop;
			},
			destroyed:function(){
				window.removeEventListener('scroll', this.handleFixed);
				window.removeEventListener('scroll', this.handleScroll);
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.daytrip-tagfilter-wrapper{
		height: .8rem;
	}
	.daytrip-tagfilter-container{
		position: relative;
		z-index: 2;
	}
	.daytrip-tagfilter-container{
		background:#e5e7e8;
	}
	.daytrip-tagfilter-container::before{
		content: " ";
		overflow: hidden;
		position: absolute;
		border-bottom:1px solid #eaeaea;
		border-bottom-color: #d7dbde;
		transform-origin: 0 100%;
		left: 0;
		width: 100%;
		height: 1px;
		bottom:0;
	}
	.daytrip-tagfilter-list{
		overflow: hidden;
		margin-right: .6rem;
		padding:.08rem .12rem;
		height: .68rem;
		max-height:6rem;
	}
	.daytrip-tagfilter-inner{
		width:2700px;
	}
	.daytrip-tagfilter-item{
		position: relative;
		float: left;
		padding:.04rem .08rem;
	}
	.daytrip-tagfilter-name{
		display: block;
		padding: 0 .22rem;
		background: #fff;
		color: #212121;
		font-size: .26rem;
		line-height: .56rem;
		border-radius:.04rem;
	}
	.daytrip-tagfilter-expand{
		position: absolute;
		z-index: 3;
		top: 0;
		right: 0;
		width: .8rem;
		height: .78rem;
		background: #e5e7e8;
	}
	.daytrip-tagfilter-iconfont{
		display: block;
		color: #aab2b7;
		font-size: .5rem;
		line-height: .78rem;
		text-align: center;
		transform-origin: 50% 50%;
	}
	.tagfilter-expand-border::before{
		content: " ";
		overflow: hidden;
		position: absolute;
		border-left:1px solid #d7dbde;
		transform: scaleX(.5);
		left: 0;
		transform-origin:0 0;
		top: 0;
		width: 1px;
		height: 100%;
	}
	.daytrip-tagfilter-title{		
		position: relative;
		z-index: 3;
		color: #212121;
		font-size: .28rem;
		line-height: .8rem;
		text-indent: .2rem;
	}
	.daytrip-tagfilter-subtitle{
		font-size: .24rem;
		padding-left: .1rem;
	}
	.daytrip-tagfilter-unfold .daytrip-tagfilter-list{
		box-sizing: border-box;
		position: absolute;
		top: .8rem;
		left: 0;
		margin-right: 0;
		width: 100%;
		height: auto;
		background:#e5e7e8;
	}
	.changeWidth{
		width:auto;
	}
	.daytrip-tagfilter-fixed{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	.daytrip-mask{
		width: 100%;
		background: rgba(0,0,0,0.45);
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		margin-top:.8rem;
		height: 100%;
	}
</style>