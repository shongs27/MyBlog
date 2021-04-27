const express = require("express");
const router = express.Router();
const { Like } = require("../models/Like");
const { Dislike } = require("../models/Dislike");

router.post("/getlikes", (req, res) => {
  let variable = {};
  if (req.body.postId) {
    variable = { postId: req.body.postId };
  } else {
    variable = { commentId: req.body.commentId };
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

    // let variable;
    // if (req.body.postId) {
    //   variable = req.body.postId;
    //   res.cookie("postId", (val) => {val, variable});
    // } else {
    //   variable = req.body.commentId;
    //   res.cookie("commentId", variable);
    // }

    return res.status(200).json({ try: true });
  });
});

module.exports = router;
