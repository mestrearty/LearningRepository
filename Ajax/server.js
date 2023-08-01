const bodyParser = require("body-parser");
const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

const app = express();

app
  .use(express.static("."))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.post("/upload", (req, res) => {
  res.setContentType("text/plain");
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro");
    }
    res.end("Concluído com sucesso.");
  });
});

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  });
});

app.listen(5050, () => console.log("Rodando"));
