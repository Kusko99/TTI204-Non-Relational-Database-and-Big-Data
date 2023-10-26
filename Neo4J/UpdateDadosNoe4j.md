# Resumo de Neo4j

Este é um resumo sobre o Banco de Dados em Grafos NEO4J
Escrito pelo Kusko
Note o NEO4J usado uma linguagem parecida com SQL chamada Cypher

# Update de dados no Neo4j

* Update de um nó inserindo uma nova propriedade
```
MATCH(n:PLAYER)
WHERE ID(n) = 0
SET n.name = "Daniel Tijolos"
RETURN n
```

* Update de uma propriedade
```
MATCH(n:PLAYER)
WHERE ID(n) = 3 
SET n.height = 2.02
RETURN n
```

* Update de uma propriedade e adicionar outra
```
MATCH(n:PLAYER)
WHERE ID(n) = 3 
SET n.height = 2.02, n.age = 36
RETURN n
```

* Adicionando uma Label
```
MATCH(n:PLAYER)
WHERE ID(n) = 3 
SET n:REF
RETURN n
```

* Update de dados de uma relação
```
MATCH(n {name:"LeBron James"}) - [r:PLAYS_FOR] -> (t:TEAM)
SET r.salary = 60000000
RETURN n,t
```
* Removendo uma Propriedade
```
MATCH(n:PLAYER {name:"LeBron James"})
REMOVE n.age
RETURN n
```

* Removendo uma Label
```
MATCH(n:PLAYER {name:"LeBron James"})
REMOVE n:REF
RETURN n
```