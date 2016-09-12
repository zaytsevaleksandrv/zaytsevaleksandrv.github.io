'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var timer;
gulp.task('sass', function () {
	clearTimeout(timer);
	timer = setTimeout(function(){
	  gulp.src('sass/style.scss')
		.pipe(sourcemaps.init())
		// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
				browsers: ["> 0%"],
				cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css'));
	}, 1000);
});

gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task("default", [
    "sass",
    "sass:watch",
]);