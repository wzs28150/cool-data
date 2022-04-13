import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import image from "@rollup/plugin-image";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import {uglify} from 'rollup-plugin-uglify';
import cleanup from 'rollup-plugin-cleanup';
import vuePlugin from "rollup-plugin-vue";
import fs from "fs"; // 写文件
import { resolve, relative, basename, dirname } from "path";

const input = resolve(__dirname, "../packages"); // 入口文件
const output = resolve(__dirname, "../lib"); // 输出文件
const geFileList = (path) => {
  let filesList = [];
  let filesListArray = [];
  readFile(path, filesList);
  for (let i = 0; i < filesList.length; i++) {
    let item = filesList[i];
    let itemPath = relative(input, item.path);
    let itemPathLength = "";
    let name = basename(item.path);
    let inputDir = dirname(item.path);
    let outputDir = itemPath.substring(0, itemPath.lastIndexOf("\\"));
    if (process.platform == "darwin") {
      itemPathLength = itemPath.split("/").length;
    } else if (process.platform == "win32") {
      itemPathLength = itemPath.split("\\").length;
    }

    if (itemPathLength >= 3 && name == "index.js") {
      console.log(name, inputDir, outputDir);
      filesListArray.push({
        name,
        inputDir,
        outputDir,
      });
    }
  }
  return filesListArray;
};
const readFile = (path, filesList) => {
  const files = fs.readdirSync(path); //需要用到同步读取
  files.forEach(walk);
  function walk(file) {
    const states = fs.statSync(path + "/" + file);
    // console.log(file,states.isDirectory(),states);
    if (states.isDirectory()) {
      readFile(path + "/" + file, filesList);
    } else {
      //创建一个对象保存信息
      let obj = new Object();
      obj.size = states.size; //文件大小，以字节为单位
      obj.name = file; //文件名
      obj.path = path + "/" + file; //文件绝对路径
      filesList.push(obj);
    }
  }
};
let config = []
// config = geFileList(input).map(({ name, inputDir, outputDir }) => ({
//   input: `${inputDir}/index.js`,
//   external: ["vue", "echarts", "particles.vue3"],
//   plugins: [
//     nodeResolve(),
//     image(),
//     vuePlugin(),
//     babel({
//       runtimeHelpers: true,
//       exclude: "node_modules/**",
//       presets: ["@babel/preset-env"],
//     }),
//     commonjs(),
//     terser({
//       format: {
//         comments: false,
//       },
//     }),
//     cleanup()
//   ],
//   output: {
//     name: "index",
//     file: `${output}/${outputDir}/index.js`,
//     format: "es",
//   },
// }));
config.push({
  input: `${input}/index.js`,
  external: ["vue", "echarts", "particles.vue3"],
  globals: {
    vue: "Vue", // 我们的仓库实际依赖vue, vue是不需要打包的，所以这里说明我们用了一个全局变量vue
  },
  plugins: [
    nodeResolve(),
    vuePlugin(),
    image(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    commonjs(),
    terser({
      format: {
        comments: false,
      },
    }),
    uglify(),
    cleanup()
  ],
  output: [
    {
      name: "CoolDataPlus",
      file: `${output}/index.js`,
      format: "es",
      sourcemap: true,
    },
    // {
    //   file: `${output}/index.umd.js`,
    //   // exports: "default",
    //   name: "CoolData",
    //   // sourcemap: true,
    //   format: "umd",
    //   globals: {
    //     vue: "vue",
    //   },
    //   exports: 'named'
    // },
  ],
});

config.push({
  input: `${input}/chart.js`,
  external: ["vue", "echarts", "particles.vue3"],
  globals: {
    vue: "Vue",
    echarts: "echarts"
  },
  plugins: [
    nodeResolve(),
    vuePlugin(),
    image(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    commonjs(),
    terser({
      format: {
        comments: false,
      },
    }),
    uglify(),
    cleanup()
  ],
  output: [
    {
      name: "CoolDataPlusChart",
      file: `${output}/chart.js`,
      format: "es",
      sourcemap: true,
    },
    // {
    //   file: `${output}/index.umd.js`,
    //   // exports: "default",
    //   name: "CoolData",
    //   // sourcemap: true,
    //   format: "umd",
    //   globals: {
    //     vue: "vue",
    //   },
    //   exports: 'named'
    // },
  ],
});
export default config;
