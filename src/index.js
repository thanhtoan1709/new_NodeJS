const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3001;

const route = require('./rountes')
const db = require('./config/db')
//  Connect data
db.connect();


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
app.set("views", path.join(__dirname, "resources","views"));

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());



//routes
route(app);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
