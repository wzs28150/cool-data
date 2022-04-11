const path = require("path");

const cp = require("child_process");
const join = path.join;
const basename = path.basename;
const fs = require("fs");
const spawn = require("cross-spawn");

const existsSync = fs.existsSync;
const chalk = require("chalk");
const emptyDir = require("empty-dir");
const info = require("./logger").info;
const error = require("./logger").error;
const success = require("./logger").success;
const isCnFun = require("./utils").isCnFuc;
const checkAppName = require("./utils").checkAppName;
const isSafeToCreateProjectIn = require("./utils").isSafeToCreateProjectIn;

function init(args) {
  const cooldatavCli = chalk.bold.cyan("cooldatav CLI");
  let isCn = isCnFun(args.language);
  const customPrjName = args.project || "";
  const templateName = args.template || "";
  const dest = join(process.cwd(), customPrjName);
  const projectName = basename(dest);
  const mirror = args.mirror;

  isCn = true;
  console.log(cooldatavCli + (!isCn ? " is booting... " : " 正在启动..."));
  console.log(
    cooldatavCli +
      (!isCn ? " will execute init command... " : " 即将执行 init 命令...")
  );
  checkAppName(projectName);
  if (existsSync(dest) && !emptyDir.sync(dest)) {
    if (!isSafeToCreateProjectIn(dest, projectName)) {
      process.exit(1);
    }
  }

  createApp();

  function createApp() {
    console.log(
      chalk.bold.cyan("cooldatav CLI") +
        (!isCn
          ? " will creating a new cooldatav app in "
          : " 即将创建一个新的应用在 ") +
        dest
    );
    let url = "";
    switch (templateName) {
      case "vue3":
        url = "https://gitee.com/harbin_kuchuang_network_wz666s/cool-data.git";
        down(url, 'vue3-project');
        break;
      case "vue2":
        url = "https://gitee.com/harbin_kuchuang_network_wz666s/cool-data.git";
        down(url, 'vue2-project');
        break;
      case "c-vue3":
        url = "https://gitee.com/harbin_kuchuang_network_wz666s/cool-data.git";
        down(url, 'main');
        break;
      case "c-vue2":
        url = "https://gitee.com/harbin_kuchuang_network_wz666s/cool-data.git";
        down(url, 'vue2');
        break;
    }
  }

  function down(url, origin) {
    info("正在下载项目文件。。。", "请不要退出！！！");
    cp.exec(
      `git clone -b ${origin} ${url} ${customPrjName || "."}`,
      (error, stdout, stderr) => {
        console.log(error, stdout, stderr);
        if (error) {
          // 当有错误时打印出错误并退出操作
          error(`安装失败请重试!`);
        } else {
          try {
            if (existsSync(join(dest, "package.json"))) {
              const appPackage = require(join(dest, "package.json"));
              appPackage.name = projectName;
              fs.writeFile(
                join(dest, "package.json"),
                JSON.stringify(appPackage, null, 2),
                (err) => {
                  if (err) return console.log(err);
                }
              );
              process.chdir(customPrjName || ".");

              // install ndoe package modules
              info("正在安装依赖", "你可以使用 ctrl + c 退出，然后自行安装。");
              console.log();
              require("./install")(mirror, done); // npm install
            } else {
              done();
            }
            const gitPath = join(dest, ".git");
            if (existsSync(gitPath)) {
              // spawn.sync("rm", ["-rf", gitPath]);
              delDir(gitPath);
            }
          } catch (error) {}
        }
      }
    );
  }



  function delDir(p) {
    // 读取文件夹中所有文件及文件夹
    var list = fs.readdirSync(p);
    list.forEach((v, i) => {
      // 拼接路径
      var url = p + "/" + v;
      // 读取文件信息
      var stats = fs.statSync(url);
      // 判断是文件还是文件夹
      if (stats.isFile()) {
        // 当前为文件，则删除文件
        fs.unlinkSync(url);
      } else {
        // 当前为文件夹，则递归调用自身
        arguments.callee(url);
      }
    });
    // 删除空文件夹
    fs.rmdirSync(p);
  }

  function done() {
    console.log();
    success(`跳转目录: cd ${projectName}`);
    console.log();
    success("运行项目: npm run dev");
    console.log();
    success("运行项目: npm run serve(同时启动案例及文档)");
    console.log();
    // success("生成页面: cooldatav -p [name]");
    // console.log();
    // success("生成组件: cooldatav -c [name]");
    // console.log();
    // success("生成接口: cooldatav -a [name]");
    // console.log();
    success(`恭喜你! "${projectName}"项目初始化成功! `);
    console.log();
    console.log();
  }

  function tp5done() {
    console.log();
    success(`跳转目录: cd ${projectName}`);
    console.log();
    // success("生成页面: cooldatav -p [name]");
    // console.log();
    // success("生成组件: cooldatav -c [name]");
    // console.log();
    // success("生成接口: cooldatav -a [name]");
    // console.log();
    success(`恭喜你! "${projectName}"项目初始化成功! `);
    console.log();
    console.log();
  }

  function pcmdone() {
    console.log();
    success(`跳转目录: cd ${projectName}`);
    console.log();
    // success("生成页面: cooldatav -p [name]");
    // console.log();
    // success("生成组件: cooldatav -c [name]");
    // console.log();
    // success("生成接口: cooldatav -a [name]");
    // console.log();
    success(`恭喜你! "${projectName}"项目初始化成功! `);
    console.log();
    console.log();
  }

  function wapmdone() {
    console.log();
    success(`跳转目录: cd ${projectName}`);
    console.log();
    const child = spawn("cd", [`cd ${projectName}`], {
      stdio: "inherit",
    });
    success("初始化页面: npm run init(请先配置page.js)");
    console.log();
    success("运行开发: npm run dev");
    console.log();
    // success("打包并生成压缩包: npm run build");
    // console.log();
    success(`恭喜你! "${projectName}"项目初始化成功! `);
    console.log();
    console.log();
  }
}

module.exports = init;
