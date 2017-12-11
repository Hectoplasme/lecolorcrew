const gulp        = require('gulp');
const watch       = require('gulp-watch');
const browserSync = require('browser-sync');
const config      = require('../config');

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(`${config.paths.src}${config.paths.js}main/**/**/*`, ['browserify', browserSync.reload]);
    gulp.watch(`${config.paths.src}${config.paths.js}vendors/**/**/*`, ['vendors', browserSync.reload]);
    gulp.watch(`${config.paths.src}${config.paths.js}modules/**/**/*`, ['browserify-modules', browserSync.reload]);
    gulp.watch(`${config.paths.src}${config.paths.css}**/**/**/*`, ['stylus', browserSync.reload]);
    gulp.watch(`${config.paths.src}${config.paths.css}ui.styl`, ['stylus-ui', browserSync.reload]);
    gulp.watch(`${config.paths.src}${config.paths.templates}**/*`,['templates', browserSync.reload]);
});
