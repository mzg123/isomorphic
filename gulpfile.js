var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var sequence = require('run-sequence');

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
    gulp.watch('src/**/*.js', ['complie']);
});

gulp.task('default', function(callback) {
	sequence(['complie', 'watch'], 'start', callback);
});
