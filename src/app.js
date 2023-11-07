const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

app.get("/musicians", async (req, res) => {
  const musicians = await Musician.findAll();
  res.json(musicians);
});

app.get("/musicians/:id", async (req, res) => {
  const number = req.params.id;
  const musician = await Musician.findByPk(number);
  res.json(musician);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/musicians", async (req, res) => {
  const newMusician = await Musician.create(req.body);
  res.json(newMusician);
});

app.put("/musicians/:id", async (req, res) => {
  const updatedMusc = await Musician.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedMusc);
});

app.delete("/musicians/:id", async (req, res) => {
  const deletedMusc = await Musician.destroy({
    where: { id: req.params.id },
  });
  res.json(deletedMusc);
});

module.exports = app;
