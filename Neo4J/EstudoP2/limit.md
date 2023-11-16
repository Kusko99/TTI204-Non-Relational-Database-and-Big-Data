# Limit Clause

* Serve para limitar quantos resultados a query irá retornar

* Limitar somente 3 resultados
```
match(b:Person)
return n.name
limit 3
```
* Limitar somente 3 resultados mas agora ordenando
```
match(b:Person)
return n.name
order by n.name DESC
limit 3
```
* Limitar usando uma expressão matematica
```
match(b:Person)
return n.name
order by n.name DESC
limit 10 - 7
```