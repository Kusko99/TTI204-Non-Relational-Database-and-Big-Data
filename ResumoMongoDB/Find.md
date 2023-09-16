# Find

* Encontrar todos os documentos de uma coleção

```
db.colecao.find()
```

* Para encontrar somente um resultado
Obs: esse metódo retorna somente o primeiro resultado que ele encontrou

```
db.colecao.findOne()
```

* Buscar algo com um filtro

```
db.colecao.find("categoria" : "news")
// ele vai retornar todos os documentos na coleção com categoria igual a news
```

* Exibir somente alguns dados do documento (PROJEÇÃO)

```
db.colecao.find({FILTRO},{"_id:0","title":1,"date":1})
//Esta consulta irá trazer o title e date dos documentos que respeitam o filtro
```
```
db.colecao.find({},{"title:1","date":1})
//Irá trazer o title e date de todos os documentos da coleção
```

```
db.colecao.find({},{"categoria":0})
//Neste caso irá devolver todos os campos de todos os documentos na coleção, menos o campo categoria
```

* Limita a quantida de resultados que uma query retorna: .limit(10)
* Pula uma quantidade determinada de resultados e retorna o restante deles: .skip(50)
* Orderna o resultado de uma coleção por ordem crescente: .sort({"campo_para_ordernar": 1})
* Orderna o resultado de uma coleção por ordem decrescente: .sort({"campo_para_ordernar": -1})
* Conta quantos resultados sua query obteve: .count()
* Retorna todos os valores distintos que existem naquele campo: .distinct("campo")

```
db.contas.find().limit(5)
```

```
db.contas.find().skip(200)
```

```
db.contas.find().limit(5).skip(10)
```

```
db.contas.find().skip(200).limit(20)
```

```
db.clientes.find().sort({"nome":1})
```

```
db.clientes.find().sort({"nome":-1})
```

```
db.clientes.find().count()
```

```
db.clientes.count()
```

```
db.contas.find({valor:{$gt:1500}}).count()
```

```
db.contas.distinct("tipo")
```

```
db.clientes.distinct("nome")
```