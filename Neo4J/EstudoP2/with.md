# With Clause

* Te permite selecionar algumas propriedades é solicitar que todos os resultados que tenham essa propriedades com um certo valor ou invtervalo de valor ou que tenham ela
* O with serve como um limitador, se n estiver dentro do with, a query n pode retornar com resultado
------------------------------------------------------
###### Exemplos

* todos as relaçoes de When Harry Met Sally com o nome em Upper Case
* e os nomes termina com Y
```
match(n{title:"When Harry Met Sally"})<- - (otherNodes)
with n, toUpper(otherNodes.name) AS UpperNames
where UpperNames ends with 'Y'
return n.title, UpperNames
```

* Se colocar uma expressão no With é necessário por AS
```
match(n) - [r] -> (m)
with *, toUpper(n.name) AS name
return n.name,NAME
```

* Para retornar os dados em forma de lista/coleção
* Neste formato, não podemos fazer order by, limit e skip
* Por isso usamos o with para fazer essas funções antes do collect
```
match(n)
with n
order by n.name
skip 2
limit 3
return collect(n.num)
```