global.webpackJsonp([10],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8d045158_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8d045158"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8d045158_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\GatewayEdit\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d045158", Component.options)
  } else {
    hotAPI.reload("data-v-8d045158", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
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
//
//
//
//
//
//
//

var _require = __webpack_require__(19),
    $Toast = _require.$Toast;

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      form: {
        mac: "",
        name: ""
      }
    };
  },

  methods: {
    onChange: function onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail;
    },
    PostData: function PostData() {
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
        this.ajax("device/addGateway", this.form, "POST").then(function (res) {
          if (res.content == "success") {
            $Toast({
              content: "添加成功",
              type: "success"
            });
            setTimeout(function () {
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
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('van-field', {
    attrs: {
      "label": "mac地址",
      "id": "mac",
      "clearable": "",
      "value": _vm.form.mac,
      "placeholder": "请输入mac地址",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "位置名称",
      "id": "name",
      "clearable": "",
      "value": _vm.form.name,
      "placeholder": "请输入位置名称",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bottom-button"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.PostData
    }
  }, [_vm._v("保存")])], 1), _vm._v(" "), _c('i-toast', {
    attrs: {
      "id": "toast",
      "mpcomid": '3'
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
     require("vue-hot-reload-api").rerender("data-v-8d045158", esExports)
  }
}

/***/ })

},[146]);
//# sourceMappingURL=index.js.map