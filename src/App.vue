<script>
export default {
  mpType: "app",
  methods: {
    Login() {
      let _this = this;
      wx.login({
        success(res) {
          if (res.code) {
            _this
              .request("user/login", { code: res.code })
              .then(res => {
                console.log(res.content);
                
                wx.setStorage({
                  key: "Authorization",
                  data: res.content
                });
              })
              .catch(e => {});
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    getSetting() {
      let _this = this;
      wx.getSetting({
        success(res) {
          if (!res.authSetting["scope.userInfo"]) {
            _this.$router.push({
              path: "/pages/my/index",
              isTab: true
            });
            wx.hideTabBar({});
          } else {
            store.commit("userInfo");
            wx.showTabBar({});
            // _this.$router.push({
            //   path: "/pages/index/index",
            //   isTab: true
            // });
          }
        }
      });
    }
  },
  created() {
    this.Login();
    //this.GetRule();
    //this.getSetting();
  }
};
</script>

<style>
.container {
  height: 100%;
}

.footer-tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
