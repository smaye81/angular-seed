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