# Update

* $set: set o valor de um campo
* $push: adiciona um elemento a uma array
* $rename: renomeia um campo
* $unset: remove um campo de um documento
* $inc: incrementa a valor de um campo
* $currentDate: set o valor da data para o dia atual

***

* Para fazer o update de um documento (updateOne)
* db.colecao.updateOne({filtro},{comando_de_update})

```
db.posts.updateOne( { title: "Post Title 1" }, { $set: { likes: 2 } } ) 
```

```
db.posts.updateOne( 
  { title: "Post Title 5" }, 
  {
    $set: 
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  }
)
```

* Para fazer o update de vários documentos (updateMany)
* db.colecao.updateMany({filtro},{operação_de_update})

```
db.posts.updateMany({}, { $inc: { likes: 1 } })
```