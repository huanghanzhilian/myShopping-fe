/*
* @Author: huanghanzhilian
* @Date:   2018-04-29 10:23:41
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-04-30 19:20:38
*/
'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var _mm             = require('util/mm.js');
var _order          = require('service/order-service.js');
var _address          = require('service/address-service.js');
var addressModal = require("./address-modal.js");
var templateProduct   = require('./product-list.string');
var templateAddress   = require('./address-list.string');

var page = {
    data : {
        selectedAddressId:null
    },
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
   	onLoad : function(){
   		this.loadAddressList();
        this.loadProductList();
    },
    bindEvent : function(){
        var _this = this;
        //地址的选择
        $(document).on('click', '.address-item', function(){
            $(this).addClass('active').siblings('.address-item').removeClass('active')
            _this.data.selectedAddressId=$(this).data('id')
        });
        // 订单的提交
        $(document).on('click', '.order-submit', function(){
            var shippingId=_this.data.selectedAddressId;
            if(shippingId){
            	_order.createOrder({
            		shippingId:shippingId
            	},function(res){
		        	window.location.href='./payment.html?orderNumber='+res.orderNo
		        }, function(errMsg){
		        	_mm.errorTips(errMsg)
		        })
            }else{
            	_mm.errorTips('请选择地址后在提交')
            }
        });

        //添加新地址
        $(document).on("click", ".address-add", function() {
            addressModal.show({
                isUpdate: false,
                onSuccess: function() {
                    _this.onLoad();
                }
            })
        });

        //编辑地址
        $(document).on("click", ".address-update", function(e) {
        	// 阻止事件冒泡
            e.stopPropagation();
        	//console.log(shippingId)
        	// 先进行请求获得id
            var shippingId = $(this).parents(".address-item").data("id");
        	_address.getAddress(shippingId,function(res){
        		addressModal.show({
	                isUpdate: true,
	                data:res,
	                onSuccess: function() {
	                    _this.onLoad();
	                }
	            })
        	},function(errMsg){
        		_mm.errorTips(errMsg)
        	})
            
        });

        // $(document).on("click", ".address-delete", function(e) {
        //     var r = $(this)
        //       , s = r.parents(".address-item").data("id");
        //     e.stopPropagation(),
        //     window.confirm("确认要删除该地址？") && n.delete(s, function(e) {
        //         t.loadAddressList()
        //     }, function(t) {
        //         i.errorTips(t)
        //     })
        // }),
        // 删除地址
        $(document).on("click", ".address-delete", function(e) {
        	// 阻止事件冒泡
            e.stopPropagation();
            // 获取选择框id，进行删除操作
            var shippingId = $(this).parents(".address-item").data("id");
            if(window.confirm("确认要删除该地址？")){
            	_address.deleteAddress({
	                shippingId: shippingId
	            }, function(res) {
	                _this.onLoad();
	            }, function(errMsg) {
	                _mm.errorTips(errMsg);
	            });
            }
        });
		        
        
    },
    // 加载地址列表
    loadAddressList : function(){
        var _this       = this;
        $('.address-con').html('<div class="loading"></div>');
        // 获取地址列表
        _address.getAddressList(function(res){
        	_this.addressFilter(res)
        	var addressListHtml=_mm.renderHtml(templateAddress, res);
        	$('.address-con').html(addressListHtml);
        }, function(errMsg){
        	$('.address-con').html('<p class="err-tip">地址加载失败，请刷新后重试</p>');
        })
    },
    //处理地址列表中选中状态
    addressFilter:function(data){
    	if(this.data.selectedAddressId){
    		var selectedAddressIdFlag=false;
    		for (var i = 0,length=data.list.length; i < length; i++) {
    			if(data.list[i].id===this.data.selectedAddressId){
    				data.list[i].isActive=true;
    				selectedAddressIdFlag=true;
    			}
    		}
    		//如果以前选中的地址不在列表里，将其删除
    		if(!selectedAddressIdFlag){
    			this.data.selectedAddressId=null
    		}
    	}
    },
    //加载商品清单 
    loadProductList : function(){
        var _this       = this;
        $('.product-con').html('<div class="loading"></div>');
        // 获取地址列表
        _order.getProductList(function(res){
        	var productListHtml=_mm.renderHtml(templateProduct, res);
        	$('.product-con').html(productListHtml);
        }, function(errMsg){
        	$('.product-con').html('<p class="err-tip">商品信息加载失败，请刷新后重试</p>');
        })
    },
    // 渲染购物车
    // renderCart : function(data){
    //     this.filter(data);
    //     // 缓存购物车信息
    //     this.data.cartInfo = data;
    //     // 生成HTML
    //     var cartHtml = _mm.renderHtml(templateIndex, data);
    //     $('.page-wrap').html(cartHtml);
    //     // 通知导航的购物车更新数量
    //     nav.loadCartCount();
    // },
    
};
$(function(){
    page.init();
})