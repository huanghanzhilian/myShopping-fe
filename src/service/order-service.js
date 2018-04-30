/*
* @Author: huanghanzhilian
* @Date:   2018-04-29 10:58:14
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-04-30 23:50:08
*/
'use strict';

var _mm = require('util/mm.js');

var _order = {
    // 获取商品列表
    getProductList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/get_order_cart_product.do'),
            //data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 提交订单
    createOrder : function(orderInfo,resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/create.do'),
            data    : orderInfo,
            success : resolve,
            error   : reject
        });
    },

    // 获取订单列表
    getOrderList: function(data, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/list.do'),
            data: data,
            success: resolve,
            error: reject
        });
    },

    // 获取订单详情
    getOrderDetail: function(orderNo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject
        });
    },

    // 取消订单
    orderCancal: function(orderNo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject
        });
    },

}
module.exports = _order;