<template>
  <div class="container">
    <view class="detail__box">
      <view class="detail__bo__left">
        <ul>
          <li>
            <view class="title">位置名称：</view>
            <view class="txt">{{detail.name}}</view>
          </li>
          <li>
            <view class="title">设备 EUI：</view>
            <view class="txt">{{detail.devEui}}</view>
          </li>
          <li>
            <view class="title">当前状态：</view>
            <view class="txt">温度:25°C  湿度:65%  在线</view>
          </li>
        </ul>
      </view>
      <div class="detail__bo__right">
        <img src="/static/img/wd.jpg" alt>
      </div>
    </view>

    <div class="echarts-wrap">
      <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas"/>
    </div>
  </div>
</template>

<script>
import echarts from "echarts/dist/echarts.min";
import mpvueEcharts from "mpvue-echarts";
let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });

  canvas.setChart(chart);
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      data: ["温度", "湿度"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "温度",
        type: "line",
        areaStyle: {},
        data: [28, 27, 28, 26, 24, 24, 29]
      },
      {
        name: "湿度",
        type: "line",
        areaStyle: {},
        data: [60, 61, 61, 65, 66, 67, 66]
      }
    ]
  };

  chart.setOption(option);

  return chart; // 返回 chart 后可以自动绑定触摸操作
}

export default {
  components: {
    mpvueEcharts
  },
  data() {
    return { echarts, onInit: initChart, detail: "" };
  },
  methods: {
    GetData() {
      this.detail = '';
      this.ajax("device/getDevice", { id: this.$route.query.id }).then(
        res => {
          this.detail  = res.content;
        }
      );
    }
  },
  onShow() {
    this.GetData();
  }
};
</script>

<style scoped>
.container {
  background: #ffffff;
}
.echarts-wrap {
  margin-top: 20px;
  width: 100%;
  height: 320px;
}
.detail__box {
  overflow: hidden;
  margin: 0 15px;
  padding: 20px 0;
}
.detail__bo__left {
  overflow: hidden;
  float: left;
  width: 70%;
}

.detail__bo__left li {
  line-height: 36px;
  font-size: 14px;
  overflow: hidden;
}

.detail__bo__left li .title {
  width: 70px;
  float: left;
  text-align: justify;
}

.detail__bo__right {
  height: 0;
  padding-bottom: 30%;
  float: right;
  width: 30%;
  overflow: hidden;
  position: relative;
}

.detail__bo__right img {
  position: absolute;
  height: 120%;
  width: 120%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
