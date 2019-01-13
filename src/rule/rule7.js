//广州室外温湿度
var COMMAND_REPORT = 0x00;
var COMMAND_SET = 0x01;
var ALINK_PROP_REPORT_METHOD = 'thing.event.property.post'; //标准ALink JSON格式topic， 设备 上传属性数据到 云端
var ALINK_PROP_SET_METHOD = 'thing.service.property.set'; //标准ALink JSON格式topic， 云端 下发属性控制指令 到设备端

// 字符串转16进制
function str2hex(str) {
    if (str === "") {
        return "";
    }
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i).toString(16).length === 1 ? '0' + str.charCodeAt(i).toString(16) : str.charCodeAt(i).toString(16));
    }
    return arr.join('');
}
/*
示例数据：
传入参数 ->
    0x00002233441232013fa00000
输出结果 ->
    {"method":"thing.event.property.post","id":"2241348",
    "params":{"prop_float":1.25,"prop_int16":4658,"prop_bool":1},
    "version":"1.0"}
*/
function rawDataToProtocol(bytes) {
    var ss = str2hex(decodeBase64(bytes));
    var jsonMap = new Object();
    if (ss.length) {
        jsonMap['method'] = ALINK_PROP_REPORT_METHOD; //ALink JSON格式 - 属性上报topic
        jsonMap['version'] = '1.0'; //ALink JSON格式 - 协议版本号固定字段
        var params = {};
        if (ss.length == 24) {
            //室外温湿度PM2.5协议解析
            params.sht30 = parseInt('0x' + ss.substr(0, 4)) / 100;
            params.humidity = parseInt('0x' + ss.substr(4, 2));
            params.pm25 = parseInt('0x' + ss.substr(6, 4));
            params.formaldehyde = parseInt('0x' + ss.substr(10, 4)) / 1000;//甲醛
            params.battery = parseInt('0x' + ss.substr(14, 2));//电池电量
            params.version = parseInt('0x' + ss.substr(16, 4));
            params.count = parseInt('0x' + ss.substr(20, 4));//累加数
            jsonMap['params'] = params; //ALink JSON格式 - params标准字段
        }
    }
    return jsonMap;
}
/*
示例数据：
传入参数 ->
    {"method":"thing.service.property.set","id":"12345","version":"1.0","params":{"prop_float":123.452, "prop_int16":333, "prop_bool":1}}
输出结果 ->
    0x0100003039014d0142f6e76d
*/
function protocolToRawData(json) {
    var method = json['method'];
    var id = json['id'];
    var version = json['version'];
    var payloadArray = [];
    if (method == ALINK_PROP_SET_METHOD) // 属性设置
    {
        var params = json['params'];
        var prop_float = params['prop_float'];
        var prop_int16 = params['prop_int16'];
        var prop_bool = params['prop_bool'];
        //按照自定义协议格式拼接 rawdatavhbnvhjnvbv
        payloadArray = payloadArray.concat(buffer_uint8(COMMAND_SET)); // command字段
        payloadArray = payloadArray.concat(buffer_int32(parseInt(id))); // ALink JSON格式 'id'
        payloadArray = payloadArray.concat(buffer_int16(prop_int16)); // 属性'prop_int16'的值
        payloadArray = payloadArray.concat(buffer_uint8(prop_bool)); // 属性'prop_bool'的值
        payloadArray = payloadArray.concat(buffer_float32(prop_float)); // 属性'prop_float'的值
    }
    return payloadArray;
}
//以下是部分辅助函数
function buffer_uint8(value) {
    var uint8Array = new Uint8Array(1);
    var dv = new DataView(uint8Array.buffer, 0);
    dv.setUint8(0, value);
    return [].slice.call(uint8Array);
}
function buffer_int16(value) {
    var uint8Array = new Uint8Array(2);
    var dv = new DataView(uint8Array.buffer, 0);
    dv.setInt16(0, value);
    return [].slice.call(uint8Array);
}
function buffer_int32(value) {
    var uint8Array = new Uint8Array(4);
    var dv = new DataView(uint8Array.buffer, 0);
    dv.setInt32(0, value);
    return [].slice.call(uint8Array);
}
function buffer_float32(value) {
    var uint8Array = new Uint8Array(4);
    var dv = new DataView(uint8Array.buffer, 0);
    dv.setFloat32(0, value);
    return [].slice.call(uint8Array);
}

decodeBase64 = function (s) {
    var e = {}, i, b = 0, c, x, l = 0, a, r = '', w = String.fromCharCode, L = s.length;
    var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0; i < 64; i++) { e[A.charAt(i)] = i; }
    for (x = 0; x < L; x++) {
        c = e[s.charAt(x)]; b = (b << 6) + c; l += 6;
        while (l >= 8) { ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a)); }
    }
    return r;
};