const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comments");

router.post("/saveComment", (req, res) => {
  //   let variable = {};
  //   if (req.body.postId) {
  //     variable = { postId: req.body.postId };
  //   } else {
  //     variable = { commentId: req.body.commentId };
  //   }

  const comment = new Comment(req.body);
  comment.save((err, newComment) => {
    if (err) return res.send(err);

    Comment.find({ _id: comment._id })
      .populate("postId")
      .populate("responseId")
      .exec((err, newComment) => {
        if (err) return res.send(err);
        return res.status(200).json({ try: true, newComment });
      });
  });

  //단순저장 다음에, 개인 comment를 찾아서 넘겨준다 !
  // 프론트에서 새로운 코멘트 추가(refreshComment)하려면 필요하기 때문이다
});

router.post("/getComment", (req, res) => {
  Comment.find({ postId: req.body.postId })
    .populate("postId")
    .populate("responseId")
    .exec((err, comments) => {
      if (err) return res.send(err);
      return res.status(200).json({ try: true, comments });
    });
});

module.exports = router;
