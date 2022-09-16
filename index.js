const express = require("express");
const handlebars = require("express-handlebars");
const productsRouter = require("./products");
const app = express();

//* Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let Products = [];
//?----------- HANDLERBARS -------------------------------------
// //* views
// app.set("views", "./views");

// //* view engine
// const hbs = handlebars.engine({
//   extname: "hbs",
//   layoutsDir: __dirname + "/views/layouts",
//   defaultLayout: "index",
// });

// app.engine("hbs", hbs);
// app.set("view engine", "hbs");
// app.use("/productos", productsRouter);
//? --------------------------------------------------------------

//?-------------- PUG --------------------------------------------
// //* views
// app.set("views", "./views/pug");
// app.set("view engine", "pug");
// app.get("/productos", (req, res) => {
//   res.render("index", { items: Products });
// });
//? --------------------------------------------------------------

//?-------------- EJS --------------------------------------------
//* views
app.set("views", "./views/ejs");
app.set("view engine", "ejs");

app.get("/productos", (req, res) => {
  res.render("index", { items: Products });
});
//? --------------------------------------------------------------

// //* views
// app.set("views", "./views");

// //* view engine
// const hbs = handlebars.engine({

app.post("/productos", (req, res) => {
  const { title, price, thumbnail } = req.body;
  let id = Products.length + 1;
  Products.push({ title, price, thumbnail, id });
  console.log(Products);
  return res.redirect("/productos");
});

app.listen(8080, () => {
  console.log("Listening on port 8080!");
});
