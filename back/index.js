const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const connect = mongoose
  .connect(
    "mongodb+srv://hongs:ehfkwj@youtube.fd1qo.mongodb.net/blog?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("몽고디비 접속완료"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/post", require("./routes/posts"));
app.use("/api/likedislike", require("./routes/LikesDislikes"));

app.listen(8888, () => {
  console.log("잘 접속되었습니다");
});
