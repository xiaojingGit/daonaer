<template>
  	<div class="daytrip-list-pagination">
  		<div class="daytrip-pagination-con">
  			 <div class="daytrip-pagination">
  			 	<a class="daytrip-pagination-previous daytrip-pagination-buttom" :class="{'disabled-btn': pageNo === 1}" href="javascript:;" @click="minusNum">上一页</a>
  			 	<span class="daytrip-pagination-pagenum">{{pageNo}}/{{totalPageNum}}</span>
  			 	<a class="daytrip-pagination-next daytrip-pagination-buttom" :class="{'disabled-btn': pageNo === totalPageNum}" href="javascript:;" @click="addNum">下一页</a>
  			 </div>
  			 <div class="daytrip-pagination-txt">去哪儿门票</div>
  		</div>

  	</div>
</template>
<script>
	export default {
		props: ["ticketInfo", "pageSize"],
		data:function() {
			return{
				pageNo: 1,
				ticketData: []
			}	
		},
		computed: {
			totalPageNum() {
				return Math.ceil(this.$props.ticketInfo.length / this.$props.pageSize);
			}
		},
		methods: {
			addNum() {
				this.pageNo !== this.totalPageNum ? this.pageNo++ : "";
				this.$emit("pageChage", this.ticketData);
			},
			minusNum() {
				this.pageNo !== 1 ? this.pageNo-- : "";
				this.$emit("pageChage", this.ticketData);
			},
			initTicketData() {
				this.ticketData = this.$props.ticketInfo.slice((this.pageNo - 1) * this.pageSize, this.pageNo * this.pageSize);
				this.$emit("pageChage", this.ticketData);
			}
		},
		mounted() {
			this.initTicketData();
		},
		updated() {
			this.initTicketData();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.daytrip-list-pagination{
		padding: .2rem 0;
		color: #00afc7;
		line-height: .82rem;
		text-align: center;
	}
	.daytrip-pagination{
		height: .7rem;
		line-height: .7rem;
	}
	.daytrip-pagination-previous{
		background: #bdbdbd;
		color: #fff;
		border: 0;
	}
	.daytrip-pagination-buttom{
		display: inline-block;
		width: 1.4rem;
		border: .02rem solid #00afc7;
		background: #fff;
		color: #00afc7;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.daytrip-pagination-pagenum{
		color: #212121;
		line-height: .6rem;
		padding: 0 15px;
	}
	.daytrip-pagination-txt{
		padding-top: .2rem;
		line-height: .3rem;
		font-size: .3rem;
	}
	.disabled-btn {
		background: #bdbdbd;
		color: #fff;
		border: 0;
	}
</style>
