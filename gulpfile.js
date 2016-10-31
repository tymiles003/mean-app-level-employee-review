'use strict';

var args = require('yargs').argv;
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var browsersync = require('browser-sync').create();
var clean = require('gulp-clean');
var glob = require('glob');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var util = require('gulp-util');

var jsFiles = glob.sync('./+(app|public)/**/*.js');
var sassFiles = glob.sync('./public/src/scss/**/*.scss');

gulp.task('clean', function() {
	return gulp.src('./public/built/')
			.pipe(clean({force: true}));
});


gulp.task('lint', function() {
	return gulp.src(jsFiles)
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
});


gulp.task('styles', function() {
	return gulp.src(sassFiles)
			.pipe(gulpif(args.sourcemaps, sourcemaps.init()))
			.pipe(sass({
				includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets/'],
				'default-encoding': 'UTF-8',
				errLogToConsole: true,
				outputStyle: (args.debug) ? 'expanded' : 'compressed'
			}).on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: [
				'last 2 versions',
				'Android 2.3',
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 8',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6'
			]}))
			.pipe(rename({suffix: '.built'}))
			.pipe(gulpif(args.sourcemaps, sourcemaps.write('../../../tmp/sourcemaps')))
			.pipe(gulp.dest('./public/built/styles/'))
			.pipe(gulpif(args.watch, browsersync.stream()));
});


gulp.task('js', function() {
	return gulp.src(jsFiles)
			.pipe(gulpif(args.sourcemaps, sourcemaps.init({loadMaps: true})))
			.pipe(rename({suffix: '.built'}))
			.pipe(gulpif(args.sourcemaps, sourcemaps.write('../../tmp/sourcemaps')))
			.pipe(gulp.dest('./built/scripts/'));
});


gulp.task('js-watch', ['lint'], function(done) {
    browsersync.reload();
    done();
});


gulp.task('serve', function() {
	browsersync.init({
		proxy: 'http://localhost:3000/'
	});

	if (args.watch) {
		gulp.watch(sassFiles, ['styles']);
		gulp.watch(jsFiles, ['js-watch']);
	}
});

// Default Task
gulp.task('dev', ['clean', 'lint', 'styles', 'serve']);
gulp.task('default', ['dev']);
