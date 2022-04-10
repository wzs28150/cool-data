const gulp = require('gulp')
const gulpCssmin = require('gulp-cssmin')
const del = require('del')

// 打包配置
const config = {
  input: '../packages/css/',
  fontInput: '../packages/fonts/',
  output: '../lib/css',
  fontOutput: '../lib/fonts/',
  bgInput: '../packages/background/background/bg/',
  bgOutput: '../lib/css/bg/'
}
// 导出配置项
exports.config = config
// 复制字体
exports.copyfont = () => gulp.src([`${config.fontInput}/*`, `!${config.fontInput}/*.less`]).pipe(gulp.dest(`${config.fontOutput}/`))
exports.copybg = () => gulp.src([`${config.bgInput}/*`, `!${config.fontInput}/*.less`]).pipe(gulp.dest(`${config.bgOutput}/`))
// 压缩font 里的 CSS
// exports.minifontCss = () =>
//   gulp
//     .src(`${config.input}fonts/*.css`)
//     .pipe(gulpCssmin())
//     .pipe(gulp.dest(`${config.output}/fonts`))
// 删除之前css打包文件
exports.clean = done => {
  del(
    ['*.css', 'fonts'].map(name => `${config.output}/${name}`),
    { force: true }
  )
  done()
}
