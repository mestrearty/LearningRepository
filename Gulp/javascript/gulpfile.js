const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function padrao(cb) {
  gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    ).on('error', err => console.log(err))
    .pipe(uglify())
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build"));

  console.log(cb);
  return cb();
}

exports.default = series(padrao);
