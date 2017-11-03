<template>
  	<div class="home-weeklyTrip-wrapper">
  		<h2 class="home-weeklyTrip-title">周末去哪儿</h2>
  		<div class="home-weeklyTrip-list">
  			<div class="home-weeklyTrip-item" v-for="item in weeklyTripList" :key="item.link">
  				<a class="home-weeklyTrip-itemLink" :href="item.link">
  					<div class="home-weeklyTrip-itemImg"">
  						<img :src="item.img" alt="乐山必游TOP10"/>
  					</div>
  					<div class="home-weeklyTrip-info">
  						<p class="home-weeklyTrip-infoName">{{item.infoName}}</p>
						<p class="home-weeklyTrip-infoDesc">{{item.infoDesc}}</p>
  					</div>
  				</a>
  			</div>
  		</div>
  	</div>
</template>
<script>
	export default {
	 	data() {
      		return {
				weeklyTripList:[{
					id:1,
					link:"/",
					img:"http://img1.qunarzz.com/sight/source/1505/44/5251f239d3456.jpg_r_640x214_88ab6a42.jpg",
					infoName:"乐山必游TOP10",
					infoDesc:"坐竹排看大佛，还有这么多好玩的地方"
				},{
					id:2,
					link:"/",
					img:"http://img1.qunarzz.com/sight/source/1505/44/5251f239d3456.jpg_r_640x214_88ab6a42.jpg",
					infoName:"乐山必游TOP10",
					infoDesc:"坐竹排看大佛，还有这么多好玩的地方"
				}]
			}
      	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home-weeklyTrip-title{
		height: .8rem;
	    padding-left: .26rem;
	    line-height: .8rem;
	    color: #212121;
	}
	.home-weeklyTrip-item{
		position: relative;
   		margin-bottom: .1rem;
    	background: #fff;
	}
	.home-weeklyTrip-itemLink{
		width: 100%;
		height: 100%;
		display: block;
	}  
	.home-weeklyTrip-itemImg{
		width: 100%;
		overflow: hidden;
		height: 0;
		padding-bottom: 37.4375%;
	}
	.home-weeklyTrip-itemImg img{
		width:100%;
	}
	.home-weeklyTrip-info{
		padding: .14rem .2rem .2rem .2rem;
	}
	.home-weeklyTrip-infoName{
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .48rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.home-weeklyTrip-infoDesc{
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .42rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
</style>
