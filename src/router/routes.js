module.exports = [{
  path: 'pages/index/index',
  name: 'index',
  config: {
    navigationBarTitleText: '无间能耗监控',
    usingComponents: {
      "i-toast": "../../iview/toast/index"
    }
  }
}, {
  path: 'pages/list/index',
  name: 'list',
  config: {
    navigationBarTitleText: '设备列表',
    usingComponents: {
      "i-row": "../../iview/row/index",
      "i-col": "../../iview/col/index",
      "i-button": "../../iview/button/index",
      "i-toast": "../../iview/toast/index",
      "i-icon": "../../iview/icon/index",
      "i-modal": "../../iview/modal/index",
      "van-search": "../../vant/search/index",
      "van-swipe-cell": "../../vant/swipe-cell/index"
    }
  }
}, {
  path: 'pages/device/index',
  name: 'device',
  config: {
    "disableScroll": true,
    navigationBarTitleText: '设备设置',
    usingComponents: {
      "i-button": "../../iview/button/index",
      "i-toast": "../../iview/toast/index",
      "van-field": "../../vant/field/index"
    }
  }
}, {
  path: 'pages/detail/index',
  name: 'detail',
  config: {
    navigationBarTitleText: '详情',
    usingComponents: {
      "i-button": "../../iview/button/index"
    }
  }
}, {
  path: 'pages/my/index',
  name: 'my',
  config: {
    navigationBarTitleText: '个人中心',
    "disableScroll": true,
    usingComponents: {
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index"
    }
  }
}, {
  path: 'pages/products/index',
  name: 'products',
  config: {
    navigationBarTitleText: '产品介绍'
  }
}, {
  path: 'pages/UnitedData/index',
  name: 'UnitedData',
  config: {
    navigationBarTitleText: '公司介绍'
  }
}, {
  path: 'pages/login/index',
  name: 'login',
  config: {
    navigationBarTitleText: '登录',
    "disableScroll": true,
    usingComponents: {
      "i-button": "../../iview/button/index"
    }
  }
}, {
  path: 'pages/GatewayList/index',
  name: 'GatewayList',
  config: {
    navigationBarTitleText: '我的网关',
    usingComponents: {
      "i-button": "../../iview/button/index",
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      "i-toast": "../../iview/toast/index",
      "van-swipe-cell": "../../vant/swipe-cell/index"
    }
  }
}, {
  path: 'pages/GatewayEdit/index',
  name: 'GatewayEdit',
  config: {
    navigationBarTitleText: '添加网关',
    usingComponents: {
      "i-button": "../../iview/button/index",
      "i-toast": "../../iview/toast/index",
      "van-field": "../../vant/field/index"
    }
  }
}]