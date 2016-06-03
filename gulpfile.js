var gulp = require('gulp');
var gsize = require("gulp-size");
var gutil = require("gulp-util");
var _ = require('lodash');
var babel = require('gulp-babel')

var gconnect = require("gulp-connect");
var react = require('gulp-react');
var port = 3000;
var webpack = require("webpack");
var path = require('path');

var webpackConfig = require("./webpack.config.js");


var app = 'app';
var dist = "dist";
var html_pattern = app + '/*.html';
var dist_js = dist + '/js';
var css_pattern = app + '/css/*.css';
var js_pattern = app + '/scripts/**';
var img_pattern = app + '/images/**';
var data_pattern = app + '/scripts/data/**';





// Copy html from app to dist
gulp.task('html', function() {
  return gulp.src([html_pattern])
    .pipe(gulp.dest(dist))
    .pipe(gsize({ title : 'html' }))
});

// Copy data from app to dist
gulp.task('data', function() {
  return gulp.src([data_pattern])
    .pipe(gulp.dest(dist+"/data/"))
});

// Copy css from app to dist
gulp.task('css', function() {
  return gulp.src([css_pattern])
    .pipe(gulp.dest(dist+"/style/"))
});
// Copy img from app to dist
gulp.task('img', function() {
  return gulp.src([img_pattern])
    .pipe(gulp.dest(dist+"/images/"))
});
gulp.task('watch', function() {
  gulp.watch([html_pattern], ['html']);
  gulp.watch([css_pattern], ['css']);
  gulp.watch([js_pattern], ['build']);
});

function show_compilation_errors(stats) {
  gutil.log("Compilation errors:")

  _.forEach(stats.compilation.errors, function(err) {
    process.stderr.write(err.error.message)
    process.stderr.write("\n")

    if (err.error.codeFrame !== undefined) {
        process.stderr.write(err.error.codeFrame)
        process.stderr.write("\n")
    }
  })
}

// Production build
gulp.task("build", function() {
    // Modify some webpack config options
    var myConfig = Object.create(webpackConfig);

      // Sometimes it's useful to debug in production
      myConfig.devtool = "sourcemap";
      myConfig.debug = true;

    // Run webpack
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("build", err);

        if (stats.compilation.errors.length > 0) {
            show_compilation_errors(stats)
            throw new gutil.PluginError("build", "Compilation failed");
        }
    });

    // Generate separate bundles for components to render on the server-side
    gulp.src(path.resolve(app, "scripts/pages", "app.jsx"))
        .pipe(babel({}))
        .pipe(gulp.dest(dist_js))
});



// Add livereload on the given port
gulp.task('serve', function() {
  gconnect.server({
    root: dist,
    port: port,
    livereload: {
      port: port + 30000
    }
  });
});


// By default build project and then watch files in order to trigger livereload
gulp.task('default', ['html','css','data','img','build','serve','watch']);
