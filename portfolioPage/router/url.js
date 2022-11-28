module.exports = (router) => {
  router.route("/").get((req, res) => {
    res.render("index.ejs");
  });

  router.route("/goCodingPocket").get((req, res) => {
    res.render("CodingPocket");
  });

  router.route("/goToQueU").get((req, res) => {
    res.render("QueU");
  });
  router.route("/goTrawling").get((req, res) => {
    res.render("Trawling");
  });
  router.route("/goGroomTon").get((req, res) => {
    res.render("goGroomTon");
  });
};
