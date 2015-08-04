
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	inlineCSS = require('gulp-inline-css');

var options = {
	email_source: 'src/index.html',
	inline: {
		applyStyleTags: true,
		applyLinkTags: true,
		removeStyleTags: true,
		removeLinkTags: true
	},
	dist_dir: './dist',
	dist_file_name: 'index.min.html',
	watch_files: [
		'src/**/*.css',
		'src/**/*.html'
	]
}

gulp.task('inline', function(){
	gulp.src(options.email_source)
		.pipe(inlineCSS(options.inline))
		.pipe(rename(options.dist_file_name))
		.pipe(gulp.dest(options.dist_dir))
});


gulp.task('default', ['inline', 'watch'] );


/* Watch Tasks */
/* -------------------------------------- */

gulp.task('watch', function() {
	gulp.watch(options.watch_files, ['inline']);
});