const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const gutil = require('gulp-util');
var files = ['index.js', 'gulpfile.js', './lib/**/*.js'];

gulp.task('mocha', () => {
  return gulp.src('test/**/router_test.JS')
  .pipe(mocha());
});

gulp.task('watch-mocha', () => {
  gulp.watch(['lib/**/*.JS', 'test/**/router_test.JS'], ['mocha']);
});

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('default', ['lint', 'watch-mocha']);
