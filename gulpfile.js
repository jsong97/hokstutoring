'use strict'


// SASS is not readable in current day browsers, so we use a task runner like
// gulp which we code to translate SCSS to CSS

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


var SCSS_SRC = './client/src/Assets/scss/**/*.scss';
var SCSS_DEST = './client/src/Assets/css';


// Here, I've created a 'task' in gulp, called 'compile_scss'
gulp.task('compile_scss', function(){

  // pipe is used to chain tasks together
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));
});


// detects changes in SCSS
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

// runs everything
gulp.task('default', ['watch_scss']);
