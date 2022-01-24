//Script

// ---------------------- Nós ----------------------------------------------------------------------

// Professores
CREATE (p1:Professor{nome:"Carolina Torres", idade:34, formacao: "Ciências da Computação"})
CREATE (p2:Professor{nome:"Luciano Cabral", idade:38, formacao: "Ciências da Computação"})
CREATE (p3:Professor{nome:"Josino Neto", idade:34, formacao: "Sistemas de Informação"})
CREATE (p4:Professor{nome:"Sérgio Santana", idade:38, formacao: "Licenciatura em Computação"})
CREATE (p5:Professor{nome:"Carlos José", idade:40, formacao: "Design Gráfico"})




// ADS 3º
CREATE (c1:Curso{nome:"ADS", nomeCoordenador: "$ PREENCHER AQUI", periodo: "3º"})

CREATE (d1:Disciplina{nome:"Programação Orientada a Objetos" , ch:"$ PREENCHER AQUI"})
CREATE (d2:Disciplina{nome:"Inteligência Artificial" , ch:"$ PREENCHER AQUI"})
CREATE (d3:Disciplina{nome:"Banco de Dados 2" , ch:"$ PREENCHER AQUI"})
CREATE (d4:Disciplina{nome:"Metodologia Científica" , ch:"$ PREENCHER AQUI"})
CREATE (d5:Disciplina{nome:"Programação Web 3" , ch:"$ PREENCHER AQUI"})
CREATE (d6:Disciplina{nome:"Interface Humano-Computador" , ch:"$ PREENCHER AQUI"})

// IPI 3º
CREATE (c2:Curso{nome:"IPI", nomeCoordenador: "$ PREENCHER AQUI", periodo: "3º"})

CREATE (d7:Disciplina{nome: "Interface Humano-Computador", ch: "$ PREENCHER AQUI"})




// ---------------------- Relacionamentos ------------------------------------------------------------

create (p2)-[:ministra{turno:'noite'}]->(d1)
create (p2)-[:ministra{turno:'noite'}]->(d2)
create (p1)-[:ministra{turno:'noite'}]->(d3)
create (p4)-[:ministra{turno:'noite'}]->(d4)
create (p5)-[:ministra{turno:'noite'}]->(d5)
create (p3)-[:ministra{turno:'noite'}]->(d6)
create (p5)-[:ministra{turno:'noite'}]->(d7)

create (d1)-[:fazParte{periodo:3}]->(c1)
create (d2)-[:fazParte{periodo:3}]->(c1)
create (d3)-[:fazParte{periodo:3}]->(c1)
create (d4)-[:fazParte{periodo:3}]->(c1)
create (d5)-[:fazParte{periodo:3}]->(c1)
create (d6)-[:fazParte{periodo:3}]->(c1)
create (d7)-[:fazParte{periodo:3}]->(c2)






