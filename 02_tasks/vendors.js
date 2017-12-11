const gulp       = require('gulp');
const concat     = require("gulp-concat");
const minify     = require("gulp-minify");
const config     = require('../config');

gulp.task('vendors', () =>
    gulp.src(`./${config.paths.src}${config.paths.js}vendors/*.js`)
    .pipe(concat('vendors/vendors.js'))
    .pipe(minify({
        ext:{
            src: '.js',
            min: '-min.js'
        }
    }))
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}`))
);
