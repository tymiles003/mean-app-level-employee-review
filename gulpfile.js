'use strict';

var args = require('yargs').argv;
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var browsersync = require('browser-sync').create();
var buffer = require('vinyl-buffer');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var fs = require('fs-extra');
var glob = require('glob');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var runSequence = require('run-sequence').use(gulp);
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var util = require('gulp-util');

var sassFiles = glob.sync('./src/scss/**/*.scss');
var scriptFiles = glob.sync('./+(app|src)/**/!(example-)*.js');

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
			.pipe(gulpif(args.sourcemaps, sourcemaps.write('../../tmp/sourcemaps')))
			.pipe(gulp.dest('./dist/styles/'))
			.pipe(gulpif(args.watch, browsersync.stream()));
});


gulp.task('assets', function assetsTask(done) {
    fs.copy('./src/assets', './dist/assets');
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
			.pipe(gulpif(!args.debug, uglify()))
			.pipe(gulpif(args.sourcemaps, sourcemaps.init({loadMaps: true})))
			.pipe(gulpif(args.sourcemaps, sourcemaps.write('../../tmp/sourcemaps')))
			.pipe(gulp.dest('./dist/scripts/'))
});


gulp.task('script-watch', ['lint-scripts', 'scripts'], function jsWatchTask(done) {
    browsersync.reload();
    done();
});


gulp.task('serve', function serveTask() {
	browsersync.init({
		proxy: (args.p) ? 'http://localhost:' + args.p + '/' : 'http://localhost:3000/'
	});

	if (args.watch) {
		gulp.watch(sassFiles, ['styles']);
		gulp.watch(scriptFiles, ['script-watch']);
		gulp.watch('./src/assets', ['assets']);
	}
});

// Default Task
gulp.task('dev', function devTask(callback) {
	runSequence(
		'clean',
		'assets',
		'views',
		'lint-scripts',
		'scripts',
  		'styles',
  		'serve',
  		callback);
});

gulp.task('default', function defaultTask(callback) {
	runSequence(
		'dev',
  		callback);
});
