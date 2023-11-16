# Skip Clause

* Serve para pular algumas linhas do resultado da query
* Skip indica qual será a primeira linha a ser exibida no resultado

* Alguns exemplos

```
match(n:Person)
return n.name
order by n.born ASC
SKIP 4
```

```
match(n:Person)
return n.name
order by n.born ASC
SKIP 4
LIMIT 1
```

```
match(n:Person)
return n.name
order by n.born ASC
SKIP 3
LIMIT 2
```

```
match(n:Person)
return n.name
order by n.born ASC
SKIP 3*2
```

```
match(n:Person)
return n.name
order by n.born ASC
SKIP 2*3/2
```