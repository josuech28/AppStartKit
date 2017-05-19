'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

// config file
var config = require('../config');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){

	return gulp.src(config.appFolder.filePaths.sass)
		.pipe(sass())
		.pipe(gulp.dest(config.buildFolder.destFolders.css))
		.pipe(browserSync.stream());
});