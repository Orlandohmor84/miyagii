var gulp = require('gulp'); 

var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

//Main Scripts
gulp.task('scripts', function() {
	console.log('starting scripts task');
	return gulp.src(['./src/vendor/plugins/jquery/jquery.js', './src/vendor/plugins/jquery/jquery-migrate.js', './src/vendor/plugins/bootstrap/js/bootstrap.js', './src/assets/js/ga.js'])
	.pipe(plumber(function(err) {
		console.log('Scripts Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets : ['es2015']
	}))
	.pipe(uglify())
	.pipe(concat('scripts.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/assets/js'))
	.pipe(livereload());
});