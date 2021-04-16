const express = require("express");
const router = express.Router();
const { Personal } = require("../models/personal");
const { Something } = require("../models/Something");
const { Javascript } = require("../models/Javascript");
const { React } = require("../models/React");

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
  console.log(req.body);
  const category = req.body.category;

  switch (category) {
    case "Personal":
      const personal = new Personal(req.body);
      personal.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "Something":
      const something = new Something(req.body);
      something.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "Javascript":
      const javascript = new Javascript(req.body);
      javascript.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "React":
      const react = new React(req.body);
      react.save((err, doc) => {
        if (err) return res.json({ try: false, err });
        return res.status(200).json({
          try: true,
        });
      });
      break;
    case "Git":
      const git = new Git(req.body);
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
