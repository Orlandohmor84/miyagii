var gulp = require('gulp');

//Image Compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageResize = require('gulp-image-resize');

var IMG_PATH = './src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';

//Compresses Images
gulp.task('images', function() {
	console.log('starting images task');
	return gulp.src(IMG_PATH)
	.pipe(imagemin(
		[
			imagemin.gifsicle(),
			imagemin.jpegtran(),
			imagemin.optipng(),
			imagemin.svgo(),
			imageminPngquant(),
			imageminJpegRecompress()
		]
	))
	.pipe(gulp.dest('./public/assets/img/'));
});

//Image Resizer
/*
gulp.task('resize-sib-logo', function() {
	console.log('starting featured-IMG task');
    gulp.src('./public/clients/sib/assets/img/')
    .pipe(imageResize({
	    width : 100,
	    height : 100,
	    crop : true,
	    upscale : false
    }))
    .pipe(gulp.dest('public/clients/sib/assets/img/logos/'));
});
*/

