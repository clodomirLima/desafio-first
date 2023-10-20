const express = require("express");
const app = express();
const PessoaController = require("../../src/controller/pessoaController");

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const pessoaController = new PessoaController();

app.get("/pessoas", async function (req, res) {
    const result = await pessoaController.findAllPessoas();
    return res.json(result);
});

app.get("/pessoas/:id", async function (req, res) {
    const id = req.params.id;
    const result = await pessoaController.findByIdPessoa(id);
    return res.json(result);
});

app.post("/pessoas", async function (req, res) {
    const body = req.body;
    const result = await pessoaController.createPessoa(body, res);
    return res.json(result);
});

app.put("/pessoas/:id", async function (req, res) {
    const id = req.params.id;
    const body = req.body;
    const result = await pessoaController.updatePessoa(id, body);
    return res.json(result);
});

app.delete("/pessoas/:id", async function (req, res) {
    const id = req.params.id;
    const result = await pessoaController.deletarPessoa(id);
    return res.json(result);
});
module.exports = app;