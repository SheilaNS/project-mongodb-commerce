db.produtos.find(
  { valoresNutricionais: { $elemMatch: { tipo: "proteínas",
    $and: [{ percentual: { $lte: 40 } }, { percentual: { $gte: 30 } }] } } },
  { nome: 1, _id: 0 },
);
