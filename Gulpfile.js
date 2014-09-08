var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var browserify = require('browserify');

gulp.task('watch', function () {
    var appBundler = watchify(browserify('./app/app.js', watchify.args));

    function rebundle () {
        return appBundler.bundle()
            .pipe(source('app/bundle.js'))
            .pipe(gulp.dest('.'));
    }

    appBundler.on('update', rebundle);

    return rebundle();
});


//var gulp = require('gulp');
//var gutil = require('gulp-util');
//var browserify = require('browserify');
//var watchify = require('watchify');
//var vinylSource = require('vinyl-source-stream');
//
//gulp.task('browserify', function() {
//    return browserify('./www/js/app.js')
//        .bundle()
//        .pipe(vinylSource('bundle.js'))
//        .pipe(gulp.dest('./www/js'));
//});
//
//gulp.task('watchify', function() {
//    var watchified = watchify('./www/js/app.js');
//
//    function bundleWatched() {
//        return watchified
//            .bundle({debug: true})
//            .pipe(vinylSource('bundle.js'))
//            .pipe(gulp.dest('./www/js'));
//    }
//
//    watchified.on('update', bundleWatched);
//    watchified.on('time', function(time) {
//        gutil.log('Watchify', gutil.colors.cyan("'default'"), 'after', gutil.colors.magenta(time), gutil.colors.magenta('ms'));
//    });
//
//    return bundleWatched();
//});
//
//gulp.task('default', ['watchify']);
//
//gulp.task('build', ['browserify']);