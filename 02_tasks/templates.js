const gulp        = require('gulp');
const pug         = require('gulp-pug');
const notify      = require("gulp-notify");
const config      = require('../config');

gulp.task('templates', function() {
  return gulp.src(`./${config.paths.src}${config.paths.templates}*.pug`)
    .pipe(
        pug({
            pretty: true
        }).on('error', notify.onError(function (error) {
            return "Pug: " + error.message;
        }))
    )
    .pipe(gulp.dest(config.paths.dist));
});
