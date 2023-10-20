const express = require("express");
const app = express();
const PessoaController = require("../controller/pessoaController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const pessoaController = new PessoaController();

app.get("/pessoas", async function (req, res, next) {
  try {
    const result = await pessoaController.findAllPessoas();
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

app.get("/pessoas/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const result = await pessoaController.findByIdPessoa(id, res);
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

app.post("/pessoas", async function (req, res, next) {
  try {
    const body = req.body;
    const result = await pessoaController.createPessoa(body, res);
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

app.put("/pessoas/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await pessoaController.updatePessoa(id, body);
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

app.delete("/pessoas/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const result = await pessoaController.deletarPessoa(id);
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});
module.exports = app;
