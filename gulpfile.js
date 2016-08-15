var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

var path = {
	publicControllers: './public/controllers/',
	publicServices: './public/services/',
	publicRoutes: './public/routes/',
	appControllers: './app/controllers/',
	appModels: './app/models/',
	appRoutes: './app/routes/',
}

gulp.task('watch', function() {
	gulp.watch('public/src/**/*.scss', [sass]);
});

gulp.task('styles', function() {
	return gulp.src('public/src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/built/styles/'));
});

gulp.task('lint', function() {
	return gulp.src([
		path.publicControllers + '*.js',
		path.publicServices + '*.js',
		path.publicRoutes + '*.js',
		path.appControllers + '*.js',
		path.appModels + '*.js',
		path.appRoutes + '*.js'
	])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// Default Task
gulp.task('default', ['styles']);