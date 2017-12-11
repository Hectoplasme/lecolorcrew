const gulp  = require('gulp');
const del   = require('del');
const config = require('../config');

gulp.task('clean', () =>
    del([
        `${config.paths.dist}${config.paths.assets}${config.paths.js}**/**/**/*.js`,
        `${config.paths.dist}${config.paths.assets}${config.paths.css}**/*.css`,
        `${config.paths.dist}${config.paths.assets}${config.paths.images}**/**/*`
    ], { force: true })
);
