const gulp = require('gulp');
const shell = require('gulp-shell');

const imageName = 'mailbox-app';

gulp.task('docker-build', shell.task([
  `docker build -t ${imageName} .`
]));

gulp.task('docker-run', shell.task([
  `docker run -p 4200:80 ${imageName}`
]));

gulp.task('default', gulp.series('docker-build', 'docker-run'));
