const { series, parallel } = require("gulp");
const gulp = require("gulp");

const { appHTML, appCSS, appIMG, appJS } = require("./gulpTasks/app");
const { depsCSS, depsFonts } = require("./gulpTasks/deps");
const { monitorarArquivos, servidor } = require("./gulpTasks/servidor");

module.exports.default = series(
  parallel(series(appCSS, appHTML, appIMG, appJS), series(depsCSS, depsFonts)),
  servidor,
  monitorarArquivos
);
