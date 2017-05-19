const gulp = require('gulp');
const babel = require('gulp-babel');


// config file
var config = require('../config');

gulp.task('copyJS', function () {
    gulp.src(config.appFolder.filePaths.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.buildFolder.destFolders.js));
});
