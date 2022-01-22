//Script

// ---------------------- Nós ----------------------------------------------------------------------

// Professores
CREATE (p1:Professor{nome:"Carolina Torres", idade:34, formacao: "Ciências da Computação"})
CREATE (p2:Professor{nome:"Luciano Cabral", idade:38, formacao: "Ciências da Computação"})
CREATE (p3:Professor{nome:"Josino Neto", idade:34, formacao: "Sistemas de Informação"})
CREATE (p4:Professor{nome:"Sérgio Santana", idade:38, formacao: "Licenciatura em Computação"})
CREATE (p5:Professor{nome:"Carlos José", idade:40, formacao: "Design Gráfico"})

CREATE (p7:Professor{nome: "Bruno", idade: 45, formacao: "Engenharia de Software"})
CREATE (p8:Professor{nome: "Carlos", idade: 31, formacao: "Sistemas de Informação"})
CREATE (p9:Professor{nome: "Francisco Nascimento", idade: 42, formacao: "Ciências da Computação"})
CREATE (p10:Professor{nome: "Divanilson", idade: 36, formacao: "Engenharia de Software"})
CREATE (p11:Professor{nome: "Diego dos Passos", idade: 32, formacao: "Sistemas de Informação"})
CREATE (p12:Professor{nome: "Diego dos Passos", idade: 32, formacao: "Sistemas de Informação"})

CREATE (p13:Professor{nome:"Aline Clemente", idade:35, formacao: "Engenharia de Produção"})
CREATE (p14:Professor{nome:"Djuri Vieira", idade:45, formacao: "Administração"})
CREATE (p15:Professor{nome:"Luciano Acioli", idade:39, formacao: "Física"})
CREATE (p16:Professor{nome:"Symone Nascimento", idade:52, formacao: "Filosofia"})
CREATE (p17:Professor{nome:"Roberta", idade:32, formacao: "Letras Inglês"})
CREATE (p18:Professor{nome:"Sóstenes Cruz", idade:37, formacao: "Administração"})

// ADS 3º
CREATE (c1:Curso{nome:"ADS", nomeCoordenador: "$ PREENCHER AQUI"}, periodo: "3º")

CREATE (d1:Disciplina{nome:"Programação Orientada a Objetos" , ch:"$ PREENCHER AQUI"})
CREATE (d2:Disciplina{nome:"Inteligência Artificial" , ch:"$ PREENCHER AQUI"})
CREATE (d3:Disciplina{nome:"Banco de Dados 2" , ch:"$ PREENCHER AQUI"})
CREATE (d4:Disciplina{nome:"Metodologia Científica" , ch:"$ PREENCHER AQUI"})
CREATE (d5:Disciplina{nome:"Programação Web 3" , ch:"$ PREENCHER AQUI"})
CREATE (d6:Disciplina{nome:"Interface Humano-Computador" , ch:"$ PREENCHER AQUI"})

// IPI 3º
CREATE (c1:Curso{nome:"IPI", nomeCoordenador: "$ PREENCHER AQUI", periodo:})

CREATE (d7:Disciplina{nome: "Projeto e Prática 2", ch: "$ PREENCHER AQUI"})
CREATE (d8:Disciplina{nome: "Teste de Software", ch: "$ PREENCHER AQUI"})
CREATE (d9:Disciplina{nome: "Desenvolvimento Web 3", ch: "$ PREENCHER AQUI"})
CREATE (d10:Disciplina{nome: "Tecnologias Emergentes", ch: "$ PREENCHER AQUI"})
CREATE (d11:Disciplina{nome: "Interface Humano-Computador", ch: "$ PREENCHER AQUI"})
CREATE (d12:Disciplina{nome: "Segurança Web", ch: "$ PREENCHER AQUI"})
CREATE (d13:Disciplina{nome: "Segurança do Trabalho", ch: "$ PREENCHER AQUI"})
CREATE (d14:Disciplina{nome: "Empreendedorismo", ch: "$ PREENCHER AQUI"})

// Qualidade
CREATE (c1:Curso{nome:"Qualidade", nomeCoordenador: "$ PREENCHER AQUI", periodo:})

CREATE (d15:Disciplina{nome: "Normalização da Qualidade", ch: "$ PREENCHER AQUI"})
CREATE (d16:Disciplina{nome: "Prática Profissional", ch: "$ PREENCHER AQUI"})
CREATE (d17:Disciplina{nome: "Controle Estatítico de Processos", ch: "$ PREENCHER AQUI"})
CREATE (d18:Disciplina{nome: "Metrologia 2", ch: "$ PREENCHER AQUI"})
CREATE (d19:Disciplina{nome: "Segurança do Trabalho", ch: "$ PREENCHER AQUI"})
CREATE (d20:Disciplina{nome: "Inglês Instrumental", ch: "$ PREENCHER AQUI"})
CREATE (d21:Disciplina{nome: "Empreendedorismo", ch: "$ PREENCHER AQUI"})


// ---------------------- Relacionamentos ------------------------------------------------------------

