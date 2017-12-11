const gulp     = require('gulp');
const config  = require('../config');

gulp.task('fonts', function () {
    return gulp.src(`${config.paths.src}${config.paths.fonts}/*`)
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.fonts}`));
});
