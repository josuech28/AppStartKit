'use strict';
// npm install --save-dev gulp-imagemin
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
// config file
var config = require('../config');

gulp.task('imagemin', () =>
	gulp.src(config.appFolder.filePaths.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.buildFolder.destFolders.images))
);