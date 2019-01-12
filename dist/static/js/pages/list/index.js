global.webpackJsonp([4],{

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_577a9a3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(95);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-577a9a3a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_577a9a3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\list\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-577a9a3a", Component.options)
  } else {
    hotAPI.reload("data-v-577a9a3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wux_index__ = __webpack_require__(43);
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
      list: []
    };
  },

  methods: {
    GetData: function GetData() {
      var _this2 = this;

      this.request("device/getDeviceList").then(function (res) {
        _this2.list = res.content;
        console.log(_this2.list);
      }).catch(function (e) {});
    },
    ToDelete: function ToDelete(id, index) {
      var _this = this;
      Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["a" /* $wuxDialog */])().open({
        resetOnClose: true,
        title: "确定删除该设备？",
        buttons: [{
          text: "取消"
        }, {
          text: "确定",
          type: "primary",
          onTap: function onTap(e) {
            _this.request("device/deleteDevice", { id: id }, "POST").then(function (res) {
              Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
                type: "text",
                duration: 1500,
                color: "#fff",
                text: "删除成功"
              });
              _this.list.splice(index, 1);
            }).catch(function (e) {});
          }
        }]
      });
    },
    ToEdit: function ToEdit(id) {
      this.Push("/pages/device/index", {
        id: id,
        edit: true
      });
    },
    ToList: function ToList() {
      this.$router.push({ path: "/pages/detail/index" });
      //thit.Push("/pages/list/index");
    },
    scanCode: function scanCode() {
      var _thit = this;
      wx.scanCode({
        success: function success(res) {
          if (res.result) {
            var str = res.result.split("	");
            if (str.length == 1) {
              var str2 = res.result.split("\n");
              _thit.Push("/pages/device/index", {
                appKey: str2[0],
                devEui: str2[1]
              });
            } else {
              _thit.Push("/pages/device/index", {
                appKey: str[0],
                devEui: str[1]
              });
            }
          }
        },
        fail: function fail(err) {
          Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["a" /* $wuxDialog */])().alert({
            resetOnClose: true,
            title: "提示",
            content: "扫码失败，请重新扫码!"
          });
        }
      });
    }
  },
  created: function created() {
    //this.GetData();
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list__top"
  }, [_c('wux-row', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('wux-col', {
    attrs: {
      "span": "10",
      "mpcomid": '1'
    }
  }, [_c('view', {
    staticClass: "placeholder"
  }, [_c('wux-search-bar', {
    attrs: {
      "clear": "",
      "maxlength": "8",
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('wux-col', {
    attrs: {
      "span": "2",
      "mpcomid": '3'
    }
  }, [_c('view', {
    staticClass: "tianjia",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.scanCode
    }
  }, [_c('wux-icon', {
    attrs: {
      "type": "ios-add",
      "color": "#ffffff",
      "size": "20",
      "mpcomid": '2'
    }
  })], 1)])], 1)], 1), _vm._v(" "), (_vm.list) ? _c('view', {
    staticClass: "page__list"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('van-swipe-cell', {
      key: index,
      attrs: {
        "right-width": "120",
        "mpcomid": '5-' + index
      }
    }, [_c('view', {
      staticClass: "li",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.ToList
      }
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": "/static/img/wd.jpg"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "txt"
    }, [_c('span', {
      staticClass: "txt-li"
    }, [_vm._v("温度:" + _vm._s(item.temp))]), _vm._v(" "), _c('span', {
      staticClass: "txt-li"
    }, [_vm._v("湿度:" + _vm._s(item.humidity))])])]), _vm._v(" "), _c('view', {
      slot: "right"
    }, [_c('div', {
      staticClass: "right-box"
    }, [_c('div', {
      staticClass: "edit",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.ToEdit(item.id)
        }
      }
    }, [_vm._v("修改")]), _vm._v(" "), _c('div', {
      staticClass: "del",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.ToDelete(item.id, index)
        }
      }
    }, [_vm._v("删除")])])])])
  })) : _vm._e(), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '7'
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
     require("vue-hot-reload-api").rerender("data-v-577a9a3a", esExports)
  }
}

/***/ })

},[127]);
//# sourceMappingURL=index.js.map