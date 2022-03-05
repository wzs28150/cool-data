const gulp = require("gulp")
const less = require('gulp-less')
const minifyCSS = require('gulp-minify-css')
const del = require('del');

gulp.task("less", async function() {
  await del(['dist/css']);    
  return gulp.src("components/css/**/*.less")    
    .pipe(less())
    .pipe(minifyCSS())    
    .pipe(gulp.dest("dist/css"))
})