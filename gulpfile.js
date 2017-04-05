var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

//清空编译的dist目录和build目录
gulp.task('clean', function () {
    return gulp.src([
        './www/**/*.*',
        '!./www/index.html'
    ]).pipe(clean());
});
//静态文件拷贝 html/images/css/font/lang
gulp.task('copystatic', ['copyhtml', 'copyimages', 'copycss', 'copycssfont']);
//拷贝html
gulp.task('copyhtml', function () {
    return gulp.src('./src/html/**/*.html').pipe(gulp.dest('./www/html'));
});
//拷贝图片
gulp.task('copyimages', function () {
    return gulp.src('./src/images/*/*.*').pipe(gulp.dest('./www/images'));
});
//拷贝css
gulp.task('copycss', function () {
    return gulp.src([
        './src/css/**/*.css',
        '!./src/css/font/*.*'
    ])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./www/css'))
        .pipe(rename({ suffix: 'min' }));
});
//拷贝css字体
gulp.task('copycssfont', function () {
    return gulp.src('./src/css/font/*.*').pipe(gulp.dest('./www/css/font'));
});



//合并第三方库
gulp.task('minify_lib', function () {
    return gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js'
    ]).pipe(concat('lib.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./www/script'));
});
//压缩js
gulp.task('minifyjs', ['minify_lib'], function () {
    return gulp.src([
        './src/controller/**/*.js',
        './src/script/**/*.js',
        './src/directive/**/*.js'
    ]).pipe(concat('app.js')) //合并所有js到app.js
        .pipe(rename({ suffix: '.min' })) //重命名 
        .pipe(uglify()) //压缩
        .pipe(gulp.dest('./www/script')); //输出到文件夹
});

//默认方法
gulp.task('default', ['clean'], function () {
    gulp.start(['copystatic', 'minifyjs', 'minify_lib', 'copycss']);
});
