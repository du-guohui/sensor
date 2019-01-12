global.webpackJsonp([2],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9390ebf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9390ebf0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9390ebf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9390ebf0", Component.options)
  } else {
    hotAPI.reload("data-v-9390ebf0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wux_index__ = __webpack_require__(43);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    userInfo: function userInfo() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.userInfo;
    }
  },
  data: function data() {
    return {
      nickName: "",
      avatarUrl: ""
    };
  },

  methods: {
    alert: function alert() {
      Object(__WEBPACK_IMPORTED_MODULE_1__wux_index__["a" /* $wuxDialog */])().alert({
        resetOnClose: true,
        title: "提示",
        content: "请先授权!"
      });
    },
    bindGetUserInfo: function bindGetUserInfo(e) {
      var _this = this;
      if (e.mp.detail.rawData) {
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit("userInfo");
        _this.$router.back();
        wx.showTabBar({});
      } else {
        _this.alert();
      }
      this.GetData();
    },
    GetData: function GetData() {
      var _this = this;
      wx.getUserInfo({
        success: function success(res) {
          var userInfo = res.userInfo;
          _this.nickName = userInfo.nickName;
          _this.avatarUrl = userInfo.avatarUrl;
        }
      });
    }
  },
  created: function created() {
    // if (this.userInfo) {
    //   wx.showTabBar({});     
    // } else {
    //   wx.hideTabBar({});
    // }
    // this.GetData();
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(114);
// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        userInfo: false
    },
    mutations: {
        userInfo: function userInfo(state) {
            state.userInfo = !state.userInfo;
        }
    }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(!_vm.userInfo) ? _c('view', [_c('div', {
    staticClass: "login"
  }, [_c('wux-button', {
    staticClass: "login__button",
    attrs: {
      "block": "",
      "type": "positive",
      "open-type": "getUserInfo",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/back.png"
    }
  })], 1), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '1'
    }
  })], 1) : _c('view', [_c('div', {
    staticClass: "my__top"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.avatarUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.nickName))])]), _vm._v(" "), _c('wux-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('wux-cell', {
    attrs: {
      "title": "企业介绍",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        _vm.Push('/pages/UnitedData/index')
      }
    }
  })], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9390ebf0", esExports)
  }
}

/***/ })

},[130]);
//# sourceMappingURL=index.js.map