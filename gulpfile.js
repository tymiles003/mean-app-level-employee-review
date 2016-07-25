var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('build-css', function() {
	return gulp.src('public/src/scss/*.scss')
	.pipe(watch('public/src/scss/*.scss'))
	.pipe(sass())
	.pipe(gulp.dest('public/built/styles/'));
});