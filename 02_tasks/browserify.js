const gulp       = require('gulp');
const notify     = require("gulp-notify");
const browserify = require('browserify');
const babelify   = require('babelify');
const buffer     = require('vinyl-buffer');
const source     = require('vinyl-source-stream');
const config     = require('../config');

gulp.task('browserify', () =>
    browserify(`./${config.paths.src}${config.paths.js}main/base.js`)
        .transform(babelify, { presets: ['env', 'stage-1'], sourceMaps: false })
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}`))
);
