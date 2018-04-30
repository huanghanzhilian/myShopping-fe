/*
* @Author: huanghanzhilian
* @Date:   2018-04-30 21:46:39
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-04-30 23:28:11
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _order           = require('service/order-service.js');
var templateIndex   = require('./index.string');
var Pagination      = require('util/pagination/index.js');

// page 逻辑部分
var page = {
	data:{
		listParam:{
			pageNum:1,
			pageSize:10
		},
	},
    init: function(){
        this.onLoad();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'order-list'
        });
        // 加载用户信息
        this.loadOrderList();
    },
    // 加载列表
    loadOrderList: function() {
        var orderListHtml = "";
        var _this = this;
        var $listCon=$('.order-list');
        $listCon.html('<div class="loading"></div>')
        _order.getOrderList(_this.data.listParam, function(res) {
        	_this.dataFilter(res)
        	orderListHtml=_mm.renderHtml(templateIndex, res);

        	$listCon.html(orderListHtml)
            // html = _mm.renderHtml(templateIndex, res.data);
            // $(".order-list-con").html(html);
            
            _this.loadPagination({
                hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
            });
        }, function(errMsg) {
        	console.log(1)
        	$listCon.html('<p class="err-tip">加载订单失败，请刷新后重试</p>')
        });
    },
    //数据适配器
    dataFilter:function(data){
    	data.isEmpty=!data.list.length;
    },
    // 加载分页信息
    loadPagination : function(pageInfo){
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container : $('.pagination'),
            onSelectPage : function(pageNum){
                _this.data.listParam.pageNum = pageNum;
                _this.loadOrderList();
            }
        }));
    }
};
$(function(){
    page.init();
});