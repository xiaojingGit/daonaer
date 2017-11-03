<template>
    <div class="icon-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <ul class="icon-pag">
                    <li v-for="datalist1 in dataLists1" :key="datalist1.id" class="icon-list">
                        <router-link :to="datalist1.linkTo">
                            <div class="icon-img-con">
                                <img :src="datalist1.imgUrl" class="icon-img"/>
                            </div>
                            <div class="icon-keywords">{{datalist1.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </swiper-slide>
            <swiper-slide>
                <ul class="icon-pag">
                    <li v-for="datalist2 in dataLists2" :key="datalist2.id"  class="icon-list">
                        <router-link :to="datalist2.linkTo">
                            <div>
                                <img :src="datalist2.imgUrl" class="icon-img"/>
                            </div>
                            <div class="icon-keywords">{{datalist2.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </swiper-slide>
        
            <div class="icon-swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper';
	export default {
    	data() {
      		return {
        		swiperOption: {
		          	direction: 'horizontal',
		          	autoHeight: true,
		          	pagination: '.icon-swiper-pagination',
					bulletClass: 'icon-bullet',
					bulletActiveClass: 'icon-bullet-active',
		          	observeParents: true,
        		},
                dataLists1:[{
                    linkTo: "",
                    id:1,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    title: "景点门票"
                }, {
                    linkTo: "",
                    id:2,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
                    title: "动植物园"
                }, {
                    linkTo: "",
                    id:3,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
                    title: "故宫"
                }, {
                    linkTo: "",
                    id:4,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
                    title: "一日游"
                }, {
                    linkTo: "",
                    id:5,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
                    title: "必游榜单"
                }, {
                    linkTo: "",
                    id:6,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png",
                    title: "秋色美"
                }, {
                    linkTo: "",
                    id:7,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
                    title: "游乐场"
                }, {
                    linkTo: "",
                    id:8,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
                    title: "泡温泉"
                }],
                dataLists2:[{
                    linkTo: "",
                    id:9,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
                    title: "城市观光"
                }, {
                    linkTo: "",
                    id:10,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png",
                    title: "玻璃栈道"
                }, {
                    linkTo: "",
                    id:11,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
                    title: "名胜古迹"
                }, {
                    linkTo: "",
                    id:12,
                    imgUrl: "https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png",
                    title: "周边游"
                }, {
                    linkTo: "",
                    id:13,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
                    title: "自然风光"
                }, {
                    linkTo: "",
                    id:14,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png",
                    title: "北水古镇"
                }, {
                    linkTo: "",
                    id:15,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png",
                    title: "景点讲解"
                }, {
                    linkTo: "",
                    id:16,
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
                    title: "全部"
                }]
      		}    
    	},
		components: {
			swiper: swiper,
			"swiper-slide": swiperSlide
		}
  	}
</script>

<style>
    .icon-swiper{
         height:3.8rem;
    }

	.icon-pag {
        visibility: visible;
        position: relative;
        overflow: hidden;
        padding: .1rem 0;
        background-color: #fff;
        overflow: hidden; 
        width: 100%;
        z-index: 2;
    }

    .icon-list{
        float: left;
        width: 25%;
        height: 1.3rem;
        padding-top: .3rem;
        text-align: center;
    }

    .icon-img-con{
        display: inline-block;
        width: .66rem;
        height: .66rem;
        text-align: center;
    }

    .icon-img{
        width: .66rem;
        height: .66rem;
        background: 0;
    }
    
    .icon-keywords{
        padding-top: .2rem;
        line-height: 1;
        width:100%;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
        color: #212121;
        font-size: .28rem;
        text-align: center;
        
    }

    .icon-swiper-pagination{
        width: 100%;
        text-align: center;
        background: #fff;
    }

    .icon-bullet{
        display: inline-block;
        margin: 0 4px;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background: rgba(144,144,144,0.8);
    }

    .icon-bullet-active{
        background: rgba(0,175,190,.8);
    }
        
        
</style>