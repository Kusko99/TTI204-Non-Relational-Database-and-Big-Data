# Delete Clause

* Deletar nó ou nós
* Deletar relações
* Deletar um caminho

* Não é possivel deletar um nó que tenha uma relação a outro nó
* Para deletar um nó é necessário primeiro, desconectar esse nó dos outros nós

###### Exemplos
* Deletando um nó desconcetado
```
match(n{name:"A"})
delete n
```
* Deletando um nó que tem relações com outros nós
```
match(n{name:"Tom Skerritt"})
detach
delete n
```
* Deletando uma relação
```
match(t{title:"Top Gun"})<-[r:WROTE]-(j{name:"Jim Cash"})
delete r
```

# Remove Clause
* Remover labels de um nó
* Remover propriedades de um nó

###### Exemplos
* Remover uma propriedade
```
match(n{name:"Jim Cash"})
remove n.born
return n
```

* Remover duas ou mais propriedades
```
match(n{name:"Jim Cash"})
remove n.weight, n.name
return n
```

* Remover um labels
```
match(n{name:"Jim Cash"})
remove n:Actor
return n
```

* Remover duas ou mais labels
```
match(n{name:"Jim Cash"})
remove n:Person:Writer
return n
```