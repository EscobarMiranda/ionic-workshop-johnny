var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var inject = require('gulp-inject');
var jscs = require('gulp-jscs');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./www/app/**/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

// Check code syntax
gulp.task('review', function() {
  return gulp.src(['www/app/**/*.js', 'www/specs/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter());
});

// Fill index
gulp.task('build-index', function() {
  var target = gulp.src('./www/index.html');
  var sources = gulp.src(['./www/app/app.module.js',
                          './www/app/core/core.module.js',
                          './www/app/**/*.module.js',
                          './www/app/**/*.js',
                          './www/css/**/*.css',
                          'lib/firebase/firebase.js',
                          'lib/angularfire/angularfire.min.js'], {read: false});

  return target.pipe(inject(sources, {relative: true}))
      .pipe(gulp.dest('./www'));

});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
