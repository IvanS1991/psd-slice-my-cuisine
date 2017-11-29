const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const newer = require('gulp-newer');
const pump = require('pump');
const nodemon = require('gulp-nodemon');

gulp.task('css:compile', (cb) => {
  const src = 'src/css/**/*.css';
  pump([
    gulp.src(src),
    newer(src),
    autoprefixer({
      browsers: 'last 10 versions',
    }),
    gulp.dest('public/css'),
  ], cb);
});

gulp.task('js:compile', ['css:compile'], (cb) => {
  const src = 'src/js/**/*.js';
  pump([
    gulp.src(src),
    newer(src),
    babel({
      presets: ['env'],
      plugins: ['transform-es2015-modules-systemjs'],
    }),
    uglify(),
    gulp.dest('public/js'),
  ], cb);
});

gulp.task('build', ['js:compile']);

gulp.task('dev', ['build'], () => {
  nodemon({
    script: 'server.js',
    watch: 'src',
    ext: 'js',
    tasks: ['build'],
    legacyWatch: true,
  });
});

gulp.task('default', ['build']);
