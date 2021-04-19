const express = require("express");
const router = express.Router();
const { Personal } = require("../models/personal");
const { Something } = require("../models/Something");
const { Javascript } = require("../models/Javascript");
const { React } = require("../models/React");
const { Whole } = require("../models/whole");

router.get("/getAnotherPostId", (req, res) => {
  Personal.find()
    .select("_id")
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, doc });
    });
});

router.post("/getPersonalAnother", (req, res) => {
  Personal.find()
    .ne("_id", req.body.postId)
    .exec((err, doc) => {
      if (err) return res.json({ try: false, err });
      return res.status(200).json({ try: true, doc });
    });
});

router.post("/getPersonalDetail", (req, res) => {
  Personal.findOne({ _id: req.body.postId }, (err, doc) => {
    if (err) return res.json({ try: false, err });
    return res.status(200).json({ try: true, doc });
  });
});

router.post("/upload", (req, res) => {
  const category = req.body.category;
  const wholething = new Whole(req.body);
  switch (category) {
    case "Personal":
      let personal = new Personal(req.body);
      wholething.save();
      personal.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "Something":
      console.log("1첫째");
      let something = new Something(req.body);
      wholething.save();
      something.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "Javascript":
      let javascript = new Javascript(req.body);
      wholething.save();
      javascript.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "React":
      let react = new React(req.body);
      wholething.save();
      react.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "Git":
      let git = new Git(req.body);
      wholething.save();
      git.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    default:
      console.log(`포스팅 저장할데가 없음`);
      break;
  }
});

module.exports = router;
