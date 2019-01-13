<template>
  <div class="container">
    <img class="img" src="/static/img/back.png">
    <div class="bottom-button">
      <i-button open-type="getUserInfo" type="primary" @getuserinfo="userinfo">微信登录</i-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    userinfo(e) {
      if (e.mp.detail.rawData) {
        wx.setStorage({
          key: "UserInfo",
          data: e.mp.detail.rawData,
          success(res) {
            wx.reLaunch({
              url: "/pages/my/index"
            });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.container{
  background: #f8fbff;
  height: 100%;
}
.img{
  height: 500px;
}
</style>
