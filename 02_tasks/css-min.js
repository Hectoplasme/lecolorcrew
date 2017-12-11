const gulp   = require('gulp');
const cssmin = require('gulp-cssmin');
const config  = require('../config');

gulp.task('cssmin', ['stylus'], () =>
    gulp.src(`${config.paths.dist}${config.paths.assets}${config.paths.css}**/*.css`)
        .pipe(cssmin())
        .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.css}`))
);
