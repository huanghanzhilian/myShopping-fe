/*
* @Author: Rosen
* @Date:   2017-05-19 21:52:46
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-05-01 02:01:36
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    if(type==='payment'){
    	var orderNumder=_mm.getUrlParam('orderNumber');
    	var $orderNumder=$element.find('.orderNumber');
    	$orderNumder.attr('href',$orderNumder.attr('href')+orderNumder)
    }
    // 显示对应的提示元素
    $element.show();
})