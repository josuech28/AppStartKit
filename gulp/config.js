'use strict';

const config = {
	appFolder: {
		app:'./app',
		filePaths: {
			sass: 'app/assets/sass/**/*.scss',
			js: ['app/assets/js/**/*.js'],
			html: './app/**/*.html',
			images: 'app/assets/images/**/*'
		},
	},
	buildFolder: {
		build:'./dist',
		watchPaths: {
			css: './dist/assets/css/**/*.css',
			js: 'dist/assets/js/**/*.js',
			html: './dist/*.html',
		},
		destFolders: {
			css: './dist/assets/css',
			js: 'dist/assets/js',
			images: './dist/assets/images' 
		},
	},
};

module.exports = config