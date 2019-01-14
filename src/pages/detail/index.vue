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
            <view class="txt">温度:{{temperature | capitalize}}°C  湿度:{{humidity}}%  在线</view>
          </li>
        </ul>
      </view>
      <div class="detail__bo__right">
        <img src="/static/img/wd.jpg" alt>
      </div>
    </view>

    <view>
      <i-button
        :type="query == 'temperature' ? 'primary':''"
        size="small"
        inline
        @click="query = 'temperature'"
      >温度</i-button>
      <i-button
        :type="query == 'humidity' ? 'primary':''"
        size="small"
        inline
        @click="query = 'humidity'"
      >湿度</i-button>
    </view>

    <div class="echarts-wrap">
      <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleInit" ref="echarts"/>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/dist/echarts.min";
import mpvueEcharts from "mpvue-echarts";
import { formatDate } from "@/utils/index";
let chart = null;

export default {
  components: {
    mpvueEcharts
  },
  data() {
    return {
      echarts,
      option: null,
      query: "temperature",
      detail: "",
      temperature: "",
      humidity: ""
    };
  },
  methods: {
    GetData() {
      this.temperature = this.$route.query.temperature;
      this.humidity = this.$route.query.humidity;
      this.detail = "";
      this.query = 'temperature';
      this.ajax("device/getDevice", { id: this.$route.query.id }).then(res => {
        this.detail = res.content;
        this.initChart();
      });
    },
    initChart() {
      this.option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        dataZoom: [
          {
            type: "slider", //图表下方的伸缩条
            show: true, //是否显示
            realtime: true, //拖动时，是否实时更新系列的视图
            start: 0, //伸缩条开始位置（1-100），可以随时更改
            end: 100 //伸缩条结束位置（1-100），可以随时更改
          }
        ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: []
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            data: []
          }
        ]
      };
      this.ajax("device/getDeviceHistoryData?", {
        devEui: this.$route.query.devEui,
        start: Number(new Date().getTime() - 30 * 60 * 1000),
        end: Number(new Date().getTime()),
        query: this.query
      }).then(res => {
        console.log({
        devEui: this.$route.query.devEui,
        start: Number(new Date().getTime() - 30 * 60 * 1000),
        end: Number(new Date().getTime()),
        query: this.query
      });
        
        let da = res.content.data[0];
        this.option.series.name = da.tags.prop;
        this.option.series.type = "line";
        for (let d in da.dps) {
          this.option.xAxis[0].data.push(formatDate(new Date(Number(d))));
          this.option.series[0].data.push(da.dps[d].toFixed(2));
        }
        this.$refs.echarts.init();
      });
    },
    handleInit(canvas, width, height) {
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      chart.setOption(this.option);
      return chart;
    }
  },
  onShow() {
    this.GetData();
  },
  watch: {
    query() {
      this.initChart();
    }
  },  filters: {
    capitalize: function(value) {
      let net = Number(value)
      return net
    }
  },
};
</script>

<style scoped>
.container {
  background: #ffffff;
}
.echarts-wrap {
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
.container{
  background: #f8fbff;
  height: 100%;
}
</style>
