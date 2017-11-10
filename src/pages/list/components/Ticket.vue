<template>
  	<div class="daytrip-ticket-wrapper">
  		<ul class="daytrip-ticket-list">
  			<div v-for="(items,index) in ticketInfo" :key="index">
  			<li class="daytrip-ticket-item" v-for="item in items" :key="item.id">
  				<div class="daytrip-ticket-imgcon">
  					<img class="daytrip-ticket-img" v-lazy="item.imgsrc">
  					<span class="daytrip-ticket-bookingflag">
  						<span class="daytrip-ticket-bookingtext">可定明日</span>
  					</span>
  				</div>
  				<div class="daytrip-ticket-productinfo">
  					<h4 class="daytrip-ticket-productname daytrip-ellipsis">{{item.title}}</h4>
  					<div class="daytrip-ticket-taglist">
  						<div class="daytrip-ticket-tagitem ticket-tagitem-firstcolor">北京出发</div>
  						<div class="daytrip-ticket-tagitem">无自费</div>
  						<div class="daytrip-ticket-tagitem">无购物</div>
  					</div>
  					<div class="daytrip-ticket-cashback">
  						<span class="daytrip-ticket-cashitem">
  							赠券
  						</span>
  					</div>
  					<div class="daytrip-ticket-priceinfo">
  						<span class="daytrip-ticket-qunarprice">
  							&yen;
  							<em>{{item.price}}</em>
  						</span>
  						<span class="daytrip-ticket-priceflg">起</span>
  					</div>
  					<div class="daytrip-ticket-moreinfo">
  						<div class="daytrip-ticket-soldnum">
  							已售{{item.soldnum}}
  						</div>
  					</div>
  				</div>
  				<router-link class="daytrip-ticket-link" to="/daytourdetail">{item.title}</router-link>
  			</li>
  			</div>
  		</ul>
  	</div>
</template>
<script>
	export default {
		// props:["ticketInfo"],
		computed:{
			ticketInfo:function(){
				//console.log(this.$store.state.list.ticketInfo)
				const result = [];
				this.$store.state.list.ticketInfo.forEach((value,index)=>{
					let page = Math.floor(index/5);
					if(!result[page]){
						result[page] = [];
					}
					result[page].push(value);
				})
				//console.log(result)
				return result;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.daytrip-ticket-list{
		background: #fff;
	}
	.daytrip-ticket-item{
		display: flex;
		position: relative;
	}
	.daytrip-ticket-imgcon{
		margin:.2rem;
	}
  	.daytrip-ticket-imgcon{
  		position: relative;
  		width:1.6rem;
  		height: 1.6rem;
  	}
  	.daytrip-ticket-img{
  		width: 100%;
  		height: 100%;
  	}
  	.daytrip-ticket-bookingflag{
		position: absolute;
		left: -.04rem;
		top: -.04rem;
		height: .24rem;
		padding: .02rem;
		background: #00bcd4;
		color: #fff;
		line-height: .24rem;
  	}
  	.daytrip-ticket-bookingtext{
  		display: block;
  		font-size: .24rem;
  		transform: scale(.83);
  	}
  	.daytrip-ticket-bookingflag::after{
		content: "";
		position: absolute;
		top: 0;
		right:-.1rem;
		width:0;
		height:0;
		border-top:.14rem solid #00bcd4;
		border-bottom:.14rem solid #00bcd4;
		border-right:.1rem solid transparent;
  	}
  	.daytrip-ticket-productinfo{
  		position: relative;
		padding: .2rem .2rem .2rem 0;
		height: 1.6rem;
		overflow: hidden;
		flex: 1;
		border-bottom:1px solid #eaeaea;
  	}
  	.daytrip-ticket-productname{
  		font-size: .3rem;
  		line-height: .36rem;
  	}
  	.daytrip-ellipsis{
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
  	}
  	.daytrip-ticket-taglist{
		position: relative;
		top: .06rem;
		overflow: hidden;
		max-height: .58rem;
		margin-right: 1rem;
		padding-top: .06rem;
		line-height: .24rem;
		font-size: 0;
  	}
	.daytrip-ticket-tagitem{
		display: inline;
		padding: 0 .1rem;
		font-size: .24rem;
		color: #616161;
		border-left:1px solid #eaeaea;
	}
	.ticket-tagitem-firstcolor{
		color: #00bcd4;
		border-left:0;
	}
	.daytrip-ticket-cashback{
		position: absolute;
		right: .2rem;
		top: .9rem;
		color: #ff1200;
		font-size: 0;
	}
	.daytrip-ticket-cashitem{
		display: inline-block;
		width: .64rem;
		height: .32rem;
		font-size: .24rem;
		line-height: .32rem;
		border:1px solid #ff6b62;
		text-align: center;
		transform: scale(.83);
		transform-origin: 0 0;
	}
	.daytrip-ticket-priceinfo{
		position: absolute;
		right: .2rem;
		bottom: .48rem;
		height: .32rem;
		line-height: .32rem;
		color: #9e9e9e;
		text-align: right;
	}
	.daytrip-ticket-qunarprice{
		font-size: .22rem;
		font-weight: bold;
		color: #ff8300;
	}
	.daytrip-ticket-qunarprice em{
		font-size: .32rem;
		padding-left: .04rem;
	}
	.daytrip-ticket-priceflg{
		font-size: .24rem;
		padding-left: .02rem;
	}
	.daytrip-ticket-moreinfo{
		position: absolute;
		left: -.1rem;
		bottom: .2rem;
		width: 100%;
		font-size: 0;
		color: #9e9e9e;
	}
	.daytrip-ticket-soldnum{
		padding: 0 .1rem;
		font-size: .22rem;
	}
	.daytrip-ticket-link{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		opacity: 0;
	}
</style>
