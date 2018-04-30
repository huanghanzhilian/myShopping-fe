/*
* @Author: huanghanzhilian
* @Date:   2018-05-01 01:07:09
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-05-01 01:46:19
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm             = require('util/mm.js');
var _payment           = require('service/payment-service.js');
var templateIndex   = require('./index.string');

// page 逻辑部分
var page = {
	data:{
		orderNumber:_mm.getUrlParam('orderNumber')
	},
    init: function(){
        this.onLoad();
    },
    onLoad : function(){
        
        // 加载订单信息
        this.loadPaymentInfo();
    },
    
    // 加载订单数据
    loadPaymentInfo: function() {
        var paymentHtml = "";
        var _this = this;
        var $content=$('.pay-wrap');
        $content.html('<div class="loading"></div>')
        _payment.getPaymentInfo(_this.data.orderNumber, function(res) {
        	paymentHtml=_mm.renderHtml(templateIndex, res);
         	$content.html(paymentHtml)
         	_this.listernOrderStatus();
        }, function(errMsg) {
        	$content.html('<p class="err-tip">'+errMsg+'</p>')
        });
    },
    
    // 监听订单状态
    listernOrderStatus: function() {
        var _this = this;
        // 定期检查
        window.setInterval(function() {
            _payment.getOrderStatus(_this.data.orderNumber, function(res) {
                if (res.data === true) {
                    window.location.href = './result.html?type=payment&orderNumber=' + _this.data.orderNumber;
                }
            }, function(errMsg) {
                _mm.errorTips(errMsg);
            })
        }, 5000);
    }
    
};
$(function(){
    page.init();
});