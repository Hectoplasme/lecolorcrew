const gulp   = require('gulp');

gulp.task('deploy', ['clean', 'uglify', 'cssmin', 'imagemin', 'fonts', 'templates']);
