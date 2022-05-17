db.produtos.updateMany(
    { criadoPor: null },
    { $set: { criadoPor: "Ronald Mcdonald" } },
  );
  
db.produtos.find({}, {
     nome: 1,
     criadoPor: 1,
     _id: 0,
});