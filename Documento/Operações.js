use AttGrupo

db.Album.insertOne(
    {
        nome: "Anjo Avesso",
        tipo: "Fí­sico",
        ano: 1983,
        plataforma: [
        ],
        faixas: [
            {
                titulo: "Anunciacao",
                compositor: "Alceu Valença",
                ano: 1983,
                duracao: "06:04"
            }
        ]
    }
)

db.Album.updateOne(
    { nome: "desconhecido" },
    { $pull: { faixas: { titulo: "Anunciacao" } } }
)

db.Album.insertMany(
    [
        {
            nome: "Da Lama ao Caos",
            tipo: "Físico",
            ano: 1994,
            plataforma: [],
            faixas: [
                {
                    titulo: "Monólogo ao Pé do Ouvido",
                    ano: 1994,
                    duracao: "01:07"
                },
                {
                    titulo: "Da Lama ao Caos",
                    ano: 1994,
                    compositor: "Chico Science, Jorge du Peixe",
                    duracao: "04:11"
                }
            ]
        },
        {
            nome: "Afrociberdelia",
            tipo: "Físico",
            ano: 1996,
            plataforma: [],
            faixas: [
                {
                    titulo: "Sangue de Bairro",
                    ano: 1896,
                    duracao: "02:12"
                },
                {
                    titulo: "Criança de Domingo",
                    ano: 1896,
                    duracao: "03:28"
                }
            ]
        }
    ]
)

db.Album.updateMany(
    { nome: "Afrociberdelia" },
    { $set: { "faixas.$[elem].ano": 1996 } },
    { "arrayFilters": [{ "elem.ano": 1896 }] }
)

db.Album.insertOne(
    {
        nome: "sem nome",
        tipo: "desconhecido",
        ano: null
    }
)
db.Album.replaceOne(
    { nome: "sem nome" },
    {
        nome: "O Furacão é Show",
        tipo: "Físico",
        ano: 2009,
        plataforma: [
            {
                nome: "Youtube",
                tipo: "Gratuita"
            }
        ],
        faixas: []
    }
)

db.Album.deleteOne(
    {
        nome: "Amor Sin Límite"
    }
)

db.Album.deleteMany(
    { 
        ano: { 
            $lt: 1998 
        } 
    }
)

db.Album.find(
    { "artista.nome": /Ramalho/, ano: { $gte: 1993 } },
    { nome: 1, ano: 1, faixas: 1 }
).sort({ ano: -1 }).limit(4)

db.Album.distinct("ano")

db.Album.find({ "plataforma.tipo": "Gratuita" }, { nome: 1, "plataforma.nome": 1 })

db.Album.find({ "faixas.titulo": /a/ }, { "faixas.titulo": 1 }).skip(3)