// Include gulp
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    sassLint    = require('gulp-sass-lint');

// Compile Sass
gulp.task('sass', function () {
	return gulp.src('css/scss/**/*.scss')
	           .pipe(sass().on('error', sass.logError))
	           .pipe(gulp.dest('css'))
	           .pipe(browserSync.reload({
		           stream: true
	           }));
});

// Browser Sync
gulp.task('browserSync', function () {
	return browserSync.init({
		startPath: './',
		server   : {
			baseDir: './'
		}
	});
});

//Watch task
gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('css/scss/**/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});

//Sass Lint task
gulp.task('sass-lint', function () {
	return gulp.src(['./css/**/*.s+(a|c)ss'])
	           .pipe(sassLint())
	           .pipe(sassLint.format())
	           .pipe(sassLint.failOnError());
});

//Test task
gulp.task('test', function () {
	gulp.start('sass-lint');
});
