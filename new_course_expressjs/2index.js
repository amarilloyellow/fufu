// -EXPRESSS
const express = require("express");

// -- Creando Servidor -EasyMode-
const app = express();

// HTTP Response
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Enviando Archivos
app.get("/file", (req, res) => {
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

// Enviando Objeto JSON
app.get("/user", (req, res) => {
  res.json({
    name: "Miguel",
    lastname: "Hola",
    age: 40,
    points: [1, 2, 3, 4],
    address: {
      city: "New York",
      street: "anywhere",
    },
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204);
});

// Escuchando Peticion
app.listen(3000);
console.log("Escuchando...");
