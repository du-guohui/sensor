global.webpackJsonp([11],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47e41e30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(147)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47e41e30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47e41e30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/GatewayList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47e41e30", Component.options)
  } else {
    hotAPI.reload("data-v-47e41e30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 147:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 148:
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

var _require = __webpack_require__(43),
    $Toast = _require.$Toast;

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: ""
    };
  },

  methods: {
    GetData: function GetData() {
      var _this = this;

      this.ajax("device/getGatewayList").then(function (res) {
        _this.list = res.content;
      });
    },
    Del: function Del(id, index) {
      var _this2 = this;

      this.ajax("device/deleteGateway", { id: id }, "POST").then(function (res) {
        if (res) {
          _this2.list.splice(index, 1);
          $Toast({
            content: "删除成功",
            type: "success"
          });
        }
      });
    },
    ToAdd: function ToAdd() {
      wx.navigateTo({
        url: "/pages/GatewayEdit/index"
      });
    }
  },
  onShow: function onShow() {
    this.GetData();
  }
});

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('van-swipe-cell', {
      key: index,
      attrs: {
        "right-width": "60",
        "mpcomid": '1-' + index
      }
    }, [_c('view', [_c('i-cell', {
      attrs: {
        "title": item.name,
        "mpcomid": '0-' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "right"
    }, [_c('div', {
      staticClass: "del",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.Del(item.id, index)
        }
      }
    }, [_vm._v("删除")])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "bottom-button"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.ToAdd
    }
  }, [_vm._v("添加网关")])], 1), _vm._v(" "), _c('i-toast', {
    attrs: {
      "id": "toast",
      "mpcomid": '4'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47e41e30", esExports)
  }
}

/***/ })

},[150]);
//# sourceMappingURL=index.js.map