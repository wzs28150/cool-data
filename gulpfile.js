const gulp = require("gulp")
const less = require('gulp-less')
const minifyCSS = require('gulp-minify-css')
const del = require('del');

gulp.task("less", async function() {
  await del(['dist/css']);    
  await del(['dist/fonts']);    
  copyFonts();
  return gulp.src("components/css/**/*.less")    
    .pipe(less())
    .pipe(minifyCSS())    
    .pipe(gulp.dest("dist/css"))
})

function copyFonts() {
  return gulp.src('components/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
}