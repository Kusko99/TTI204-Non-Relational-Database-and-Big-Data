# Merge

* Merge faz o trabalho de duas clauses, MATCH e CREATE
* O Merge consegue procurar primeiro se um nó existe na database, e caso ele não exista na database, criar um novo nó

```
merge(n:Person{name:"Moses"})
retun n
// se ja existir um nó de name Moses, ele não é criado, caso o contrário um novo nó é criado
```

* Realizando merge com relações
```
match(p{name:"Peter"}),(k{name:"Kate"})
merge (p)-[r:KNOWS]->(k)
return *
```

* Realizando merge com mais de uma relação
```
match(j{name:"Jane"}),(v{name:"Victor"})
merge (j)-[r:FOLLOWS]->(v)-[:LOVES]->(t:person{name:'Tina', age:22, nationality:"Candian "})
return *
```

* Merge com create (ON CREATE)
* Se o nó não existir o merge irá criar, usando create e possivel passar informações que o merge irá usar na hora da criação
```
merge(a:Person{name:"Ay"})
ON CREATE 
	SET a.age = 27
RETURN *
```

* Merge com Match (ON MATCH)
* Se o nó existir, usando match é possivel pedir que o banco faça algo caso o nó já exista
```
merge(m:Movie)
ON MATCH SET m.exists = "yes"
RETURN m.title, m.exists
```

* Merge com Match (ON MATCH) e (ON CREATE)
```
MERGE (n{name:"Angelas Scopes"})
ON CREATE
	SET n.nationality = "British"
ON MATCH
	SET n.nationality = "British"
RETURN *
```

* Merge com Match (ON MATCH) com multiplas propriedades
```
MERGE (person{name:'Hugo Weaving'})
ON MATCH SET person.address = "21 Brown Street, Victoria Island, Lagos", person.married = "No"
RETURN person.name, person.address, person.Married
```