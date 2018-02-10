var browserify = require('browserify');
var source = require('vinyl-source-stream');

var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var sequence = require('run-sequence');

gulp.task('bundle', function() {
    var b = browserify({
		entries: 'src/index.js',
		debug: true
	})
	.transform('babelify', {presets: ['es2015']});
	return b.bundle()
			.pipe(source('build/application.js'))
			.pipe(gulp.dest('dist'));
});

gulp.task('copy', function(){
    gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'));
});
gulp.task('start', function() {
	nodemon({
		watch: 'dist',
		script: 'dist/index.js',
		ext: 'js',
		env: {'NODE_DEV': 'development'}
    });
});

gulp.task('complie', function() {
	return gulp.src('src/**/*.js')
			.pipe(babel({
			    presets: ['es2015']
			})).pipe(gulp.dest('dist'));
})

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['complie', 'bundle']);
    gulp.watch('src/**/*.html', ['copy']);
});

gulp.task('default', function(callback) {
	sequence(['complie', 'watch', 'copy', 'bundle'], 'start', callback);
});
