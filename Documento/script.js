// Criação da base de dados
use AttGrupo

db.createCollection("Artista")
db.createCollection("Musica")
db.createCollection("Plataforma")
db.createCollection("Album")
db.createCollection("Faixa")

db.Artista.insertMany(
    [
        {
            nome: "Alceu Valença",
            dataNasc: new Date("1946-07-01"),
            nascionalidade: "Brasileiro"
        },
        {
            nome: "Zé Ramalho",
            dataNasc: new Date("1949-10-03"),
            nascionalidade: "Brasileiro"
        },
        {
            nome: "Lenine",
            dataNasc: new Date("1959-02-02"),
            nascionalidade: "Brasileiro"
        },
        {
            nome: "Elba Ramalho",
            dataNasc: new Date("1951-08-17")
        },
        {
            nome: "Alejandro Sanz",
            dataNasc: new Date("1968-12-18"),
            nascionalidade: "Espanhol"
        },
        {
            nome: "Roberto Carlos",
            dataNasc: new Date("1941-04-19"),
            nascionalidade: "Brasileiro"
        }
    ]
)


db.Musica.insertMany(
    [
        {
            titulo: "Anunciacao",
            compositor: "Alceu Valença",
            ano: 1983,
            duracao: "06:04"
        },
        {
            titulo: "Frevo Mulher",
            compositor: "Zé Ramalho",
            ano: 1979
        },
        {
            titulo: "Taxi Lunar",
            compositor: "Geraldo Azevedo",
            ano: 1979,
            duracao: "03:33"
        },
        {
            titulo: "Forro de Olinda",
            compositor: "Alceu Valença"
        },
        {
            titulo: "Chão de Giz",
            compositor: "Zé Ramalho",
            ano: 1978,
            duracao: "04:33"
        },
        {
            titulo: "Esa Mujer",
            compositor: "Alejandro Sanz",
            duracao: "03:00"
        },
        {
            titulo: "Paciência",
            compositor: "Lenine",
            ano: 1999,
            duracao: "03:37"
        }
    ]
)


db.Plataforma.insertMany(
    [
        {
            nome: "Spotify",
            tipo: "Paga"
        },
        {
            nome: "SoundCloud",
            tipo: "Gratuita"
        },
        {
            nome: "4Shared",
            tipo: "Gratuita"
        },
        {
            nome: "Deezer",
            tipo: "Paga"
        },
        {
            nome: "MixCloud"
        }
    ]
)



db.Album.insertMany(
    [
        {
            nome: "Zé Ramalho ao vivo",
            tipo: "Físico",
            ano: 2005,
            idArtista: 2,
        },
        {
            nome: "Na Pressão",
            tipo: "Físico",
            ano: 1999,
            idArtista: 3,
            CodPlataforma: 3
        },
        {
            nome: "Amor Sin Límite",
            tipo: "Digital",
            idArtista: 6,
            CodPlataforma: 1
        },
        {
            nome: "O Grande Encontro 20 anos",
            tipo: "Digital",
            ano: 2016,
            idArtista: 1,
            CodPlataforma: 1
        },
        {
            nome: "O Grande Encontro 20 anos",
            tipo: "Digital",
            ano: 2016,
            idArtista: 1,
            CodPlataforma: 4
        },
        {
            nome: "O Grande Encontro 20 anos",
            tipo: "Digital",
            ano: 2016,
            idArtista: 4,
            CodPlataforma: 1
        },
        {
            nome: "O Grande Encontro 20 anos",
            tipo: "Digital",
            ano: 2016,
            idArtista: 4,
            CodPlataforma: 4
        }
    ]
)

db.Faixa.insertMany(
    [
        {
            CodAlbum: 1,
            CodMusica: 4
        },
        {
            CodAlbum: 1,
            CodMusica: 5
        },
        {
            CodAlbum: 1,
            CodMusica: 6
        },
        {
            CodAlbum: 1,
            CodMusica: 7
        },
        {
            CodAlbum: 2,
            CodMusica: 1
        },
        {
            CodAlbum: 2,
            CodMusica: 4
        },
        {
            CodAlbum: 2,
            CodMusica: 5
        },
        {
            CodAlbum: 2,
            CodMusica: 6
        },
        {
            CodAlbum: 2,
            CodMusica: 7
        },
        {
            CodAlbum: 3,
            CodMusica: 1
        },
        {
            CodAlbum: 3,
            CodMusica: 4
        },
        {
            CodAlbum: 3,
            CodMusica: 5
        },
        {
            CodAlbum: 3,
            CodMusica: 6
        },
        {
            CodAlbum: 3,
            CodMusica: 7
        },
        {
            CodAlbum: 4,
            CodMusica: 2
        },
        {
            CodAlbum: 7,
            CodMusica: 2
        },
        {
            CodAlbum: 5,
            CodMusica: 1
        },
        {
            CodAlbum: 6,
            CodMusica: 3
        }
    ]
)
