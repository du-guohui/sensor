<template>
  <div class="container">
    <div class="list-top">
      <i-row>
        <i-col span="20" i-class="col-class">
          <div class="search">
            <van-search placeholder="请输入搜索关键词"/>
          </div>
        </i-col>
        <i-col span="4" i-class="col-class">
          <i-button @click="scanCode" type="primary" size="small">
            <i-icon type="add" size="16" color="#ffffff"/>
          </i-button>
        </i-col>
      </i-row>
    </div>
    <view class="page__list">
      <van-swipe-cell right-width="160" v-for="(item,index) in list" :key="index">
        <view class="li">
          <div
            class="img"
            @click="ToDetail(item.id,item.devEui,item.rule_id,item.temperature,item.humidity)"
          >
            <img src="/static/img/wd.jpg">
          </div>
          <div
            class="name"
            @click="ToDetail(item.id,item.devEui,item.rule_id,item.temperature,item.humidity)"
          >{{item.name}}</div>
          <div class="txt">
            <span class="txt-li">温度:{{item.temperature | capitalize}}</span>
            <span class="txt-li">湿度:{{item.humidity}}</span>
          </div>
        </view>
        <view slot="right">
          <div class="right-box">
            <div class="edit" @click="ToDevice(item.appKey,item.devEui,item.id,item.name)">修改</div>
            <div class="del" @click="ToDelete(item.id,index)">删除</div>
          </div>
        </view>
      </van-swipe-cell>
    </view>
    <i-toast id="toast"/>
  </div>
</template>

<script>
const { $Toast } = require("../../iview/base/index");
export default {
  data() {
    return {
      list: [],
      visible: false,
      DeleteId: ""
    };
  },
  methods: {
    GetData() {
      this.ajax("device/getDeviceList").then(res => {
        if (res.content.length > "0") {
          this.list = res.content;
        }
      });
    },
    ToDetail(id, devEui, rule_id, temperature, humidity) {
      wx.navigateTo({
        url: `/pages/detail/index?id=${id}&devEui=${devEui}&rule_id=${rule_id}&temperature=${temperature}&humidity=${humidity}`
      });
    },
    ToDevice(appKey, devEui, id, name) {
      wx.navigateTo({
        url: `/pages/device/index?appKey=${appKey}&devEui=${devEui}&id=${id}&name=${name}`
      });
    },
    ToDelete(id, index) {
      this.ajax("device/deleteDevice", { id: id }, "POST").then(res => {
        this.list.splice(index, 1);
        $Toast({
          content: "删除成功",
          type: "success"
        });
      });
    },
    scanCode() {
      let _this = this;
      wx.scanCode({
        success(res) {
          if (res.result) {
            // if (res.result.split("mac=")) {
            //   let str = res.result.split("mac=");
            //   wx.navigateTo({
            //     url: `/pages/device/index?mac=${str[1]}`
            //   });
            // } else {
            let str = res.result.split("	");
            if (str.length == 1) {
              let str2 = res.result.split("\n");
              _this.ToDevice(str2[0], str2[1]);
            } else {
              _this.ToDevice(str[0], str[1]);
            }
            // }
          }
        },
        fail(err) {
          $Toast({
            content: "扫码失败",
            type: "error"
          });
        }
      });
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  onShow() {
    this.GetData();
  }
};
</script>

<style scoped>
.list-top {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #f2f2f2;
  z-index: 10;
}
.search {
  padding: 8px 0 8px 8px;
}

.page__list {
  overflow: hidden;
  padding: 56px 0px;
}

.right-box {
  width: 160px;
}

.page__list .edit,
.page__list .del {
  float: left;
  display: block;
  width: 50%;
  font-size: 16px;
  line-height: 92px;
  text-align: center;
  color: #ffffff;
}

.page__list .edit {
  background: #cccccc;
}

.page__list .del {
  background: red;
}

.page__list .li {
  background: #ffffff;
  display: block;
  overflow: hidden;
  padding: 10px 15px;
  border-bottom: 1px solid #f3eeee;
}

.page__list .img {
  width: 70px;
  height: 70px;
  float: left;
  margin-right: 10px;
}

.page__list .img img {
  width: 100%;
  height: 100%;
}

.page__list .name {
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 6px;
}

.page__list .txt {
  margin-bottom: 8px;
  font-size: 14px;
}

.page__list .txt .txt-li {
  margin-right: 10px;
}
</style>
