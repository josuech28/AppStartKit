'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// config file
var config = require('../config');

// Static server
gulp.task('serve',['build'], function() {
	browserSync.init({
		server: {
			baseDir: [config.buildFolder.build]
		}

	});

	gulp.watch([config.buildFolder.watchPaths.html, config.buildFolder.watchPaths.css,config.buildFolder.watchPaths.js]).on('change', reload);

	gulp.watch(config.appFolder.filePaths.sass, ['sass']);

	gulp.watch(config.appFolder.filePaths.html, ['copyHtml']);

	gulp.watch(config.appFolder.filePaths.js, ['copyJS']);
});