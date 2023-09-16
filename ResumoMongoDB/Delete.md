#Delete

* Para deletar um único documento (deleteOne)
* db.colecao.deletOne({fitro})

```
db.posts.deleteOne({ title: "Post Title 5" })
```

* Para deletar vários documentos (deleteMany)
* db.colecao.deleteMany({filtro})

```
db.posts.deleteMany({ category: "Technology" })
```