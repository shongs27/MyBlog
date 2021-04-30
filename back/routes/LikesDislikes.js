const express = require("express");
const router = express.Router();
const { Like } = require("../models/Like");
const { Dislike } = require("../models/Dislike");
const { Landing } = require("../models/Landing");

router.post("/getlikes", (req, res) => {
  let variable = {};
  if (req.body.commentId) {
    variable = { commentId: req.body.commentId };
  } else {
    variable = { postId: req.body.postId };
  }

  Like.find(variable).exec((err, doc) => {
    if (err) return res.json({ try: false, err });

    return res.status(200).json({ try: true, doc });
  });
});

router.post("/uplike", (req, res) => {
  const like = new Like(req.body);

  like.save((err, doc) => {
    if (err) return res.json({ try: false, err });

    //좋아요 수 저장
    Like.find({ postId: req.body.postId }, (err, doc) => {
      if (err) return res.json({ try: false, err });
      Landing.findOneAndUpdate(
        { _id: req.body.postId },
        { LikeNumber: doc.length },
        { new: true },
        (err, doc) => {
          console.log(doc);
          return res.status(200).json({ try: true });
        }
      );
    });
  });
});

router.post("/unlike", (req, res) => {
  Like.findOneAndDelete(req.body, (err, doc) => {
    if (err) return res.send(err);
    return res.status(200).json({ try: true });
  });
});

router.post("/unDislike", (req, res) => {
  Dislike.findOneAndDelete(req.body, (err, doc) => {
    if (err) return res.send(err);
    return res.status(200).json({ try: true });
  });
});

router.post("/upDislike", (req, res) => {
  const dislike = new Dislike(req.body);

  dislike.save((err, doc) => {
    if (err) return res.json({ try: false, err });

    return res.status(200).json({ try: true });
  });
});

router.post("/getDislikes", (req, res) => {
  let variable = {};
  if (req.body.commentId) {
    variable = { commentId: req.body.commentId };
  } else {
    variable = { postId: req.body.postId };
  }

  Dislike.find(variable).exec((err, doc) => {
    if (err) return res.json({ try: false, err });
    return res.status(200).json({ try: true, doc });
  });
});

module.exports = router;
