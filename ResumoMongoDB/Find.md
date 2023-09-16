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