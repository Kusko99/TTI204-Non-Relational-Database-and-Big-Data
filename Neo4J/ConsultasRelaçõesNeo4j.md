# Resumo de Neo4j

Este é um resumo sobre o Banco de Dados em Grafos NEO4J
Escrito pelo Kusko
Note o NEO4J usado uma linguagem parecida com SQL chamada Cypher

# Consultas Relações

* Lembrar que relações tem sentido, o sentido da relação importa na hora de buscar
* O retorno pode conter apenas um dos nós, ambos, só a relação, um nó e a realção ou tudo
* O mais comum é retornar os dois nós ou apenas um e não a relação 
------

* Fazer buscar com a realação "JOIN"
```
MATCH (n:Label) - [r: Relação] -> (m:Label)
RETURN n,p
```

* Fazer a busca da realação no outro sentido
```
MATCH (m:Label) <- [r: Relação] - (n:Label)
RETURN n,p
```

* Fazer uma busca filtrando por proriedadade da relação
```
MATCH (n:Label) - [r: Relação] -> (m:Label)
WHERE r.propriedade >= 35
RETURN n,p
```

* Fazer uma busca com mais de duas relações
```
MATCH(n:PLAYER{name:"LeBron James"}) - [:TEAMMATES] -> (p:PLAYER)
MATCH(p) - [r:PLAYS_FOR] -> (m:TEAM)
WHERE r.salary >= 40000000
RETURN p
```

* Contar o número de relações
```
MATCH (player:PLAYER)- [r:PLAYED_AGAINST] -> (:TEAM)
RETURN player.name, COUNT(r)
```

* Conseguir a média
```
MATCH (player:PLAYER)- [r:PLAYED_AGAINST] -> (:TEAM)
RETURN player.name, AVG(r.points)
```