# SET Clause

* Setar os labes de um nó
* Setar as propriedades de uma nó ou relação

_ _ _ _ _ _  _ 

* Setar as propriedades de um nó
```
MATCH(n{name:"James"})
SET n.age = 25
RETURN n.age
```

* Setar multiplas propriedades
```
MATCH(n{name:"James"})
SET n.age = 25, n.height = 165
RETURN n.age
```
```
MATCH(n{name:"Jacob"})
// se colocar somente igual, vai deletar as propriedades que já existem no nó
set n += {weight:"65kg",age:40,phone:"971150204"}
return properties(n)
```

* Setar um label
```
MATCH(n{name:"Luke"})
SET n:Person
return labels(n)
```

* Setar multiplos labels
```
MATCH(n{name:"Luke"})
SET n:Person:Directed:Producer
return labels(n)
```

* Removendo uma propriedade com set
```
MATCH(n{name:"Antonio"})
SET n.age = null
RETURN properties(n)
```

* Removendo todas as propriedades com set
```
MATCH(n{name:"Katie"})
SET n = { }
RETURN properties(n)
```

* Transformando uma propriedade em string
```
match(n{name:"K"})
set n.salary = toString(n.salary)
return n.salary
```

* Transformando uma propriedade em int
```
match(n{name:"K"})
set n.salary = toInteger(n.salary)
return n.salary
```

* Copiando uma propriedade entre nós
```
match(a{name:"A"}), (b{name:"B"})
set b = a
return properties(b)
```

* Copiando propriedades entre relações
```
match
({name:"Tom Hanks"})-[r1]->({title:"Cast Away"}),
({name:"Tom Hanks"})-[r2]->({title:"The Green Mile"})
set r2 = r1
return properties(r2)
```