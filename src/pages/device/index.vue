<template>
  <div class="container">
    <van-field
      label="位置名称"
      id="name"
      focus
      clearable
      :value="form.name"
      placeholder="请输入位置名称"
      @change="onChange"
    />

    <div class="bottom-button">
      <i-button type="primary" @click="PostData2" v-if="edit">保存</i-button>
      <i-button type="primary" @click="PostData" v-else>保存</i-button>
    </div>

    <i-toast id="toast"/>
  </div>
</template>

<script>
const { $Toast } = require("../../iview/base/index");
export default {
  data() {
    return {
      form: {
        devEui: "",
        name: "",
        img_url: "",
        appKey: "",
        mac: "",
        id: ""
      },
      edit: false
    };
  },
  methods: {
    onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail;
    },
    PostData() {
      if (this.form.name == "") {
        $Toast({
          content: "名称不能为空",
          type: "error"
        });
        return;
      } else {
        this.ajax("device/addDevice", this.form, "POST").then(res => {
          if (res.content == "success") {
            $Toast({
              content: "添加成功",
              type: "success"
            });
            setTimeout(() => {
              wx.navigateBack(1);
            }, 1500);
          } else {
            $Toast({
              content: "操作失败",
              type: "error"
            });
          }
        });
      }
    },
    PostData2() {
      if (this.form.name == "") {
        $Toast({
          content: "名称不能为空",
          type: "error"
        });
        return;
      } else {
        this.ajax("device/updateDevice", this.form, "POST").then(res => {
          if (res.content == "success") {
            $Toast({
              content: "修改成功",
              type: "success"
            });
            setTimeout(() => {
              wx.navigateBack(1);
            }, 1500);
          } else {
            $Toast({
              content: "操作失败",
              type: "error"
            });
          }
        });
      }
    },
    GetData() {
      this.form.name = "";
      if (this.$route.query.devEui) {
        this.form.devEui = this.$route.query.devEui;
      }
      if (this.$route.query.appKey) {
        this.form.appKey = this.$route.query.appKey;
      }
      if (this.$route.query.name != "undefined") {
        this.form.name = this.$route.query.name;
      }
      if (this.$route.query.id != "undefined") {
        this.form.id = this.$route.query.id;
        this.edit = true;
        wx.setNavigationBarTitle({
          title: "设备修改"
        });
      } else {
        this.form.id = '';
        this.edit = false;
        wx.setNavigationBarTitle({
          title: "添加设备"
        });
      }
    }
  },
  onShow() {
    this.GetData();
  }
};
</script>

<style scoped>
</style>
