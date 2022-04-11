<!--
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2020-04-14 18:51:05
 * @LastEditors: wzs
 * @LastEditTime: 2020-04-15 17:12:16
 -->

# cooldatav-cli

A cli for cooldatav~

> 一个快速生成项目的插件

## 项目结构

```javascript
.
├── bin           //命令配置
├── README.md     //说明文档
├── index.js      //主入口
├── src           //功能文件
├── package.json  //包信息
└── test          //测试用例
```

## Install

```javascript
$ npm i cooldatav-cli -g
```

## Useage

> 目前只支持小程序,其他项目陆续加入

* 创建项目： ```cooldatav i [你的项目名称]``` 自动创建站点文件夹,自动安装依赖
* 创建页面： ```cooldatav -p [你的页面名称]``` 自动创建页面所需文件

* 创建组件： ```cooldatav -c [你的组件名称]``` 自动创建组件所需文件  

* 创建接口： ```cooldatav -a [你的接口名称]``` 自动创建接口所需文件  

## License

Licensed under MIT

Copyright (c) 2019-2020 wzs
