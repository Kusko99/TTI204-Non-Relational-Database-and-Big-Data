# Order By

* Por default o Order By sempre ordena de forma ascendente

```
match(n)
return n.name, n,born
order by n.born
// mesma coisa que
match(n)
return n.name, n,born
order by n.born ASC
```

* Para ordenar de forma descendente
```
match(n)
return n.name, n,born
order by n.born DESC
```

* É possivel ordenar por duas ou mais propriedades
* O Neo4J irá ordenado pela primeira, depois pela segunda, mantendo a primeira ordenada, assim por diante, em cascata
* Ordenando primeiro por born, depois por name
```
match(n)
return n.name, n,born
order by n.born, n.name
```

* É possivel ordenar o born ascendente e o name descendente e vice-versa
```
match(n)
return n.name, n,born
order by n.born ASC, n.name DESC
```

* Para ordenar ambos dencendente é necessário declarar
```
match(n)
return n.name, n,born
order by n.born DESC, n.name DESC
```