const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
var files = ['**', '**/*']
gulp.task('mocha', () => {
  return gulp.src(['test/*.js'], { read: false })
  .pipe(mocha({ reporter: 'nyan'}))
  .on('error', gutil.log);
});

gulp.task('watch-mocha', () => {
  gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('default', ['lint', 'watch-mocha']);
