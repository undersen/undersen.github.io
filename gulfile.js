var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var replace = require('gulp-replace');
var fs = require('fs');

var paths = {
  sass: ['./www/css/*.scss'],
  js: ['./www/js/Main.js', './www/js/Config.js', './www/js/Run.js', './www/js/*/*.js']
};

var ngConstants = JSON.parse(fs.readFileSync('.env'));

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('js', function (done) {
  gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(replace(/%\{(APP_\w+)\}/g, function(match, key){
        return ngConstants[key];
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/js/'))
    .on('end', done);
})

gulp.task('watch', function() {
  gulp.watch(paths.sass.concat(['./www/css/scss/*.scss']), ['sass']);
  gulp.watch(paths.js, ['js']);
});

