/*
* @Author: huanghanzhilian
* @Date:   2018-04-29 22:44:00
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-04-30 19:02:57
*/
'use strict';

var _mm = require('util/mm.js');

var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/list.do'),
            data    : {
            	pageSize:50
            },
            success : resolve,
            error   : reject
        });
    },
    save: function(addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl("/shipping/add.do"),
            data: addressInfo,
            success: resolve,
            error: reject
        })
    },
    // 更新收货地址
    updateAddress: function(addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },

    //获取单件收件人信息 
    getAddress: function(shippingId, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/select.do'),
            data: {
                shippingId:shippingId
            },
            success: resolve,
            error: reject
        });
    },

    // 删除地址
    deleteAddress: function(addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/del.do'),
            data: addressInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },

}
module.exports = _address;