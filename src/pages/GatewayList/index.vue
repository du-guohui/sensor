<template>
  <div class="container">
    <i-cell-group>
      <van-swipe-cell right-width="60" v-for="(item,index) in list" :key="index">
        <view>
          <i-cell :title="item.name"></i-cell>
        </view>
        <view slot="right">
          <div class="del" @click="Del(item.id,index)">删除</div>
        </view>
      </van-swipe-cell>
    </i-cell-group>

    <div class="bottom-button">
      <i-button @click="ToAdd" type="primary">添加网关</i-button>
    </div>

    <i-toast id="toast"/>
  </div>
</template>

<script>
const { $Toast } = require("../../iview/base/index");
export default {
  data() {
    return {
      list: ""
    };
  },
  methods: {
    GetData() {
      this.ajax("device/getGatewayList").then(res => {
        this.list = res.content;
      });
    },
    Del(id, index) {
      this.ajax("device/deleteGateway", { id: id }, "POST").then(res => {
        if (res) {
          this.list.splice(index, 1);
          $Toast({
            content: "删除成功",
            type: "success"
          });
        }
      });
    },
    ToAdd() {
      wx.navigateTo({
        url: `/pages/GatewayEdit/index`
      });
    }
  },
  onShow() {
    this.GetData();
  }
};
</script>

<style scoped>
.del {
  width: 60px;
  background: red;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  line-height: 50px;
}
</style>
