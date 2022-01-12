# OBJETIVO:
Criar um grafo com informações do período 2021-2 (Professores, disciplinas e cursos).
Informações podem ser tiradas do manual do estudante (ver LINK 3)

## REQUISITOS DO PROJETO:

Mapear informações de pelo menos 5
professores, suas disciplinas e as turmas/cursos dessas disciplinas. Incluir as seguintes informações:


+ Nós:

    Professor: nome e sobrenome, idade e
    formação (podem inventar essas duas últimas)
    Disciplina: nome, carga horária
    Curso: nome (ADS/IPI/Qualidade), nome do
    coordenador








+ Relacionamentos:

    Professor – ministra – disciplina,
    indicando em qual turno.
    Disciplina – faz parte – curso, indicando
    o período.




+ Ferramentas:



    Realizar inserções, deleções,
    atualizações e seleções
    Para cada seleção, descrever o que deseja
    realizar junto com o comando. Lembre de:
    Realizar consultas genéricas e outras com
    filtros
    Filtros nas propriedades tanto dos nós
    como dos relacionamentos
    Filtros por valores numéricos e textuais
    Utilizar
    consultas semelhantes ao LIKE de SQL (ver LINK 1)
    Retornar ora grafos ora valores
    sumarizados (ver LINK 2)














ONTUAÇÃO: 2 pontos
ENTREGA: arquivo texto contendo os requisitos descritos acima.


<https://neo4j.com/docs/cypher-manual/current/clauses/where/#query-where-string>
<https://neo4j.com/docs/cypher-manual/current/functions/aggregating/>
<https://sites.google.com/jaboatao.ifpe.edu.br/ensino/horario20211?authuser=0>