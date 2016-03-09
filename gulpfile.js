/**
* Require Gulp and Run Sequence
*/
var gulp       = require('gulp');
var runSequence = require('run-sequence');
/**
* SVG -> PNG fallback task
*/
gulp.task('svg2png', function () {
  var svg2png = require('gulp-svg2png');

  return gulp.src( 'assets/app/icons/**/*.svg' )
      // pipe the svg files through svg2png
      .pipe( svg2png() )
      // write the png files
      .pipe( gulp.dest( 'assets/dist/icons/png/' ) )
      });

/**
* PNG Optimization and Sprite task
*/
gulp.task('png-sprite', function () {
  var buffer = require('vinyl-buffer');
  var csso = require('gulp-csso');
  var imagemin = require('gulp-imagemin');
  var merge = require('merge-stream');
  var spritesmith = require('gulp.spritesmith');

  // Generate our spritesheet
  var spriteData = gulp.src('assets/dist/icons/png/*.*')
      .pipe(spritesmith({
        imgName: 'icon-sprite.png',
        cssName: 'icon-sprite.css'
      }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // buffer stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('assets/dist/icons/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    //.pipe(csso())
    .pipe(gulp.dest('assets/dist/icons/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});


/**
* SVG sprite task
*/

// Create new task and make svg2png task run before it
gulp.task('svg-sprite', function () {
  var svgSymbols = require('gulp-svg-symbols');
  // Define source files
  return gulp.src( 'assets/app/icons/**/*.svg' )
    // prefix generated svgs with classname
    .pipe(svgSymbols({
        className: '.icon--%f',
        title: false
    }))
    .pipe( gulp.dest( 'assets/dist/icons/' ) );
});

gulp.task('copy-dist', function() {
  gulp.src(['assets/dist/icons/*.svg',
            'assets/dist/icons/*.css',
            'assets/dist/icons/*.png'],
            { base: 'assets/dist/icons/'}
          )
          .pipe(gulp.dest('build'));
});

/**
 * Make sure we are squeaky clean
 */
gulp.task('clean', function() {
  var del = require('del');

  return del(['assets/dist/**', '!/assets/dist', 'build/**', '!build']);
});

gulp.task('build-png', ['clean'], function(done) {
  runSequence('svg2png', 'png-sprite', 'copy-dist', done);
});

gulp.task('build-svg', ['clean'], function(done) {
  runSequence('svg-sprite', 'copy-dist', done);
});

gulp.task('build-all', ['clean'], function(done) {
  runSequence('svg2png', 'png-sprite', 'svg-sprite', 'copy-dist', done);
});
