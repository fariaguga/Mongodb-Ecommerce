db.produtos.updateMany(
    { $or: [{ nome: "Quarteirão com Queijo" }, { nome: "Big Mac" }] },
    { $push: { ingredientes: "bacon" } },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });