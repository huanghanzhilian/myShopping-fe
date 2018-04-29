/*
* @Author: huanghanzhilian
* @Date:   2018-04-29 10:58:14
* @Last Modified by:   huanghanzhilian
* @Last Modified time: 2018-04-29 10:59:33
*/
'use strict';

var _mm = require('util/mm.js');

var _order = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },

}
module.exports = _order;