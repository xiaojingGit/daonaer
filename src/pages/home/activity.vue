<template>
    <div>
        <ul class="activity-list">
            <li class="activity-item">
                <i class="activity-icon iconfont icon-dingwei"></i>定位失败
            </li>
            <li class="activity-item">
                <i class="activity-icon iconfont icon-earth"></i>5折泡温泉
            </li>
        </ul>

        <ul class="activity-img-list">
            <li class="activity-img-item">
                <img class="activity-item-img" src="http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png" />
            </li>
            <li class="activity-img-item">
                <img class="activity-item-img" src="http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png" />
            </li>
        </ul>
    </div>
</template>

<script>
  export default {

  }
</script>

<style>
    .activity-list {
        display: flex;
        width: 100%;
        border-top: 1px solid #f1f1f1;
        overflow: hidden;
    }
    .activity-item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50%;
        height: .98rem;
        line-height: .98rem;
        text-align: center;
        font-size: .28rem;
        color: #212121;
    }
    .activity-item:first-child {
        border-right: 1px solid #eaeaea;
    }
    .activity-icon {
        margin-right: .05rem;
        color: #616161;
        font-size: .32rem;
    }
    .activity-img-list {
        display: flex;
        overflow: hidden;
        margin-top: .2rem;
        width: 100%;
    }
    .activity-img-item {
        width: 50%;
        height: 1.4rem;
    }
    .activity-img-item:first-child {
        border-right: 1px solid #eaeaea;
    }
    .activity-item-img {
        width: 100%;
    }
</style>
