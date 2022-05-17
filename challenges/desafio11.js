db.produtos.find({
    $nor: [
      { nome: "McChicken" },
      { nome: "Big Mac" },
    ],
  }, {
    nome: 1,
    vendidos: 1,
    curtidas: 1,
    _id: 0,
  }); 