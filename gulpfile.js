var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin');



gulp.task('htmlm', function() {
  return gulp.src('app/normal/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app/compressed'));
});


gulp.task('sass', function () {
  return gulp.src('app/normal/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('app/compressed/styles/'));
});

gulp.task('jsm', function () {
    gulp.src('app/normal/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/compressed/js'));
});

gulp.task('build', ['sass','jsm','htmlm'] ,function () {

});

gulp.task('watch', function() {
    gulp.watch('app/normal/styles/*.scss', ['sass']);
    gulp.watch('app/normal/js/main.js', ['jsm']);
    gulp.watch('app/normal/*.html', ['htmlm']);
});

/*global require*/










