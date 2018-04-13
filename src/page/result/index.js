/*
* @Author: Rosen
* @Date:   2017-05-19 21:52:46
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-04-14 03:20:47
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})