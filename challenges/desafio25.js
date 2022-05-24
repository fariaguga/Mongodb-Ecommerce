db.produtos.updateMany({
    valoresNutricionais: {
        $elemMatch: {
            tipo: "sódio",
            percentual: { $gte: 40 },
        },
    },
}, {
    $push: {
        tags: {
            $each: ["muito sódio"],
            $sort: { percentual: -1 },
        },
    },
});

db.produtos.find({}, {
    nome: 1,
    tags: 1,
    _id: 0,
});