const gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    jsdoc2md = require('jsdoc-to-markdown'),
    fs = require('fs');

gulp.task('docs', done => {
    const jsdocOptions = {
        files: ['src/az.tokens.js', 'src/az.morph.js'],
        template: fs.readFileSync('./api.hbs', 'utf8'),
        noCahe: true,
    };
    const output = jsdoc2md.renderSync(jsdocOptions);
    fs.writeFileSync('./wiki/README.md', output);
    done();
});

gulp.task('default', done => {
    gulp.src(['src/az.js', 'src/az.*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('az.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('az.min.js'))
        .pipe(
            sourcemaps.write('.', {
                includeContent: false,
                sourceRoot: '../src',
            })
        )
        .pipe(gulp.dest('dist'))
        .on('error', gutil.log);
    done();
});
