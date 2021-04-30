const express = require("express");
const router = express.Router();
const { Personal } = require("../models/Personal");
const { Something } = require("../models/Something");
const { Javascript } = require("../models/Javascript");
const { React } = require("../models/React");
const { Landing } = require("../models/Landing");
const { Like } = require("../models/Like");

//CategoryPage
router.get("/getSomethingPage", (req, res) => {
  Something.find()
    .limit(10)
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, doc });
    });
});

//세부페이지 다른항목 리스트
router.post("/getSomethingAnother", (req, res) => {
  Something.find()
    .ne("_id", req.body.postId)
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, doc });
    });
});

//세부페이지
router.post("/getSomethingDetail", (req, res) => {
  Smething.findOne({ _id: req.body.postId }).exec((err, doc) => {
    if (err) return res.json({ try: false, err });
    return res.status(200).json({ try: true, doc });
  });
});

///////////////////////////////////////////////////

//CategoryPage
router.get("/getPersonalPage", (req, res) => {
  Personal.find()
    .limit(10)
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, doc });
    });
});

//세부페이지
router.post("/getPersonalDetail", (req, res) => {
  Personal.findOne({ _id: req.body.postId }).exec((err, doc) => {
    if (err) return res.json({ try: false, err });
    return res.status(200).json({ try: true, doc });
  });
});

/////////////////////////////////////////////////////////

router.get("/getAnotherPostId", (req, res) => {
  Personal.find()
    .select("_id")
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, doc });
    });
});

router.get("/getPopularPage", (req, res) => {
  Landing.find()
    .sort("LikeNumber")
    .limit(5)
    .exec((err, popular) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, popular });
    });
});

router.get("/getRecentPage", (req, res) => {
  Landing.find()
    .limit(10)
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.json({ try: true, doc });
    });
});

router.get("/getLandingPage", (req, res) => {
  Landing.find()
  .exec((err, doc) => {
    if (err) return res.json({ try: false, err });
    return res.json({ try: true, doc });
  });
});

router.post("/upload", (req, res) => {
  const category = req.body.category;

  //각 카테고리에 저장
  let landing;
  switch (category) {
    case "Personal":
      const personal = new Personal(req.body);
      landing = new Landing(personal);
      personal.save((err, doc) => {
        if (err) return res.json({ try: false, err });
      });
      break;

    case "Something":
      const something = new Something(req.body);
      landing = new Landing(something);
      something.save((err, doc) => {
        if (err) return res.json({ try: false, err });
      });
      break;

    case "Javascript":
      const javascript = new Javascript(req.body);
      landing = new Landing(javascript);
      javascript.save((err, doc) => {
        if (err) return res.json({ try: false, err });
      });
      break;

    case "React":
      const react = new React(req.body);
      landing = new Landing(react);
      react.save((err, doc) => {
        if (err) return res.json({ try: false, err });
      });
      break;

    case "Git":
      const git = new Git(req.body);
      landing = new Landing(git);
      git.save((err, doc) => {
        if (err) return res.json({ try: false, err });
      });
      break;

    default:
      console.log(`포스팅 저장할데가 없음`);
      break;
  }
  //전체(landing)에 저장
  landing.save((err, doc) => {
    if (err) return res.json({ try: false, err });
    return res.status(200).json({ try: true });
  });
});

router.get("/getUserID", (req, res) => {
  Personal.find()
    .limit(10)
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, doc });
    });
});

module.exports = router;
