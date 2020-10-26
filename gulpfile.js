const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const terser = require('gulp-terser');

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

gulp.task('build-new', done => {
    gulp.src(['src/az.js', 'src/az.*.js'])
        // .pipe(eslint())
        // .pipe(eslint.format())
        .pipe(sourcemaps.init())
        .pipe(concat('az.js'))
        .pipe(gulp.dest('dist'))
        .pipe(
            babel({
                presets: ['@babel/env'],
            })
        )
        .pipe(terser())
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
