var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "common":["./src/page/common/index.js"],
        "index":["./src/page/index/index.js"],
        "login":["./src/page/login/login.js"]
    },//入口文件
    output: {//输出信息
        path: "./dist",//目录名称
        filename: "js/[name].js"//输出文件
    },
    externals:{//引入外部资源作为项目文件模块化引用
        'jquery':'window.jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader!css-loader")}
        ]
    },
    //插件
    plugins:[
        //将供应商JS拆分到自己的文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: "js/base.js"//输出文件
        }),
        new ExtractTextPlugin({
            filename:"css/[name].css"
        }),
    ]
};