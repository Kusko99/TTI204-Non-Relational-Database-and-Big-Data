# Count Clause

* Count conta a quantidade

_ _ _ _ _ __________________

* contar todos os nós com label Person, incluindo null
```
match(n:Person)
return count(*)
```

* contar todos os nós com label Movie, incluindo null
```
match(n:Movie)
return count(*)
```

* todas os nós com label Person, onde o born não é null
```
match(n:Person)
WHERE n.born is not null
return count(*)
```

* todas os nós com label Person, onde o born é null
```
match(n:Person)
WHERE n.born is null
return count(*)
```

* contando somente os anos distintos
* DISTINCT
```
match(n:Person)
return count(distinct n.born)
```

* Quantidade de nós conctados diretamente ao "Tom Hawks"
```
MATCH(n{name:"Tom Hanks"}) --> (x)
RETURN count(*)
```

# Sum Cluase

* Sum soma todos os valores de um campo

-------------------

* Somando todos os anos de nascimento
```
match(n:Person)
WHERE n.born is not null
return sum(n.born)
```