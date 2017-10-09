//index.js
//require('./cats.js');

var _mm=require('util/mm.js');
//ajax使用
/*_mm.request({
	url:'http://m.samured.com/api/mobile/index/videos?pageNum=1&querySize=8',
	success:function(res){
		console.log(res)
	},
	error:function(errMsg){
		console.log(errMsg)
	}
});*/
//获取服务器地址使用
/*console.log(_mm.getUrlParam('test'));
console.log(_mm.getUrlParam('test1'));*/

//渲染html方法使用
var html='<div>{{data}}</div>';
var data={
	data:'test'
}
console.log(_mm.renderHtml(html,data));
console.log("hello")

