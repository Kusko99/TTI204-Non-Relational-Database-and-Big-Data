# Where Clause

* Usado para filtrar os resultados
```
match(n)
where n:Person
return n.name
// tem o mesmo resultado que
match(n:Person)
return n.name
```
* Filtrando uma propriedade de um nó
```
MATCH(n:Person)
WHERE n.born < 1960
RETURN n.name, n.born
ORDER BY n.born DESC
```

* Filtrando por uma propriedade ou outra
```
MATCH(n:Person)
WHERE n.born > 1960 OR n.born < 1960 OR n.born = 1960
RETURN n.name, n.born
ORDER BY n.born DESC
```

* Filtrando em propriedades de relações
```
MATCH(n:Person) - [r] -> ()
WHERE r.roles = "Tiger Man"
RETURN n.name
```
```

match(n:Person)-[r]->()
where r.roles = ["Kit Keller"]
SET r.Attendance = [1,2,5,9,8]
```

* Filtrando pelo prefixo (começo) de uma String
* STARTS WITH
```
MATCH(n:Person)
WHERE n.name STARTS WITH 'Tom'
RETURN n.name,n.born
```

* Filtrando pelo sufixo (final) de uma String
* ENDS WITH
```
MATCH(n:Person)
WHERE n.name ENDS WITH 'l'
RETURN n.name,n.born
```
```
MATCH(n:Person)
WHERE n.name ENDS WITH 'l'
CRETAE (n) - [:ENDS_WITH] -> (m{string:"l"})
RETURN *
```

* Filtrando por uma substring
```
MATCH(n:Movie)
WHERE n.title CONTAINS 'trix'
RETURN n.title, n.tagline
```

* Buscando uma string que não contenha algo
```
match(m:Movie)
WHERE NOT m.title CONTAINS 'aded'
RETURN m.title, m.tagline
```

* Buscando uma string que não começe com algo
```
match(m:Movie)
WHERE NOT m.title STARTS WITH 'The'
RETURN m.title, m.tagline
```

* Buscando uma string que não termine com algo
```
match(m:Movie)
WHERE NOT m.title ENDS WITH 'Away'
RETURN m.title, m.tagline
```

* Filtrando em Paths com propriedades
```
match(n:Person)
where (n) - [:FOLLOWS] -> ({name:'Angela Scope'})
return n.name
```

* Subconsulta Existencial
* EXISTS
```
match(n:Person)
where EXISTS {(n)-[:FOLLOWS]->()}
return n.name
```

* List com Where
```
MATCH(m:Movie)
WHERE m.title IN ["Bicentennial Man", "Charlie Wilson's War", "The Polar Express", "Unforgiven", "The Da Vinci Code"]
RETURN m.title, m.released, m.tagline
```

# AND, OR, XOR e NOT

* AND
```
MATCH(n)
WHERE n.name >= "a" AND n.name <= "i"
RETURN n.name
```

* OR
```
MATCH(n)
WHERE n.name >= "a" OR n.name >= "g" 
RETURN n.name
```

* XOR
```
match(n)
where n.name >= "Aaron Sorkin" and
n.name <= "Angela Scope" or n.name
>= "Audrey Tautou" and n.name <= "Bill
Paxton"
return n.name
order by n.name asc
```


