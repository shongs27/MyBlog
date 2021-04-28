const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.post("/whoami", (req, res) => {
  const user = new User(req.body);

  // 1. _id + jwt
  // 2. exp도 설정
  // 3. res.cookie(token_id, token_exp) 전송
  user.save((err, user) => {
    if (err) return res.send(err);

    return res.status(200).json({ try: true, user });
  });
});

module.exports = router;
