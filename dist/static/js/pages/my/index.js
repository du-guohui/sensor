global.webpackJsonp([3],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8a0d6408_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(114);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8a0d6408"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8a0d6408_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-8a0d6408", Component.options)
  } else {
    hotAPI.reload("data-v-8a0d6408", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  data: function data() {
    return {
      user: ""
    };
  },

  methods: {
    UserInfo: function UserInfo() {
      var _this = this;
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.userInfo"]) {} else {
            wx.reLaunch({
              url: "/pages/login/index"
            });
          }
        }
      });
      if (wx.getStorageSync("UserInfo")) {
        _this.user = JSON.parse(wx.getStorageSync("UserInfo"));
      }
    }
  },
  onShow: function onShow() {
    this.UserInfo();
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "my-top theme-back"
  }, [(!_vm.user.avatarUrl) ? _c('div', {
    staticClass: "avatar",
    staticStyle: {
      "background-image": "url(data:image/png;base64,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)"
    }
  }) : _c('div', {
    staticClass: "avatar",
    style: ({
      backgroundImage: 'url(' + _vm.user.avatarUrl + ')'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.user.nickName ? _vm.user.nickName : '昵称'))])]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "设置",
      "is-link": "",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "我的网关",
      "is-link": "",
      "url": "/pages/GatewayList/index",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "公司介绍",
      "is-link": "",
      "url": "/pages/UnitedData/index",
      "mpcomid": '2'
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
     require("vue-hot-reload-api").rerender("data-v-8a0d6408", esExports)
  }
}

/***/ })

},[141]);
//# sourceMappingURL=index.js.map