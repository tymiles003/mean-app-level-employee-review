'use strict';

var args = require('yargs').argv,
	autoprefixer = require('gulp-autoprefixer'),
	browserify = require('browserify'),
	browsersync = require('browser-sync').create(),
	buffer = require('vinyl-buffer'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	fs = require('fs-extra'),
	glob = require('glob'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	jshint = require('gulp-jshint'),
	rename = require('gulp-rename'),
	runSequence = require('run-sequence').use(gulp),
	sass = require('gulp-sass'),
	source = require('vinyl-source-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	stylish = require('jshint-stylish'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	util = require('gulp-util'),
	shell = require('gulp-shell');

var sassFiles = glob.sync('./src/scss/**/*.scss');
var scriptFiles = glob.sync('./+(app|src)/**/!(example-)*.js');
var htmlFiles = glob.sync('./src/views/*.html');

gulp.task('mongod', shell.task([
	// 'mongod'
]));

gulp.task('clean', function cleanTask() {
	return gulp.src(['./dist/', './tmp/'])
			.pipe(clean({force: true}));
});

gulp.task('lint-scripts', function lintScriptsTask() {
	return gulp.src(scriptFiles)
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
			// .pipe(jshint.reporter('fail'));
});

gulp.task('styles', function stylesTask() {
	return gulp.src(sassFiles)
			.pipe(gulpif(args.sourcemaps, sourcemaps.init()))
			.pipe(sass({
				includePaths: [
				'./node_modules/bootstrap-sass/assets/stylesheets/',
				],
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
			.pipe(gulpif(args.sourcemaps, sourcemaps.write('../../tmp/sourcemaps')))
			.pipe(gulp.dest('./dist/styles/'))
			.pipe(gulpif(args.watch, browsersync.stream()));
});

gulp.task('assets', function assetsTask(done) {
    fs.copy('./src/assets', './dist/assets');
    fs.copy('./node_modules/bootstrap-sass/assets/fonts/bootstrap', './dist/assets/fonts/bootstrap')
    done();
});

gulp.task('views', function viewsTask(done) {
    fs.copy('./src/views', './dist/views');
    done();
});

gulp.task('scripts', function jsTask() {
	return browserify('./src/scripts/main.js', {
				insertGlobals: true,
				debug: (args.debug) ? true : false
			}).bundle()
			.pipe(source('main.built.js'))
			.pipe(buffer())
			// .pipe(gulpif(!args.debug, uglify()))
			.pipe(gulpif(args.sourcemaps, sourcemaps.init({loadMaps: true})))
			.pipe(gulpif(args.sourcemaps, sourcemaps.write('../../tmp/sourcemaps')))
			.pipe(gulp.dest('./dist/scripts/'))
});

gulp.task('script-watch', ['lint-scripts', 'scripts'], function jsWatchTask(done) {
    browsersync.reload();
    done();
});


gulp.task('watch', function serveTask() {
	gulp.watch(sassFiles, ['styles']);
	gulp.watch(scriptFiles, ['script-watch']);
	gulp.watch(htmlFiles, ['views']);
	gulp.watch('./src/assets', ['assets']);
});

gulp.task('dev', function devTask(callback) {
	runSequence(
		'clean',
		'assets',
		'views',
		'lint-scripts',
		'scripts',
  		'styles',
  		'watch',
  		'mongod',
  		callback);
});

gulp.task('default', function defaultTask(callback) {
	runSequence(
		'dev',
  		callback);
});
