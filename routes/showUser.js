const express = require("express");
const router = express();
router.use(express.static("./views"));
const users = require("./users");

router.get("/:id", (req, res) => {
  const element = users.find((item) => item.id === parseInt(req.params.id));
  element
    ? res.render("user", { user: element })
    : res.render("user", {
        user: { blog: "The User Not Found", name: "none" },
      });
});

module.exports = router;
