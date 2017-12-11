const gulp  = require('gulp');
const utils = require('gulp-util');

gulp.task('default', () => {
    const m     = utils.colors.cyan;
    const g     = utils.colors.grey;
    const title = utils.colors.bgMagenta;

    console.log(title('Configuration'));
    console.log('Before starting to code, please configure your paths in config.js');
    console.log(title('Tasks'));
    console.log(m('default'), g('...........'),  'Documentation');
});
