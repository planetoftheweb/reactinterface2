var gulp = require('gulp'),
  webserver = require('gulp-server-io'),
  folderIndex = require('gulp-folder-index'),
  source = './dist/',
  dest = './dist/';

function html() {
  return gulp.src(dest + '**/*.html');
}

function js() {
  return gulp.src(dest + '**/*.js');
}

function styles() {
  return gulp.src(dest + '**/*.css');
}

function slides() {
  return gulp
    .src(source + 'slides/**/*.md')
    .pipe(
      folderIndex({
        extension: '.md',
        filename: 'index.json'
      })
    )
    .pipe(gulp.dest(dest + 'slides'));
}

function watch() {
  gulp.watch(source + '**/*.js', js);
  gulp.watch(source + '**/*.css', styles);
  gulp.watch(source + '**/*.html', html);
  gulp.watch(source + 'slides/**/*.md', slides);
}

function server() {
  return gulp.src(dest).pipe(
    webserver({
      serverReload: {
        dir: dest
      },
      port: 3232,
      open: true
    })
  );
}

var build = gulp.series(
  gulp.parallel(slides, js, styles, html),
  server,
  watch
);

gulp.task('default', build);
