const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Olá, Mundo!");
});

app.get("/hello", function(req, res){
    res.send("Hello, World!");
});

app.get("/hola", function(req, res){
    res.send("¡Hola, Mundo!");
});

const lista = ["Rick Sanchez", "Morty Smith", "Summer Smith"]

// Read ALL - [GET] /item 
app.get("/item", function(req, res){
    res.send(lista);
});

// Read by ID - [GET] /item/:id
app.get("/item/:id", function(req, res){
    const id = req.params.id - 1;

    const item = lista[id];

    res.send(item);
});

app.listen(3000, console.log("Servidor rodando em http://localhost:3000"));