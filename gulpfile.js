/**
 * Created by sregej on 06.01.17.
 */
const gulp = require('gulp');
const express = require('express');
const fs = require('fs');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const tsify = require('tsify');
const exorcist = require('exorcist');
const source = require('vinyl-source-stream');
const notify = require('gulp-notify');
const buffer = require('vinyl-buffer');

const expressPort = 3000;

const vendorArray = [
    'react',
    'react-dom',
    'react-router'
];

function handleTSErrors() {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: "TypeScript Error",
        message: "<%= error.message %>"
    }).apply(this, args);

    this.emit('end');
}

function startExpress(port) {
    var server = express();

    server.use('/', express.static('dist'));

    server.get('*', function (req, res) {
        res.set('content-type', 'text/html');
        res.send(fs.readFileSync('dist/index.html', 'utf8'));
    });

    server.listen(port);
}

function browserSyncInit() {
    return browserSync.init({
        codeSync: true,
        open: false,
        proxy: 'http://localhost:' + (expressPort + 1)
    });
}

function vendor() {
    var vendor = browserify({
        debug: true
    });

    vendorArray.forEach(function (lib) {
        vendor.require(lib);
    });

    return vendor.bundle()
        .on('error', handleTSErrors)
        .pipe(source('vendor.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist'));
}

var bundler = null;

function bundle() {
    var bundler = bundler || browserify({
            entries: ['./src/ts/app.ts'],
            extensions: ['.ts', '.tsx'],
            debug: true

        })
            .plugin(tsify, {target: 'es5'});

    return bundler
        .external(vendorArray)
        .bundle()
        .on('error', handleTSErrors)
        .pipe(exorcist('dist/app.js.map'))
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());

}

function createHtml() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp.src('src/css/style.css')
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}


gulp.task('html', function () {
    createHtml();
});

gulp.task('styles', ['html'], function () {
    styles();
});

gulp.task('vendor', ['styles'], function () {
    return vendor();
});

gulp.task('bundler', ['vendor'], function () {
    return bundle();
});

gulp.task('browserSync', ['bundler'], function () {
    browserSyncInit()
});

gulp.task('default', ['browserSync'], function () {
    startExpress(expressPort + 1);

    gulp.watch([
        './src/ts/*.ts',
        './src/ts/**/*.ts',
        './src/ts/**/*.tsx',
        '!./src/ts/server.ts'
    ], function () {
        bundle();
    });


    gulp.watch([
        './src/index.html'
    ], function () {
        createHtml();
    });

    gulp.watch([
        './src/css/*.**'
    ], function () {
        styles();
    });
});
