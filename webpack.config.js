var webpack= require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';
/**
 * 获取html-webpack-plugin参数的方法
 */
var getHtmlConfig=function(name,title){
    return {
        filename: 'view/'+ name +'.html',//放置目标文件的位置
        template:'./src/view/'+ name +'.html',  //模板，html原始模板路径
        inject:'body',//inject: 引入模块的注入位置；取值有true/false/body/head；true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中
        hash:true,
        title:title,
        chunks:['common',name]//需要打包的模块
    }
}

// webpack config
var config = {
    // entry是入口文件，可以多个，代表要编译那些js
    //entry:['./src/main.js','./src/login.js','./src/reg.js'],
    entry: {
        "common":["./src/page/common/index.js"],
        "index":"./src/page/index/index.js",
        'list'              : ['./src/page/list/index.js'],
        'detail'            : ['./src/page/detail/index.js'],
        'cart'              : ['./src/page/cart/index.js'],
        'user-login'        : ['./src/page/user-login/index.js'],
        'user-register'     : ['./src/page/user-register/index.js'],
        'user-pass-reset'   : ['./src/page/user-pass-reset/index.js'],
        'user-center'       : ['./src/page/user-center/index.js'],
        'user-center-update': ['./src/page/user-center-update/index.js'],
        'user-pass-update'  : ['./src/page/user-pass-update/index.js'],
        'result': ['./src/page/result/index.js'],
    },//入口文件
    output: {//输出信息
        path: "./dist",//存放路径 目录名称   // 输出到那个目录下（__dirname当前项目目录）
        publicPath:"/dist",//访问文件时候用的路径
        filename: "js/[name].js"//输出文件   //最终打包生产的文件名
    },
    externals:{//引入外部资源作为项目文件模块化引用
        'jquery':'window.jQuery'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            //{ test: /\.css$/, loader: "style-loader!css-loader"}
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit:10,name:resource/[name].[ext]'
            },
            { test: /\.string$/, loader: 'html-loader'}
        ]
    },
    resolve: {
        alias: {
            node_modules    : __dirname + '/node_modules',
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image',
        }
    },
    //插件
    plugins:[
        //独立通用模块到js/base.js
        //将供应商JS拆分到自己的文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: "js/base.js"//输出文件
        }),
        //把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
        new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表页')),
        new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情页')),
        new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车')),
        new HtmlWebpackPlugin(getHtmlConfig('user-login','登录页')),
        new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
        new HtmlWebpackPlugin(getHtmlConfig('result','操作结果')),
    ]
}
if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;