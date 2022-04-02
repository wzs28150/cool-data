
import nodeResolve from '@rollup/plugin-node-resolve' 
import vue from 'rollup-plugin-vue'
import { readdirSync } from 'fs' // 写文件
import { resolve } from 'path'

const input = resolve(__dirname, '../packages') // 入口文件
const output = resolve(__dirname, '../lib') // 输出文件

const config = readdirSync(input).filter(name => !['css', 'index.js'].includes(name))
.map(name => ({
  input: `${input}/${name}/index.js`,
  external: ['vue'],
  plugins: [
    nodeResolve(),
    vue()
  ],
  output: {
    name: 'index',
    file: `${output}/${name}/index.js`,
    format: 'es'
  }
}))

config.push({
  input: `${input}/index.js`,
  external: ['vue'],
  plugins: [
    nodeResolve(),
    vue(),
    // typescript({
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       declaration: false
    //     },
    //     exclude: ['node_modules', 'examples', 'mobile', 'tests']
    //   },
    //   abortOnError: false,
    //   clean: true
    // })
  ],
  output: {
    name: 'index',
    file: `${output}/index.js`,
    format: 'es'
  }
})
export default config