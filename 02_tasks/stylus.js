const gulp         = require('gulp');
const notify       = require("gulp-notify");
const stylus       = require('gulp-stylus');
const sourcemaps   = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const config       = require('../config');

gulp.task('stylus', ['stylus-ui'], () =>
    gulp.src(`./${config.paths.src}${config.paths.css}*.styl`)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .on('error', notify.onError(function (error) {
            return "Stylus: " + error.message;
        }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write(config.paths.maps))
        .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.css}`))
);

gulp.task('stylus-ui', () =>
    gulp.src(`./${config.paths.src}${config.paths.css}/ui.styl`)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .on('error', notify.onError(function (error) {
            return "Stylus: " + error.message;
        }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write(config.paths.maps))
        .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.css}`))
);
