import gulp from 'gulp';

import sass from 'gulp-sass';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const dir = {
  in: {
    js: 'src/js/**/*.js',
    scss: 'src/scss/**/*.scss',
    templates: 'src/templates/**/*.html',
    bower: 'src/bower_components/**/*',
    assets: 'src/assets/**/*'
  },
  out: {
    js: 'public/js',
    css: 'public/css',
    html: 'public/html',
    bower: 'public/vendor',
    assets: 'public/assets'
  }
}

gulp.task('html', () => {
  return gulp.src(dir.in.templates)
    .pipe(gulp.dest(dir.out.html))
});

gulp.task('assets', () => {
  return gulp.src(dir.in.assets)
    .pipe(gulp.dest(dir.out.assets))
});

gulp.task('sass', () => {
  return gulp.src(dir.in.scss)
    .pipe(sass())
    .pipe(gulp.dest(dir.out.css));
})

gulp.task('scripts', () => {
  return gulp.src(dir.in.js)
    .pipe(concat('all.js'))
    .pipe(gulp.dest(dir.out.js))
});

gulp.task('bower', () => {
  return gulp.src(dir.in.bower)
    .pipe(gulp.dest(dir.out.bower))
});

gulp.task('watch', () => {
    gulp.watch(dir.in.js, ['scripts']);
    gulp.watch(dir.in.scss, ['sass']);
    gulp.watch(dir.in.templates, ['html']);
});

gulp.task('default', ['bower', 'html', 'sass', 'scripts', 'assets', 'watch']);

gulp.task('deploy', ['bower', 'html', 'sass', 'scripts', 'assets']);
