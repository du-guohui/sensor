import Vue from 'vue'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch';

Vue.use(MpvueRouterPatch);

Vue.prototype.ajax = function (url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      // url: `https://nhjk.uniteddata.com/${url}`,
      url: `http://172.16.1.117:5000/${url}`,
      data: data,
      method: method ? 'POST' : 'Get',
      header: {
        'Authorization': wx.getStorageSync('Authorization'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  })
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App
})

app.$mount();

export default {
  config: {
    pages: [

    ],
    window: {
      "backgroundTextStyle": "light",
      "backgroundColor": "#eeeeee",
      "navigationBarBackgroundColor": "#3a9cff",
      "navigationBarTextStyle": "white",
      "enablePullDownRefresh": false
    },
    "tabBar": {
      "color": "#999999",
      "selectedColor": "#3a9cff",
      "borderStyle": "white",
      "list": [{
        "selectedIconPath": "static/img/home-c.png",
        "iconPath": "static/img/home.png",
        "pagePath": "pages/index/index",
        "text": "首页"
      }, {
        "selectedIconPath": "static/img/list-c.png",
        "iconPath": "static/img/list.png",
        "pagePath": "pages/list/index",
        "text": "设备"
      }, {
        "selectedIconPath": "static/img/product-c.png",
        "iconPath": "static/img/product.png",
        "pagePath": "pages/products/index",
        "text": "产品"
      }, {
        "selectedIconPath": "static/img/my-c.png",
        "iconPath": "static/img/my.png",
        "pagePath": "pages/my/index",
        "text": "我的"
      }]
    }
  }
}
