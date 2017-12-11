const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const config   = require('../config');


gulp.task('imagemin', () =>
    gulp.src(`./${config.paths.src}${config.paths.images}/**/**/**/*`)
        .pipe(imagemin())
        .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.images}`))
);
