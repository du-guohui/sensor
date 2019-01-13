<template>
  <div class="container">
    <view>
      <view class="pro-title-view">
        <img class="pro-title-image" src="https://application.idcxtech.com/image/2019-1-11/upload_f45ccdd3c23087510d49965215d30716.png">
      </view>

      <view class="pro" style="padding:3vw">
        <view class="pro-title-textView">
          <text class="pro-title-textA">U-SMART IDC THINGS\n</text>
          <text class="pro-title-textB">无间智能 数据中心 传感器</text>
        </view>

        <view class="pro-general-view">
          <text
            decode="true"
            class="pro-general-text"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安全、高效、节能、智慧数据中心，从无间智能开始。无间智能系列硬件产品，是由优世联合集团旗下工程院出品，专为智慧数据中心提供与物互联的智能前端感知。通过各种有线和无线的传感器将数据中心运行状态感知采集后，上传网关，高速传输至云端，并通过实时建模、大数据分析、AI深度学习以及可视化展示，让数据中心运营更安全、高效、简单与智能。</text>
        </view>

        <view class="product-view" style="margin-top:12vw">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_bff891911cdfe8ce87f1a2004a378694.jpg">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_749c3257c670c54d31e8ad790143ecc1.jpg">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_7ee146e2d9842e1b648784873d6ae850.jpg" style="height:62.18vw">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_a713b3e6ab6e97871e8ff6e5e460d957.jpg">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_63e20ff4c9121516fb7625a080753f41.jpg">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_7c903b5d0b8a74fba04ce45a69b65b91.jpg">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_5f609762857cabef9ac533557f4f351b.jpg" style="height:73.52vw">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_f6ab4c7e2caa4d8e530936d049a40db3.jpg">
          </view>
        </view>

        <view class="product-view">
          <view class="pro-image-view">
            <img class="pro-image" src="https://application.idcxtech.com/image/2019-1-11/upload_1816abe845f68c78610a58dddb7e168c.jpg" style="height:59.78vw">
          </view>
        </view>
      </view>
      <img class="bottomImg" src="https://application.idcxtech.com/image/2019-1-11/upload_6c59226381d2c4d385ab107e1c0e578d.png">
    </view>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>

.container{
  background: #ffffff;
}

.pro {
  padding: 5vw;
}

/* 头部view */
.pro-title-view {
  margin-bottom: 20px;
}

/* 头部图片 */
.pro-title-image {
  width: 100vw;
  height: 48.5vw;
}

/* 标题 */
.pro-title-textView {
  /* float: left; */
  font-size: 20px;
  margin-bottom: 20px;
}

.pro-title-textA {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #00ccff;
  font-size: 22px;
}

.pro-title-textB {
  /* font-family:sans-serif; */
  font-weight: normal;
  color: #172a88;
}
/* 开头介绍 */
.pro-general-view {
  font-family: "微软雅黑 light";
  color: #333333;
  margin-bottom: 20px;
  /* 两端对齐 */
  text-align: justify;
}

.pro-general-view .pro-general-text {
  font-size: 14px;
}

/* 产品标题 */
.pro-title-view {
  text-align: center;
  margin-bottom: 10px;
}

.pro-title-view .pro-title-text {
  width: 100%;
  font-weight: normal;
  font-size: 14px;
  color: #0075d6;
}

/* 产品图片 */
.pro-image-view {
  display: inline-block;
  margin-bottom: 20px;
  width: 94vw;
}

.pro-image-view .pro-image {
  width: 94vw;
  height: 54.86vw;
}

/* 表格加文字 */
.pro-introduce {
  margin-bottom: 40px;
  display: inline-block;
  height: 65vw;
  /* height:190px;  */
}

/* 产品介绍 */
.pro-info-view {
  display: inline-block;
  width: 45vw;
  /* float: right; */
  text-align: justify;
  height: 100%;
}

.pro-info-view .pro-info-text {
  font-size: 10px;
  line-height: 45rpx;
  text-indent: 2rpx;
}

/* 产品功能表格 */
.pro-table-view {
  /* float: left; */
  /* height: 100%; */
  position: relative;
}

.pro-introduce .pro-table-view .pro-table-image {
  width: 45vw;
  height: 25.75vw;
  position: absolute;
  top: 25%;
}

.bottomImg {
  width: 100%;
  height: 45px;
  margin-top: 10px;
  background-size: 100% 100%;
}
</style>
