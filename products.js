const express = require("express");
const { Router } = express;
const router = Router();

let Products = [];

router.get("/", (req, res) => {
  res.render("./layouts/register", {
    layout: "register",
    product: Products,
  });
});

router.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  let id = Products.length + 1;
  Products.push({ title, price, thumbnail, id });
  return res.redirect(`/productos`);
  res.send({ added: { title, price, thumbnail, id } });
}); // New product

module.exports = router;
