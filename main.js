const express = require("express");
const fs = require("fs");
const app = express();
const fsPromise = fs.promises;

// app.use(express.static("public"));

app.engine("coder", async (filePath, options, cb) => {
  //models
  const { nombre } = options;
  //view
  const template = await fsPromise.readFile(filePath, "utf8");

  const rendered = template.replace("{{nombre}}", nombre);

  return cb(null, rendered);
});

//vistas
app.set("views", "./views");
//motor controllers
app.set("view engine", "coder");

app.get("/data", (req, res) => {
  const data = {
    nombre: "Maria",
    apellido: "Perez",
    edad: 23,
    email: "email@gmail.com",
    telefono: 1234567890,
  };
  res.render("template", data);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
