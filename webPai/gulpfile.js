var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var pug         = require('gulp-pug');
var reload      = browserSync.reload;
var uglify      = require('gulp-uglify');
var minifyCSS   = require('gulp-minify-css');
var imagemin    = require('gulp-imagemin');
/**
 * Compile pug files into HTML
 */
gulp.task('templates', function() {

    var YOUR_LOCALS = {
        "message": "This app is powered by gulp.pug recipe for BrowserSync"
    };

    return gulp.src('./app/*.pug')
        .pipe(pug({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dist/'));
});

/**
 * Important!!
 * Separate task for the reaction to `.pug` files
 */
gulp.task('pug-watch', ['templates'], reload);

/**
 * Sass task for live injecting into all browsers
 */
gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({stream: true}));
});

/**
 * Serve and watch the scss/pug files for changes
 */
gulp.task('default', ['sass', 'templates'], function () {

    browserSync({server: './dist'});


    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/*.pug',       ['pug-watch']);
});
//压缩js
gulp.task('Script', function() {
    // 1. 找到文件
    gulp.src('src/js/*.js')
    // 2. 压缩文件
        .pipe(uglify({ mangle: false }))
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})
gulp.task('auto',function(){
   gulp.watch('src/*.js',['Script']);
})

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1\. 找到文件
    gulp.src('src/css/*.css')
    // 2\. 压缩文件
        .pipe(minifyCSS())
    // 3\. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
})

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('css/*.css', ['css'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
gulp.task('default', ['css', 'auto'])
//压缩图片

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('Go', function () {
    // 1. 找到图片
    gulp.src('img/*.{jpg,png}')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
    // 3. 另存图片
        .pipe(gulp.dest('dist/img'))
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('img/*.{jpg,png})', ['Go'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 images 任务和 auto 任务
gulp.task('default', ['Go', 'auto'])