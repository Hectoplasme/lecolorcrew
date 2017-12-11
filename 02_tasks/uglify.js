const gulp       = require('gulp');
const uglify     = require('gulp-uglify');
const config     = require('../config');

gulp.task('uglify', ['browserify', 'vendors'], () =>
    gulp.src([
        `${config.paths.dist}${config.paths.assets}${config.paths.js}main.js`
    ])
    .pipe(uglify())
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}`))
);
