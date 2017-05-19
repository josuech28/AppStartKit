'use strict';

var gulp = require('gulp');

// config file
var config = require('../config');

gulp.task('copyHtml', function buildHTML() {
	return gulp.src(config.appFolder.filePaths.html)
	.pipe(gulp.dest(config.buildFolder.build));
});