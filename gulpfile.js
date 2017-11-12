var gulp = require('gulp'); 
var gulpsync = require('gulp-sync')(gulp);
var livereload = require('gulp-livereload');
var bootlint  = require('gulp-bootlint');
var requireDir = require('require-dir');
requireDir('./gulp-tasks/');
requireDir('./gulp-tasks/less/');
requireDir('./gulp-tasks/scripts/');
requireDir('./gulp-tasks/img/');
requireDir('./gulp-tasks/html/');
requireDir('./gulp-tasks/bootlint/');

//File paths
var LESS_PATH = './src/assets/less/main.less';
var SRC_PATH = './src/**/*.html';
var SCRIPTS_PATH = './src/assets/js/*.js';
var IMG_PATH = './src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';


//Watch
gulp.task('watch', ['default'], function() {
	console.log('starting watch task');
	require('./serverBuild.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(LESS_PATH, ['styles']);
	gulp.watch(IMG_PATH, ['images']);
	gulp.watch(SRC_PATH, ['html']);
});

gulp.task('default', ['styles', 'scripts', 'html', 'images'], function() {
	console.log('starting default task');
});