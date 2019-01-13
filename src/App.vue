<script>
export default {
  mpType: "app",
  methods: {
    Login() {
      // 用户登录获取
      let _this = this;
      wx.login({
        success(res) {
          if (res.code) {
            _this.ajax("user/login", { code: res.code }).then(res => {
              wx.setStorage({
                key: "Authorization",
                data: res.content
              });
              // console.log(res.content);
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    }
  },
  created() {
    this.Login();
  }
};
</script>

<style>
.theme-back {
  background: #3a9cff;
}

page {
  background: #eeeeee;
  height: 100%;
}

image {
  width: 100%;
}

* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

.bottom-button {
  position: fixed;
  bottom: 30px;
  left: 10%;
  right: 10%;
}
</style>
