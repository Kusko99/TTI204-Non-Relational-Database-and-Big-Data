# Expressões Regulares

* O Neo4J sabe que vc está usando regex quando vc usa =~


###### Exemplos

```
MATCH(n)
WHERE n.name =~ "Keanu Reeves"
RETURN n.name
```

* Ao usar ponto (.) vc está dizendo que pode haver qualquer caractere naquela posição
```
MATCH(n)
WHERE n.name =~ "Kean. Ree.es"
RETURN n.name
```

* Uma ou mais ocorrências do caractere que está a esquerda do (+)
* Somente a um caractere anterior na esquerda, não uma cadeia de caracteres
```
MATCH(n)
WHERE n.name =~ "Kean. Re+ves"
RETURN n.name
```

* zero ou uma ocorrências do caractere que está a esquerda do (?)
* Somente a um caractere anterior na esquerda, não uma cadeia de caracteres
```
MATCH(n)
WHERE n.name =~ "Tonyh? Scott"
RETURN n.name
```

* zero ou mais ocorrências do caractere que está a esquerda do (*)
* Somente a um caractere anterior na esquerda, não uma cadeia de caracteres
```
MATCH(n)
WHERE n.name =~ ".*"
RETURN n.name
```

* O começo de uma linha (^)
* Todos os nomes começados em C
```
MATCH(n)
WHERE n.name =~ "^C.*"
RETURN n.name
```

* O fim de uma linha ($)
* Todos os nomes terminados em t
```
MATCH(n)
WHERE n.name =~ ".+t$"
RETURN n.name
```

* A existencia de um caractere dentre uma lista de caracteres ([])
```
MATCH(n)
WHERE n.name =~ "T[auoijk].*"
RETURN n.name
```
* caracteres de alguma coisa a alguma coisa
* caracteres de e até k
```
MATCH(n)
WHERE n.name =~ "T[e-k].*"
RETURN n.name
```
