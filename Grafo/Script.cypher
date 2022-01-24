//Script

// ---------------------- Nós ----------------------------------------------------------------------

// Professores
CREATE (p1:Professor{nome:"Carolina Torres", idade:34, formacao: "Ciências da Computação"})
CREATE (p2:Professor{nome:"Luciano Cabral", idade:38, formacao: "Ciências da Computação"})
CREATE (p3:Professor{nome:"Josino Neto", idade:34, formacao: "Sistemas de Informação"})
CREATE (p4:Professor{nome:"Sérgio Santana", idade:38, formacao: "Licenciatura em Computação"})
CREATE (p5:Professor{nome:"Carlos José", idade:40, formacao: "Design Gráfico"})




// ADS 3º
CREATE (c1:Curso{nome:"ADS", nomeCoordenador: "Diego dos Passos", periodo: 3})

CREATE (d1:Disciplina{nome:"Programação Orientada a Objetos" , ch:80})
CREATE (d2:Disciplina{nome:"Inteligência Artificial" , ch:60})
CREATE (d3:Disciplina{nome:"Banco de Dados 2" , ch:60})
CREATE (d4:Disciplina{nome:"Metodologia Científica" , ch:45})
CREATE (d5:Disciplina{nome:"Programação Web 3" , ch:80})
CREATE (d6:Disciplina{nome:"Interface Humano-Computador" , ch:60})

// IPI 3º
CREATE (c2:Curso{nome:"IPI", nomeCoordenador: "Roberto", periodo: 3})

CREATE (d7:Disciplina{nome: "Interface Humano-Computador", ch: 60})




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


// --------------------- Ferramentas -----------------------------------------------------------------


// Pega o nome de todas as disciplinas
MATCH (j:Disciplina) return (j.nome)

// Cria professor com idade errada
CREATE (pc:Professor{nome:"João", idade: 15, formacao: "Ciência da Computação"})

// Altera idade
MATCH (pc:Professor{nome:"João"}) SET pc.idade=35 RETURN (pc)

// Deleta professor
MATCH (pc:Professor{nome:"João"}) DELETE (pc)

// Busca professor da noite que ensina banco de dados 2
MATCH ((pc:Professor)-[:ministra{turno:"noite"}]->(cc:Disciplina{nome:"Banco de Dados 2"})) RETURN (pc)

// Busca professor com 38 anos, no turno da noite, em que a disciplina contenha "Cient" e retorna nome e formação 
MATCH ((pc:Professor{idade:38})-[:ministra{turno:"noite"}]->(cc:Disciplina)) WHERE (cc.nome CONTAINS "Cient") RETURN pc.nome, pc.formacao

// Retorna a média da carga horária da disciplina
MATCH (dd:Disciplina) RETURN avg(dd.ch)