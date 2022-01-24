
//Grupo: Wendel Isaac, Pedro pereira e Carlos Eduardo
// Cria��o da base de dados
use AttGrupo
db.createCollection("Album")
db.Album.insertMany(
    [
        {
            nome: "Z� Ramalho ao vivo",
            tipo: "F�sico",
            ano: 2005,
            artista: [
                {
                    nome: "Z� Ramalho",
                    dataNasc: new Date("1949-10-03"),
                    nascionalidade: "Brasileiro"
                }
            ],
            faixas: [
                {
                    titulo: "Ch�o de Giz",
                    compositor: "Z� Ramalho",
                    ano: 1978,
                    duracao: "04:33"
                },
            ]
        },
        {
            nome: "Na Press�o",
            tipo: "F�sico",
            ano: 1999,
            plataforma: [
                {
                    nome: "Deezer",
                    tipo: "Paga"
                }
            ],
            artista: [
                {
                    nome: "Lenine",
                    dataNasc: new Date("1959-02-02"),
                    nascionalidade: "Brasileiro"
                }
            ],
            faixas: [
                {
                }
            ]
        },
        {
            nome: "Amor Sin L�mite",
            tipo: "Digital",
            idArtista: 6,
            plataforma: [
                {
                    nome: "Spotify",
                    tipo: "Paga"
                }
            ],
            artista: [
                {
                    nome: "Alejandro Sanz",
                    dataNasc: new Date("1968-12-18"),
                    nascionalidade: "Espanhol"
                }
            ],
            faixas: [
                {
                }
            ]
        },
        {
            nome: "O Grande Encontro 20 anos",
            tipo: "Digital",
            ano: 2016,
            plataforma: [
                {
                    nome: "Spotify",
                    tipo: "Paga"
                }
            ],
            artista: [
                {
                    nome: "Alceu Valen�a",
                    dataNasc: new Date("1946-07-01"),
                    nascionalidade: "Brasileiro"
                },
                {
                    nome: "Elba Ramalho",
                    dataNasc: new Date("1951-08-17")
                },
            ],
            faixas: [
            ]
        },
        {
            nome: "desconhecido",
            faixas: [
                {
                    titulo: "Anunciacao",
                    compositor: "Alceu Valen�a",
                    ano: 1983,
                    duracao: "06:04"
                },
                {
                    titulo: "Frevo Mulher",
                    compositor: "Z� Ramalho",
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
                    compositor: "Alceu Valen�a"
                },
                {
                    titulo: "Ch�o de Giz",
                    compositor: "Z� Ramalho",
                    ano: 1978,
                    duracao: "04:33"
                },
                {
                    titulo: "Esa Mujer",
                    compositor: "Alejandro Sanz",
                    duracao: "03:00"
                },
                {
                    titulo: "Paci�ncia",
                    compositor: "Lenine",
                    ano: 1999,
                    duracao: "03:37"
                }
            ]
        }
    ]
)
