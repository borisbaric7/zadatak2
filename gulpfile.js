//////////////////////////////////////
// Required
//////////////////////////////////////
var gulp = require('gulp'),
	uglify = require('gulp-uglify');
	rename = require('gulp-rename');
	gulpSASS = require('gulp-sass');
	minifyCSS = require('gulp-clean-css');
	autoprefixer = require('gulp-autoprefixer');

//////////////////////////////////////
// Scripts
//////////////////////////////////////
gulp.task('scripts', function(){
	gulp.src('source/js/**/*.js')
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

//////////////////////////////////////
// Sass / CSS Tasks
//////////////////////////////////////
gulp.task('sass-css', function() {
	gulp.src('source/css/**/*.scss')
	.pipe(rename({suffix:'.min'}))
	.pipe(gulpSASS())
	.pipe(autoprefixer('last 2 versions'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/css'));
});

//////////////////////////////////////
// Watch Tasks
//////////////////////////////////////
gulp.task('watch', function() {
	gulp.watch('source/js/**/*.js', ['scripts']);
});

//////////////////////////////////////
// Default task
//////////////////////////////////////
gulp.task('default', ['scripts', 'sass-css']);




