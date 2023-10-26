# Resumo de Neo4j

Este é um resumo sobre o Banco de Dados em Grafos NEO4J
Escrito pelo Kusko
Note o NEO4J usado uma linguagem parecida com SQL chamada Cypher

# Consultas

* Em cyper para consultar algo em Cypher é necessário dizer que está consultado algo para isso usamos a Key Word MATCH
* Para consultar um nó ele é representado como (nome_variavel)
-----------
* Consultar todos os nós do banco
```
MATCH (n) 
RETURN n
```
* Consultar todos os nós filtrando por label
```
MATCH (n:LABEL)
RETURN n
```

* Consultar uma propriedade especifica usando label
```
MATCH (n:LABEL)
RETURN n.propriedade
```

* Consultar mais de uma propriedade especifica usando label
```
MATCH (n:LABEL)
RETURN n.propriedade1, n.propriedade2, n.propriedade3
```

* Realizando a mesma consulta anterior, mas agora nomeando as colunas no resultado de retorno
```
MATCH (n:LABEL)
RETURN n.propriedade1 AS nome1, n.propriedade2 AS nome2, n.propriedade3 AS nome3
```

* Consultar filtrando uma propriedade especifica
```
MATCH (n:LABEL)
WHERE n.propriedade = "alguma coisa" //Lembre maiúsculas e minusculas importam
RETURN n
```
```
MATCH(n:LABEL {propriedade:"alguma coisa"})
RETURN n 
```
* Consultar filtrando mais de uma propiedade especifica
```
MATCH (n:LABEL)
WHERE n.propriedade = "alguma coisa" AND n.propriedade2 = 13 AND n.propriedade3 = "Outra coisa"
RETURN n
```
```
MATCH(n:LABEL {propriedade:"alguma coisa", propriedade2:13,propriedade3:"Outra coisa"})
RETURN n 
```
* Consultar filtrando os nós que tem a propriedade diferente de um certo valor
```
MATCH (n:LABEL)
WHERE n.propriedade <> "alguma coisa" //Lembre maiúsculas e minusculas importam
RETURN n
```

* Consultar os nós que tem uma propriedade maior que`, maior igual, menor que ou menor igual tanto
```
//Maior ou igual que
MATCH (n:LABEL)
WHERE n.propriedade >= 30
RETURN n
```
```
//Maior que
MATCH (n:LABEL)
WHERE n.propriedade > 30
RETURN n
```
```
Menor ou igual que
MATCH (n:LABEL)
WHERE n.propriedade <= 30
RETURN n
```
```
Menor que
MATCH (n:LABEL)
WHERE n.propriedade < 30
RETURN n
```

* Fazer consultas com contas aritmeticas 
```
MATCH(n:PLAYER)
WHERE (n.weight / (n.height * n.height)) > 25
RETURN n
```

* Consultas onde o nó tem uma propriedade ou outra ou ambas
```
MATCH (n:LABEL)
WHERE n.propriedade1 >= 100 OR n.propriedade2 = "Messi"
RETURN n
```

* Consultar nós que não atende uma condição
```
MATCH (n:LABEL)
WHERE NOT n.propriedade < 30
RETURN n
```

* Limitar a consulta a retornar uma quantidade definida
```
MATCH (n:LABEL)
WHERE NOT n.propriedade < 30
RETURN n
LIMIT 5
```

* Limitando os resultado, mas agora pulando os primeiros resultados
```
MATCH (n:LABEL)
WHERE NOT n.propriedade < 30
RETURN n
SKIP 2
LIMIT 5
```

* Ordenando os resultados (por padrão a ordem é ascendente)
```
MATCH (n:LABEL)
WHERE NOT n.propriedade < 30
RETURN n
ORDER BY n.outraproriedade
```

* Ordenando ordem descendente
```
MATCH (n:LABEL)
WHERE NOT n.propriedade < 30
RETURN n
ORDER BY n.outraproriedade DESC
```

* Ordenando ordem ascendente explicita
```
MATCH (n:LABEL)
WHERE NOT n.propriedade < 30
RETURN n
ORDER BY n.outraproriedade ASC
```

* Filtrando nós de diferentes LABELS
```
MATCH (n:LABEL1),(m:LABEL2)
RETURN n,m
```

