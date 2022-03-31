const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const exphbrs = require("express-handlebars");
const todoRoutes = require("./routes/todos");
const bodyparser = require("body-parser");
require("dotenv").config();

// mongodb+srv://Maksym:80502892188@cluster0.5hmob.mongodb.net/ninjas
const uriDb = process.env.DB_HOST;

const PORT = process.env.PORT || 3000;

const app = express();

const hbs = exphbrs.create({
  defaultLayout: "main",
});
app.use(bodyparser.json());
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(todoRoutes);

async function start() {
  try {
    await mongoose.connect(uriDb, {
      useNewUrlParser: true,
      // useFindAndModify: false,
    });
    app.listen(PORT, () => {
      console.log("Server is working ...");
    });
  } catch (e) {
    console.log("start ~ e.message", e.message);
  }
}

start();
