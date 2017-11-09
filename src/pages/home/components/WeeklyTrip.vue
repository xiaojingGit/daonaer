<template>
  	<div class="home-weeklyTrip-wrapper">
  		<h2 class="home-weeklyTrip-title">周末去哪儿</h2>
  		<div id="weeked-scroll-wrapper">
  			<div class="week-scroll-scroller">
		  		<div class="home-weeklyTrip-list">
		  			<div class="home-weeklyTrip-item" v-for="item in WeeklyTripListData" :key="item.link">
		  				<a class="home-weeklyTrip-itemLink" :href="item.link">
		  					<div class="home-weeklyTrip-itemImg">
		  						<img :src="item.img" alt="乐山必游TOP10"/>
		  					</div>
		  					<div class="home-weeklyTrip-info">
		  						<p class="home-weeklyTrip-infoName">{{item.infoName}}</p>
								<p class="home-weeklyTrip-infoDesc">{{item.infoDesc}}</p>
		  					</div>
		  				</a>
		  			</div>
		  			<div ref="loadNoticeEle" class="dataLogin">123</div>
		  		</div>
		  	</div>
  		</div>
  	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	require('../../../utils/iscroll-probe.js');
	export default {

	 	mounted() {
			this.createIscroll()
			this.flag = false;
			this.loading = false;
		},

	methods: {
			createIscroll() {
				this.myScroll = new IScroll('#weeked-scroll-wrapper', { probeType:3, mouseWheel: true });
				this.myScroll.on('scroll', this.handleScroll.bind(this))
				this.myScroll.on('scrollEnd', this.handleScrollEnd.bind(this))
			},

			handleScroll() {
				if(!this.loading) {
						if(this.myScroll.y < -500) {
							this.flag = true ;
							this.$refs.loadNoticeEle.style.display = "block";
						}else {
							this.$refs.loadNoticeEle.style.display = "none";
						}
					}
				},

			handleScrollEnd() {
				if(this.flag) {
					this.loading = true;
					this.flag = false;
					alert("加载成功")
				}
			}
		},

	updated() {
		this.myScroll.refresh();
	},

	computed: mapGetters(["WeeklyTripListData"])
}
</script>

<style scoped>
	.home-weeklyTrip-title {
		height: .8rem;
	    padding-left: .26rem;
	    line-height: .8rem;
	    color: #212121;
	}
	#weeked-scroll-wrapper {
		height: 11rem;
		overflow: hidden;
	}
	.home-weeklyTrip-item {
		position: relative;
   		margin-bottom: .1rem;
    	background: #fff;
	}
	.home-weeklyTrip-itemLink {
		width: 100%;
		height: 100%;
		display: block;
	}  
	.home-weeklyTrip-itemImg {
		width: 100%;
		overflow: hidden;
		height: 0;
		padding-bottom: 37.4375%;
	}
	.home-weeklyTrip-itemImg img {
		width:100%;
	}
	.home-weeklyTrip-info {
		padding: .14rem .2rem .2rem .2rem;
	}
	.home-weeklyTrip-infoName {
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .48rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.home-weeklyTrip-infoDesc {
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .42rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.dataLogin {
		display: none;
	}
</style>