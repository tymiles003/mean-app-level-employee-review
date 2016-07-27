var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('watch', function() {
	gulp.watch('public/src/**/*.scss', [sass]);
});

gulp.task('styles', function() {
	return gulp.src('public/src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/built/styles/'));
});

// Default Task
gulp.task('default', ['styles']);