const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const gutil = require('gulp-util');
var files = ['index.js', 'gulpfile.js', './lib/**/*.js'];

// to fix issues with streams:
// Workaround for https://github.com/gulpjs/gulp/issues/71
// var origSrc = gulp.src;
// gulp.src = function() {
//     return fixPipe(origSrc.apply(this, arguments));
// };
// function fixPipe(stream) {
//     var origPipe = stream.pipe;
//     stream.pipe = function(dest) {
//         arguments[0] = dest.on('error', (error) => {
//             var nextStreams = dest._nextStreams;
//             if (nextStreams) {
//                 nextStreams.forEach((nextStream) => {
//                     nextStream.emit('error', error);
//                 });
//             } else if (dest.listeners('error').length === 1) {
//                 throw error;
//             }
//         });
//         var nextStream = fixPipe(origPipe.apply(this, arguments));
//         (this._nextStreams || (this._nextStreams = [])).push(nextStream);
//         return nextStream;
//     };
//     return stream;
// }
//
//
gulp.task('mocha', () => {
  return gulp.src('test/**/router_test.js')
  .pipe(mocha());
  // .on('error', (error) => {
  //   console.error('' + error);
  // });
});

gulp.task('watch-mocha', () => {
  gulp.watch(['lib/**/*.js', 'test/**/router_test.js'], ['mocha']);
});

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  return gulp.src('./test/**/router_test.js')
  .pipe(mocha())
  .pipe(eslint())
  .pipe(eslint.format());
});


gulp.task('default', ['lint', 'watch-mocha', 'lint:test']);
gulp.watch(files, ['lint']);
