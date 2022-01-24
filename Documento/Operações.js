use AttGrupo

// Inserção de álbum
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

// Atualização/Deleção de propriedade
db.Album.updateOne(
    { nome: "desconhecido" },
    { $pull: { faixas: { titulo: "Anunciacao" } } }
)

// Inserção múltipla
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

// Atualização de propriedade em múltiplos sub-objetos dentro de um array
db.Album.updateMany(
    { nome: "Afrociberdelia" },
    { $set: { "faixas.$[elem].ano": 1996 } },
    { "arrayFilters": [{ "elem.ano": 1896 }] }
)

// Insere uma álbum sem nome
db.Album.insertOne(
    {
        nome: "sem nome",
        tipo: "desconhecido",
        ano: null
    }
)

// Substitui o álbum sem nome por outro registro
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

// Apaga o álbum correspondente
db.Album.deleteOne(
    {
        nome: "Amor Sin Límite"
    }
)

// Apaga vários álbuns lançados antes de 1998
db.Album.deleteMany(
    { 
        ano: { 
            $lt: 1998 
        } 
    }
)

// Procura álbuns que tem artista com "Ramalho" no nome (LIKE), ano menor ou igual e faz projeção apenas de nome, ano e faixas
db.Album.find(
    { "artista.nome": /Ramalho/, ano: { $gte: 1993 } },
    { nome: 1, ano: 1, faixas: 1 }
).sort({ ano: -1 }).limit(4)

// Procura álbuns com anos diferentes
db.Album.distinct("ano")

// Procura álbuns em plataformas gratuitas e faz projeção de nome e nome da plataforma
db.Album.find({ "plataforma.tipo": "Gratuita" }, { nome: 1, "plataforma.nome": 1 })

// Procura faixas que o titulo contenha "a" e faz projeção, trazendo apenas os 3 primeiros registros
db.Album.find({ "faixas.titulo": /a/ }, { "faixas.titulo": 1 }).skip(3)