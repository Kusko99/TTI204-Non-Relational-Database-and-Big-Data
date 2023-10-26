# Resumo de Neo4j

Este é um resumo sobre o Banco de Dados em Grafos NEO4J
Escrito pelo Kusko
Note o NEO4J usado uma linguagem parecida com SQL chamada Cypher

# Deletando nós

* Lembrar que para deletar um nó é preciso primeiro fazer um Match para encontrar o nó
* Não é possivel deletar um nó que ainda possui relações (Use o comando DETACH)

---------

* Deletando um nó
```
MATCH(p:PLAYER {name:"Ja Morant"})
DETACH DELETE p
```

# Deletando uma relação

* Lembrar diferente do nó, pode se deletar uma relação sem precisar deletar o nó ou outras relações

-----------------

* Deletando uma relação
```
MATCH(p:PLAYER {name:"Joel Embiid"}) - [rel:PLAYS_FOR] -> (:TEAM)
DELETE rel
```

