# Resumo de Neo4j

Este é um resumo sobre o Banco de Dados em Grafos NEO4J
Escrito pelo Kusko
Note o NEO4J usado uma linguagem parecida com SQL chamada Cypher

# Inserindo Dados Neo4j

* Para inserir Dados é necessário usar a Key Word Create
* é preciso informar o Label do nó
* Um nó pode ter vários Labels
* Ao criar uma relação entre dois nós existentes é preciso fazer o MATCH para encontrar eles

----------

* Criando um nó
```
CREATE (:PLAYER:COACH:GENERAL_MANAGER {name:"LeBron James", height:2.01})
```

* Criando um nó e retornando o nó criado
```
CREATE (n:PLAYER:COACH:GENERAL_MANAGER {name:"LeBron James", height:2.01})
RETURN n
```

* Criando dois nós e inserindo uma relação entre eles
```
CREATE (:PLAYER {name:"Antony Davidson"}) - [:PLAYS_FOR {salary:34000000}] -> (:TEAM{name:"La Lakers"})
```

* Criando uma relação entre dois nós existentes
```
MATCH(p:PLAYER{name:"LeBron James"}),(t:TEAM{name:"La Lakers"})
CREATE (p) - [:PLAYS_FOR{salary:40000000}] -> (t)
```
