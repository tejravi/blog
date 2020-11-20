const express = require("express");
const router = express();
router.use(express.static("./views"));
const users = require("./users");

router.get("/", (req, res) => {
  res.render("addBlog");
});

router.post("/", (req, res) => {
  users.push({
    id: users.length + 1,
    blog: req.body.blog,
    name: req.body.name,
    description: req.body.description,
  });
  res.redirect("/");
});

module.exports = router;
