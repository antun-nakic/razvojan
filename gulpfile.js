import gulp from "gulp";
import concat from "gulp-concat";

gulp.task("pack-js", function () {
  return gulp
    .src(["index.js", "index2.js"])
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("build2"));
});

gulp.task("pack-css", function () {
  return gulp
    .src(["styles/*.css"])
    .pipe(concat("stylesheet.css"))
    .pipe(gulp.dest("build2"));
});
gulp.task("pack-html", function () {
  return gulp.src(["index.html"]).pipe(gulp.dest("build2"));
});

gulp.task("default", gulp.series(["pack-js", "pack-css", "pack-html"]));
