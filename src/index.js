const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

//
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
