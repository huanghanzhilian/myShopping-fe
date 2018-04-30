/*
* @Author: huanghanzhilian
* @Date:   2018-05-01 01:19:12
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-05-01 01:41:06
*/
'use strict';

var _mm = require('util/mm.js');

var _payment = {
    // 获取购物车数量
    getPaymentInfo: function(orderNo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject
        });
    },
    // 获取订单状态
    getOrderStatus: function(orderNo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject
        });
    },
}
module.exports = _payment;