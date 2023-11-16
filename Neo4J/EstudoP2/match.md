# Match Clause

* Match todos os nós
```
match(n)
return n
```

* Match todos os nós que são pessoas
```
match(p:Person)
return p
```

### Labels

* Ao fazer um match com uma Label, ele irá retornar todos os nós com aquela Label

```
// retorna todos os Movies
match(m:Movie)
return m
```
```
// retorna todos os Action
match(m:Action)
return m
```

* Ao adicionar duas ou mais label, ele irá retornar somente aqueles que pelo menos tenham aquelas Label

```
// retorna todos que sejam ao menos Movies e Action
match(n{title:"The Da Vinci Code"})
set n:Action
return n
```

### Relações

* Match qualquer nó que tenha uma relação
```
match(n)--(m)
return *
```

* Match todos os nós relacionados ao Tom Hanks (com Tom Hanks)
```
match(t{name:'Tom Hanks'})--(n)
return *
```

* Match todos os nós relacionados ao Tom Hanks (sem Tom Hanks e sem as relações)
```
match(t{name:'Tom Hanks'})--(n)
return n
```

* Match todos os nós relacionados com Robert Zemeckis que são Movies
```
match(n{name:"Robert Zemeckis"})--(m:Movie)
return *
```

* Match todos os nós que tem relação de entrada com o The Polar Express
```
match(polar{title:"The Polar Express"})<--(k)
return *
```

* Copiando uma propriedade de um nó para outro
```
 match(a{name:'A'})
 create(n{name:'B', city:a.city})
 return n.city
```

* Copiando propriedade de relações
```
match(a{name:'A'})-[r]->(b{name:'B'})
create (b)<-[r2:KNOWS{since:r.since}]-(c{name:'c'})
return properties(r2)
```

* Match todas as relações na database
```
match(n) - [r] -> (m)
return r
```

* Match alterando o nome da coluna no retorno
```
match(n) return n.name AS NAME, n.born 
```

* Match retornando somente resultados distintos/sem repetição
* DISTINCT
```
match(n) 
return distinct n.born
```

* Retornando todas as propriedades de um nó
```
match (n)
return properties(n)
```

* Retornando todas as propriedades de uma relação
```
match()-[r]->()
return properties(r)
```

* Retornando todas as Labels
```
match(n{name:"Victor"})
return labels(n)
```

* Retornando todas as relações
```
match p = ({name:"Paul Blythe"})-->()-->()-->({title:"Cloud Atlas"})
return relationships(p)
```

* Retornando os tipos de relação
```
match(n{name:"Tom Hanks"}) - [r] - (k:Movie)
return type(r)
```

* Match com tipos de relação
```
match(n{name:"Angela Scope"}) - [r:FOLLOWS] -> (m)
return m
```

* Match com mais de um tipo de relação
* o | significa or/ou
```
match(n{name:"Charlize Thereon"})-[r:ACTED_IN|DIRECTED|PRODUCED] -> (k)
return k
```

* Retornando o tipo da relação
```
MATCH (a)-[r]->(b)
WHERE a.name = "Laurence Fishburne"
RETURN a.name, type(r), b.title
```

### Multiplas Relações

* Match diretores dos filmes que o Tom Hanks atuou
```
match(T{name:"Tom Hanks"}) - [:ACTED_IN] -> (m) <- [:DIRECTED] - (p)
RETURN p
```

* Match outros atores que atuaram com o Tom Hanks em qualquer filme
```
match(T{name:"Tom Hanks"})-[:ACTED_IN] -> (m) <-[:ACTED_IN] - (p)
return p
```

* Match os nomes do atores e os filmes que o Robert Zemeckis dirigiu
```
MATCH(R{name:"Robert Zemeckis"}) - [:DIRECTED] -> (M) <- [:ACTED_IN] - (actors)
return M.title, actors.name
```

### Opitional Match
* Eles são opcionais pois vc pode fazer a query sem ele
* Servem para quebrar a query em partes menores
* São uteis em problemas complexos
* Com Optional Match, ao inves de retornar (no changes, no records), ele retorna null

```
match(m{title:'Cloud Atlas'})
optional match (m) -> (n)
return m.title, n.name
```

```
optional match(m{title:'Cloud Atlas'}), (n{name:"Neo4j"})
return *
```

```
optional match(m{title:'Cloud Atlas'}), (n{name:"Neo4j"})
optional match(t{name:"Tom Hanks"})
return *
```