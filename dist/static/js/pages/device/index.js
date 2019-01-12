global.webpackJsonp([6],{

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3bc345b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(99);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3bc345b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3bc345b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\device\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bc345b2", Component.options)
  } else {
    hotAPI.reload("data-v-3bc345b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      form: {
        devEui: "",
        name: "",
        img_url: "",
        appKey: "2B7E151628AED2A6ABF7158866554433",
        rule_id: 7
      }
    };
  },

  methods: {
    Send: function Send() {
      this.request("device/addDevice", this.form, "post").then(function (res) {
        console.log(res);
      }).catch(function (e) {});
    },
    onChange: function onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    },
    GetId: function GetId() {
      if (this.$route.query.devEui) {
        this.form.devEui = this.$route.query.devEui;
      }
      if (this.$route.query.appKey) {
        this.form.appKey = this.$route.query.appKey;
      }
      if (this.$route.query.edit) {
        wx.setNavigationBarTitle({
          title: "设备修改"
        });
      } else {
        wx.setNavigationBarTitle({
          title: "添加设备"
        });
      }
    },
    GetData: function GetData() {}
  },
  mounted: function mounted() {
    this.GetId();
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('wux-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('wux-cell', {
    attrs: {
      "hover-class": "none",
      "mpcomid": '1'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": "位置名称",
      "id": "name",
      "value": _vm.form.name,
      "placeholder": "请输入位置名称",
      "controlled": "",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)], 1), _vm._v(" "), _c('wux-button', {
    staticClass: "device_button",
    attrs: {
      "block": "",
      "type": "positive",
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.Send
    }
  }, [_vm._v("保存")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3bc345b2", esExports)
  }
}

/***/ })

},[128]);
//# sourceMappingURL=index.js.map