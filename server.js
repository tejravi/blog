const express = require("express");
const app = express();
app.use(express.static("./views"));
const addUser = require("./routes/addUser");
const users = require("./routes/users");
const showUser = require("./routes/showUser");
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/new", addUser);
app.use("/adduser", addUser);
app.use("/show", showUser);
app.get("/", (req, res) => {
  res.render("index", { users: users });
});

app.listen(5000, () => {
  console.log("Listening from port number 5000");
});
