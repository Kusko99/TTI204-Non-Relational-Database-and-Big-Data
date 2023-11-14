# Create Clause

### Criando nós

* Criando um nó vazio

```
create()
```

* Criando multiplos nós vazios
```
create(), (),(),(),(),()
```

* Criando multiplos nós vazios
* Atribuindo variaveis
* Retornando alguns nós criados
```
create(n), (m),(p),(q),(r),(t)
return m,r,p,q
```

* Criando um nó com uma Label
```
create(n:Person)
return n
```

* Criando um nó com multiplas Labels
```
create(anne:Person:Employee:Footballer)
return anne
```

* Criando um nó com propriedades
* Mas sem uma Label
```
create(n{name:"Peter",age:25,email:"p@gmail.com"})
return n
```

* Criando um nó com propriedades
* Mas com uma Label
```
create(n:Person{name:"Anne",age:20})
return n
```


* Criando um nó com propriedades
* Mas com multiplas Labels
```
create(n:Dancer:Supplier{name:"Li",age:22})
return n
```

### Criando relações

* criando dois nós e uma relação entre eles
```
create (n:Supplier{name:'A'}),(m:Client{name:'B'}),
(n)-[:Supplied]->(m)
return m
// ou 
create (n:Supplier{name:'A'})-[:Supplied]->(m:Client{name:'B'})
return m
```

* criando multiplos nós
* criando multiplas relações entre eles
```
create 
(T:Person{name:'Tim'}),
(K:Person{name:'Kate'}),
(J:Person{name:'John'}),
(K)-[:Follows]->(T)-[:Follows]->(J)-[:Follows]->(K)<-[:Follows]-(T)
return *
```

* criando multiplos nós com multiplas relações
* mas com uma variavel de caminho 'path'
```
create 
(T:Person{name:'Tim'}),
(K:Person{name:'Kate'}),
(J:Person{name:'John'}),
p = (K)-[:Follows]->(T)-[:Follows]->(J)-[:Follows]->(K)<-[:Follows]-(T)
return p
```

### MATCH E CREATE

* Match dois nós e criando a relação entre eles
```
match(Z{name:"Robert Zemeckis"}),
(T{name:"Tom hanks"})
create (Z) - [:colleague_of] -> (T) - [:colleague_of] -> (Z)
return *
```