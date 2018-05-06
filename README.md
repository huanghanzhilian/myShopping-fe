# 做一个电商项目

## 使用技术

jQuery + webpack + style-loader 前后端分离 电商项目


## 项目运行


```
项目运行之前，请确保系统已经安装以下应用
1、node (6.0 及以上版本)
2、全局安装 webpack webpack-dev-server
```

```
git clone https://github.com/huanghanzhilian/myShopping-fe.git

cd myShopping-fe 

npm install

npm run dev

访问: http://localhost:8088
```



## 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^ 

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR

>  项目交流群：476190214(QQ)

>  此项目总结了一些技术文档，可以去我的博客看看。[地址在这里](http://huanghanlian.com/)


## 效果演示

暂未上线，请等待，近期会发布到线上提供预览


## 目标功能

- [x] 登陆、登出功能
- [x] 注册
- [x] 加入、删除、修改购物
- [x] 新增、修改、删除收货地址
- [x] 下单功能
- [x] 支付功能 -- 由于没权限申请到蚂蚁金服支付宝开发接口,因此只是模拟支付.
- [x] 商品详情
- [x] 个人中心
- [x] 订单列表



## 续

- <del>更多的功能后期还会陆续的补上.</del>
- <del>更多的细节会陆续修复.代码会陆续优化.</del>
- 会尽快出node后台服务 提供数据
- 由于作者精力有限，后续可能只会修复某些bug
- 秉着学习的态度,感谢大家.


## 项目布局

```
.

├── src                                         // 源码目录 所有业务代码
│   ├── page                              		// 逻辑层/存放脚本和样式
│   ├── view                              		// 逻辑层/存放页面
│   │   ├── layout
│   │   │   └── footer.html                     // 底部通用footer组件
│   │   │   └── head-common.html                // 通用meat信息
│   │   │   └── head.html                       // 通用搜索组件
│   │   │   └── nav-side.html                   // 通用侧边栏索引组件
│   │   │   └── nav-simple.html                 // 通用logo组件
│   │   │   └── nav.html                        // 通用顶部用户信息状态组件
│   │   ├── index                               // 首页
│   │   ├── list                                // 商品列表页
│   │   ├── detail                              // 商品详情页
│   │   ├── cart                                // 购物车
│   │   ├── order-confirm                       // 订单确认页
│   │   ├── order-list                          // 订单列表页
│   │   ├── order-detail                        // 订单详情页
│   │   ├── payment                             // 订单支付页
│   │   ├── user-login                          // 登录页
│   │   ├── user-register                       // 用户注册
│   │   ├── user-pass-reset                     // 找回密码
│   │   ├── user-center                         // 个人中心
│   │   ├── user-center-update                  // 修改个人信息
│   │   ├── user-pass-update                    // 修改密码
│   │   ├── result                              // 操作结果
│   ├── service                              	// 数据层内容
│   ├── util                              		// 工具层
│   │   │   └── mm.js                           // 通用工具类
│   │   │   └── citys                           // 城市数据
│   │   │   └── pagination                      // 分页组件
│   │   │   └── slider                          // 轮播图组件
│   ├── image                              		// 需要用到的图片
│   ├── dist                              		// 构建工具最终打包到dist目录
.

```



