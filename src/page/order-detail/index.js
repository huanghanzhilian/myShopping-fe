/*
* @Author: huanghanzhilian
* @Date:   2018-04-30 23:37:40
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-05-01 00:43:31
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _order           = require('service/order-service.js');
var templateIndex   = require('./index.string');

// page 逻辑部分
var page = {
	data:{
		orderNumber:_mm.getUrlParam('orderNumber')
	},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'order-list'
        });
        // 加载订单信息
        this.loadDetail();
    },
    bindEvent : function(){
        var _this = this;
        //地址的选择
        $(document).on('click', '.order-cancel', function(){
            if(window.confirm('确定要取消该订单吗？')){
                _order.orderCancal(_this.data.orderNumber, function(res) {
                    _mm.successTips('订单取消成功')
                    _this.loadDetail();
                }, function(errMsg) {
                    _mm.errorTips(errMsg)
                });
            }
        });
    },
    // 加载订单数据
    loadDetail: function() {
        var orderDetailHtml = "";
        var _this = this;
        var $content=$('.right-con');
        $content.html('<div class="loading"></div>')
        _order.getOrderDetail(_this.data.orderNumber, function(res) {
            _this.dataFilter(res)
        	orderDetailHtml=_mm.renderHtml(templateIndex, res);

         	$content.html(orderDetailHtml)
            
        }, function(errMsg) {
        	$content.html('<p class="err-tip">'+errMsg+'</p>')
        });
    },
    //数据适配器
    dataFilter:function(data){
        data.needPay=data.status===10;
        data.isCancelable=data.status===10;
    },
    
};
$(function(){
    page.init();
});