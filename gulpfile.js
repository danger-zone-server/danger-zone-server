const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const gutil = require('gulp-util');
var files = ['index.js', 'gulpfile.js', './lib/**/*.js'];

gulp.task('mocha', () => {
  return gulp.src('test/**/*.js')
  .pipe(mocha());
});

gulp.task('watch-mocha', () => {
  gulp.watch(['lib/**/*.JS', 'test/**/*.JS'], ['mocha']);
});

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*test.js')
  .pipe(mocha())
  .pipe(eslint())
  .pipe(eslint.format());
});


gulp.task('default', ['lint', 'watch-mocha', 'lint:test']);
gulp.watch(files, ['lint']);
