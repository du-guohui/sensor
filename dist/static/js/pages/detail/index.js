global.webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c1e283e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c1e283e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c1e283e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c1e283e", Component.options)
  } else {
    hotAPI.reload("data-v-6c1e283e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__ = __webpack_require__(140);
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



var chart = null;

function initChart(canvas, width, height) {
  chart = __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min___default.a.init(canvas, null, {
    width: width,
    height: height
  });

  canvas.setChart(chart);
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      data: ["温度", "湿度"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    }],
    yAxis: [{
      type: "value"
    }],
    series: [{
      name: "温度",
      type: "line",
      areaStyle: {},
      data: [28, 27, 28, 26, 24, 24, 29]
    }, {
      name: "湿度",
      type: "line",
      areaStyle: {},
      data: [60, 61, 61, 65, 66, 67, 66]
    }]
  };

  chart.setOption(option);

  return chart; // 返回 chart 后可以自动绑定触摸操作
}

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    mpvueEcharts: __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__["a" /* default */]
  },
  data: function data() {
    return { echarts: __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min___default.a, onInit: initChart, detail: "" };
  },

  methods: {
    GetData: function GetData() {
      var _this = this;

      this.detail = '';
      this.ajax("device/getDevice", { id: this.$route.query.id }).then(function (res) {
        _this.detail = res.content;
      });
    }
  },
  onShow: function onShow() {
    this.GetData();
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('view', {
    staticClass: "detail__box"
  }, [_c('view', {
    staticClass: "detail__bo__left"
  }, [_c('ul', [_c('li', [_c('view', {
    staticClass: "title"
  }, [_vm._v("位置名称：")]), _vm._v(" "), _c('view', {
    staticClass: "txt"
  }, [_vm._v(_vm._s(_vm.detail.name))])]), _vm._v(" "), _c('li', [_c('view', {
    staticClass: "title"
  }, [_vm._v("设备 EUI：")]), _vm._v(" "), _c('view', {
    staticClass: "txt"
  }, [_vm._v(_vm._s(_vm.detail.devEui))])]), _vm._v(" "), _c('li', [_c('view', {
    staticClass: "title"
  }, [_vm._v("当前状态：")]), _vm._v(" "), _c('view', {
    staticClass: "txt"
  }, [_vm._v("温度:25°C  湿度:65%  在线")])])], 1)], 1), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "echarts-wrap"
  }, [_c('mpvue-echarts', {
    attrs: {
      "echarts": _vm.echarts,
      "onInit": _vm.onInit,
      "canvasId": "demo-canvas",
      "mpcomid": '0'
    }
  })], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail__bo__right"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/wd.jpg",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c1e283e", esExports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_echarts_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_8046877c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_echarts_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8046877c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_echarts_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_8046877c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_echarts_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/mpvue-echarts/src/echarts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] echarts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8046877c", Component.options)
  } else {
    hotAPI.reload("data-v-8046877c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wx_canvas__ = __webpack_require__(143);

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
  props: {
    echarts: {
      required: true,
      type: Object,
      default: function _default() {
        return null;
      }
    },
    onInit: {
      required: true,
      type: Function,
      default: null
    },
    canvasId: {
      type: String,
      default: 'ec-canvas'
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    disableTouch: {
      type: Boolean,
      default: false
    },
    throttleTouch: {
      type: Boolean,
      default: false
    }
  },
  onReady: function onReady() {
    if (!this.echarts) {
      console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" ' + 'canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>');
      return;
    }

    if (!this.lazyLoad) this.init();
  },

  methods: {
    init: function init() {
      var _this = this;

      var version = wx.version.version.split('.').map(function (n) {
        return parseInt(n, 10);
      });
      var isValid = version[0] > 1 || version[0] === 1 && version[1] > 9 || version[0] === 1 && version[1] === 9 && version[2] >= 91;
      if (!isValid) {
        console.error('微信基础库版本过低，需大于等于 1.9.91。' + '参见：https://github.com/ecomfe/echarts-for-weixin' + '#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
        return;
      }

      if (!this.onInit) {
        console.warn('请传入 onInit 函数进行初始化');
        return;
      }

      var canvasId = this.canvasId;

      this.ctx = wx.createCanvasContext(canvasId);

      var canvas = new __WEBPACK_IMPORTED_MODULE_1__wx_canvas__["a" /* default */](this.ctx, canvasId);

      this.echarts.setCanvasCreator(function () {
        return canvas;
      });

      var query = wx.createSelectorQuery();
      query.select('#' + canvasId).boundingClientRect(function (res) {
        if (!res) {
          setTimeout(function () {
            return _this.init();
          }, 50);
          return;
        }
        _this.chart = _this.onInit(canvas, res.width, res.height);
      }).exec();
    },
    canvasToTempFilePath: function canvasToTempFilePath(opt) {
      var canvasId = this.canvasId;

      this.ctx.draw(true, function () {
        wx.canvasToTempFilePath(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          canvasId: canvasId
        }, opt));
      });
    },
    touchStart: function touchStart(e) {
      var disableTouch = this.disableTouch,
          chart = this.chart;

      if (disableTouch || !chart || !e.mp.touches.length) return;
      var touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousedown', {
        zrX: touch.x,
        zrY: touch.y
      });
      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y
      });
    },
    touchMove: function touchMove(e) {
      var disableTouch = this.disableTouch,
          throttleTouch = this.throttleTouch,
          chart = this.chart,
          lastMoveTime = this.lastMoveTime;

      if (disableTouch || !chart || !e.mp.touches.length) return;

      if (throttleTouch) {
        var currMoveTime = Date.now();
        if (currMoveTime - lastMoveTime < 240) return;
        this.lastMoveTime = currMoveTime;
      }

      var touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y
      });
    },
    touchEnd: function touchEnd(e) {
      var disableTouch = this.disableTouch,
          chart = this.chart;

      if (disableTouch || !chart) return;
      var touch = e.mp.changedTouches ? e.mp.changedTouches[0] : {};
      chart._zr.handler.dispatch('mouseup', {
        zrX: touch.x,
        zrY: touch.y
      });
      chart._zr.handler.dispatch('click', {
        zrX: touch.x,
        zrY: touch.y
      });
    }
  }
});

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.canvasId) ? _c('canvas', {
    staticClass: "ec-canvas",
    attrs: {
      "id": _vm.canvasId,
      "canvasId": _vm.canvasId,
      "eventid": '0'
    },
    on: {
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove,
      "touchend": _vm.touchEnd,
      "error": _vm.error
    }
  }) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8046877c", esExports)
  }
}

/***/ })

},[125]);
//# sourceMappingURL=index.js.map