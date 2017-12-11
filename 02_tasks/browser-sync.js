const gulp        = require('gulp');
const browserSync = require('browser-sync');
const config      = require('../config');

gulp.task('browser-sync', function() {
    browserSync({
        host: "0.0.0.0",
        server: {
            baseDir: config.paths.dist
        }
    });
});
