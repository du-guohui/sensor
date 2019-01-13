<template>
  <div class="container">
    <van-field
      label="mac地址"
      id="mac"      
      clearable
      :value="form.mac"
      placeholder="请输入mac地址"
      @change="onChange"
    />

    <van-field
      label="位置名称"
      id="name"
      clearable
      :value="form.name"
      placeholder="请输入位置名称"
      @change="onChange"
    />

    <div class="bottom-button">
      <i-button type="primary" @click="PostData">保存</i-button>
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
        mac: "",
        name: ""
      }
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
      } else if (this.form.mac == "") {
        $Toast({
          content: "mac不能为空",
          type: "error"
        });
        return;
      } else {
        this.ajax("device/addGateway", this.form, "POST").then(res => {
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
    }
  }
};
</script>

<style scoped>
</style>
