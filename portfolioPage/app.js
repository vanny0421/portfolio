const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

const config = require("./config/config");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

//
app.use("/", router);

const urlRouter = require("./router/url");

urlRouter(router);
//
app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.listen(config.PORTNUM, () => {
  console.log(`${config.PORTNUM} 번 포트로 서버 대기중...`);
});
