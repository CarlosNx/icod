var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
gulp.task('build-img',function(){
    
   gulp.src('assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets')); 
});


