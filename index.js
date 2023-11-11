const express = require("express");
const app = express();

// Registrar um Middleware
// Indica que todas as requisições podem receber
// Body em JSON. A partir disso, o Express aplica um
// JSON.parse para o conteúdo recebido.
app.use(express.json());

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
    res.send(lista.filter(Boolean));
});

// Read by ID - [GET] /item/:id
app.get("/item/:id", function(req, res){
    // Pegamos  o ID de rota e subtraímos 1 para ficar
    // equivalente ao índice da lista que começa em 0.
    const id = req.params.id - 1;

    // Acessamos o item da lista, usando o índice corrigido,
    const item = lista[id];

    // Enviamos o item como resposta do endpoint.
    res.send(item);
});

// Create - [POST]/item 
app.post("/item", function(req, res){
    // Extraímos o nome do Body da requisição.
    const item = req.body.nome;

    // Adicionamos o item recebido na lista.
    lista.push(item);

    // Exibimos uma mensagem de sucesso.
    res.send("Item adicionado com sucesso!");
});

// Update - [PUT] /item
app.put("/item/:id", function(req, res){
    // Obtemos o ID do parâmetro de rota e fazemos
    // a correção do índice.
    const id = req.params.id - 1;

    // Obtemos o novo índice a ser atualizado.
    const novoItem = req.body.nome;

    // Atualizamos o valor recebido na lista, usando 
    // a posição ID para garantir que atualizamos
    // o item correto.
    lista[id] = novoItem;

    // Enviamos uma mensagem de sucesso.
    res.send("Item atualizado com sucesso!");
});

// Delete - [DELETE] /item/:id
app.delete("/item/:id", function(req, res){
    // Obtemos o ID do parâmetro de rota.
    const id = req.params.id - 1;

    // Removemos o item da lista
    delete lista[id];

    // Enviamos uma mensagem de sucesso
    res.send("Item removido com sucesso!");
});

app.listen(3000, console.log("Servidor rodando em http://localhost:3000")); 