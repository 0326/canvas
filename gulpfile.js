const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

// browserify + babel => es6 in browser
gulp.task('js', () => {
  const browserify = require('browserify')
  const source = require('vinyl-source-stream')
  const buffer = require('vinyl-buffer')
  return browserify('src/js/index.js')
      .transform('babelify')
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('build'))
      .pipe(browserSync.stream())
})

// postcss => css
gulp.task('css', () => {
  const postcss = require('gulp-postcss')
  const autoprefixer = require('autoprefixer')
  const precss = require('precss')

  return gulp.src('src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer, precss]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream())
})

// browserSync server
gulp.task('server', () => {
  browserSync.init({
    server: './'
  })

  gulp.watch(['./src/**/*.js'], ['js'])
  gulp.watch(['./src/**/*.css'], ['css'])
  gulp.watch(['./src/**/*.html']).on('change', browserSync.reload)
})

gulp.task('build', ['js', 'css'])
// gulp.task('test', [''])
