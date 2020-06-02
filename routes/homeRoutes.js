const express = require("express");
const path = require("path");
const router = express.Router();
const reqProm = require("request-promise");
const $ = require("cheerio");

const url = "https://www.worldometers.info/coronavirus/";

router.use("/covidStats", async (req, res, next) => {
  console.log("returning Welcome Page!");

  try {
    let html = await reqProm(url);
    console.log($("#maincounter-wrap", html).text());

    res.sendFile(path.join(__dirname, "../views", "index.html"));
  } catch (e) {
    console.log(err);
    res.status(400).send(e || e.message);
aq

  }
});

module.exports = router;
