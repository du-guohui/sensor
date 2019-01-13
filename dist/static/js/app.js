global.webpackJsonp([11],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(6);






__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      // url: `https://nhjk.uniteddata.com/${url}`,
      url: 'http://172.16.1.117:5000/' + url,
      data: data,
      method: method ? 'POST' : 'Get',
      header: {
        'Authorization': wx.getStorageSync('Authorization'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    pages: [],
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
});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(87);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-761972e2", Component.options)
  } else {
    hotAPI.reload("data-v-761972e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  mpType: "app",
  methods: {
    Login: function Login() {
      // 用户登录获取
      var _this = this;
      wx.login({
        success: function success(res) {
          if (res.code) {
            _this.ajax("user/login", { code: res.code }).then(function (res) {
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
  created: function created() {
    this.Login();
  }
});

/***/ })

},[44]);
//# sourceMappingURL=app.js.map