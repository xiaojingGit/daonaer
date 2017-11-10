<template>
    <div class="city-options-hostList">
        <div class="hostlist-head">
            <span class="hostList-head-left">热门搜索</span>
            <span class="hostList-head-right" v-on:click="shuaxin">
                 <i class="hostList-head-right-icon iconfont icon-shuaxin"></i>
                <span class="hostList-head-right-change">换一批</span>
            </span>
        </div>
        <div class="city-hotsearch-con">
            <div class="city-hotsearch-top">
                <div class="city-hotsearch-top-left">
                    <i class="city-hotsearch-top-left-icon iconfont icon-fangzi"></i>
                </div>
                <div class="city-hotsearch-top-right" >
                    <ul class="city-hotsearch-top-right-list" ref="hotsearch">
                        <li class="city-hotsearch-top-right-item">香上公园</li>
                        <li class="city-hotsearch-top-right-item">故宫</li>
                        <li class="city-hotsearch-top-right-item">颐和园</li>
                        <li class="city-hotsearch-top-right-item">宋城千古情</li>
                        <li class="city-hotsearch-top-right-item">鼓浪屿</li>
                        <li class="city-hotsearch-top-right-item">恭王府</li>
                        <li class="city-hotsearch-top-right-item">鼓浪屿返回轮渡</li>
                        <li class="city-hotsearch-top-right-item">金坷垃8</li>
                        <li class="city-hotsearch-top-right-item">秩序册9</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬10</li>
                        <li class="city-hotsearch-top-right-item">金坷垃11</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬12</li>
                        <li class="city-hotsearch-top-right-item">金坷垃13</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬14</li>
                        <li class="city-hotsearch-top-right-item">金坷垃15</li>
                        <li class="city-hotsearch-top-right-item">金坷垃16</li>
                        <li class="city-hotsearch-top-right-item">秩序册17</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬18</li>
                        <li class="city-hotsearch-top-right-item">金坷垃19</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬20</li>
                        <li class="city-hotsearch-top-right-item">金坷垃21</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬22</li>
                        <li class="city-hotsearch-top-right-item">金坷垃23</li>
                        <li class="city-hotsearch-top-right-item">金坷垃24</li>
                        <li class="city-hotsearch-top-right-item">秩序册25</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬26</li>
                        <li class="city-hotsearch-top-right-item">金坷垃27</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬28</li>
                        <li class="city-hotsearch-top-right-item">金坷垃29</li>
                        <li class="city-hotsearch-top-right-item">阿斯蒂芬30</li>
                        <li class="city-hotsearch-top-right-item">金坷垃31</li>
                        <li class="city-hotsearch-top-right-item">金坷垃32</li>
                    </ul>
                </div>
            </div>
            <div class="city-hotsearch-bottom">
                <div class="city-hotsearch-bottom-left">
                    <i class="city-hotsearch-top-left-icon iconfont icon-tubiaozhizuomoban"></i>
                </div>
                <div class="city-hotsearch-bottom-right">
                    <ul class="city-hotsearch-bottom-right-list" ref="hhh">
                        <li class="city-hotsearch-top-right-item">广州</li>
                        <li class="city-hotsearch-top-right-item">三亚</li>
                        <li class="city-hotsearch-top-right-item">苏州</li>
                        <li class="city-hotsearch-top-right-item">上海</li>
                        <li class="city-hotsearch-top-right-item">成都</li>
                        <li class="city-hotsearch-top-right-item">天津</li>
                        <li class="city-hotsearch-top-right-item">重庆</li>
                        <li class="city-hotsearch-top-right-item">西安</li>
                        <li class="city-hotsearch-top-right-item">广州</li>
                        <li class="city-hotsearch-top-right-item">三亚</li>
                        <li class="city-hotsearch-top-right-item">苏州</li>
                        <li class="city-hotsearch-top-right-item">上海</li>
                        <li class="city-hotsearch-top-right-item">成都</li>
                        <li class="city-hotsearch-top-right-item">天津</li>
                        <li class="city-hotsearch-top-right-item">重庆</li>
                        <li class="city-hotsearch-top-right-item">西安</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
            abc: 0,
            bca: 0
        }
      },
      mounted() {
         
      },
      methods:{
          shuaxin() {
            if(this.abc <= -6.8) {
                this.abc=0;
                this.bca = 0;
            }else{
                this.abc-=1.7;
                this.bca-=0.9;
            }
              this.$refs.hotsearch.style.top=this.abc+"rem"
              this.$refs.hhh.style.top=this.bca+"rem"
          }
      }
    }
</script>

<style>
    .city-options-hostList{
          font-size: .28em;
          line-height: 1;
    }
    .hostlist-head {
          display: flex;
          height: .64rem;
          line-height: .64rem;
          padding: 0 .2rem;
          justify-content: space-between;
    }
    .hostList-head-left {
        font-size: .26rem;
        color: #888888;
        font-weight: 500;
    }
    .hostList-head-right {
        line-height: .64rem;
    }
    .hostList-head-right-icon {
          line-height:1 ;
          color: #00afc7;
    }
    .hostList-head-right-change {
        font-size: .26rem;
        color: #00afc7;
    }
    .city-hotsearch-con {
        background: #fff;
    }
    .city-hotsearch-top {
        position: relative;
        padding-left: 0.74rem;
        background-color: #fff;
        border-top: 1px solid #dce5e7;
    }
     .city-hotsearch-bottom {
        position: relative;
        padding-left: 0.74rem;
        background-color: #fff;
        border-top: 1px solid #dce5e7;
    }
    .city-hotsearch-top-left {
        position: absolute;
        left: 0;
        top: 0.3rem;
        width: .72rem;
        height: 1.26rem;
        text-align: center;
        overflow: hidden;
        border-right: 1px solid #dce5e7;
        line-height: 1.26rem;
    }
    .city-hotsearch-top-right {
        max-height: 1.8rem;
        overflow: hidden;
    }
    .city-hotsearch-top-right-list {
        zoom: 1;
        overflow: hidden;
        position: relative;
        left: 0;
        top: 0;
    }
    .city-hotsearch-top-right-item {
        float: left;
        height: .36rem;
        max-width: 2.89rem;
        line-height: .36rem;
        text-align: center;
        display: block;
        padding-left: .3rem;
        padding-right: .3rem;
        border-right: 1px dashed #c9cccd;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: .25rem;
        margin-bottom: .25rem;
        font-size: .28rem;
    }
    
    .city-hotsearch-bottom-left {
        position: absolute;
        left: 0;
        top: 0.3rem;
        width: .72rem;
        height: 0.62rem;
        text-align: center;
        overflow: hidden;
        border-right: 1px solid #dce5e7;
        line-height: 0.62rem;
    }
    .city-hotsearch-bottom {
        position: relative;
        padding-left: 0.74rem;
        background-color: #fff;
        border-top: 1px solid #dce5e7;
    }
    .city-hotsearch-bottom-right {
      overflow: hidden;
      max-height: 0.9rem;
    }
    
    .city-hotsearch-bottom-right-list {
          position: relative;
          
    }
    /* 设置两个icon图片的大小 */
    .city-hotsearch-top-left-icon {
        font-size: 0.28rem;
        color: #ccc;
    }
</style>
