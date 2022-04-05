const http = require("http");
//创建服务器
const app = http.createServer();
//导入处理url参数的模块
const url = require("url");
//导入路径拼接的模块
const path = require("path");
// 导入读取文件的模块
const fs = require("fs");

const cp = require("child_process");
const cmdStr = 'npm run dev';
cp.exec(cmdStr)

//我这里使用的是箭头函数 这里是给app 绑定了 request 响应事件，函数的参数分别是 request 请求参数，和respond 相应参数
app.on("request", (req, res) => {
  //获取路径名称
  var pathName = url.parse(req.url).pathname;
//   console.log(pathName);
  if (pathName == "/cool-data/docs/") {
    pathName = "/cool-data/docs/index.html"; // 默认打开的文件
  }

  //真实路径 = 当前路径+'public'+pathName
  var realPath = path.join(__dirname, "../" + pathName);
  // 使用fs.readFile()读取文件内容
  fs.readFile(realPath, (error, result) => {
    //使用res.end()响应到页面中
    res.end(result);
  });
});

//监听端口号 每次创建服务器这个是必须的
app.listen(3001);

cp.exec("start http://127.0.0.1:3001/cool-data/docs/index.html");
// cp.exec("start http://127.0.0.1:3001/cool-data/case/index.html");



//在控制台中输出创建成功
console.log("服务器创建成功");

const cmdStr1 = 'npm run show:case';
cp.exec(cmdStr1)


