# Comandos de Insert | Creation

* Para criar/usar um banco

Obs: Lembrar que o banco não é criado até que se insira dados nele

```
use nome_banco
```

* Para criar uma nova coleção

```
db.createCollection("users")
```

* Inserindo um documento por vez

```
db.colecao.insert({Objeto})
```

* Inserindo uma array de vários documentos de uma vez

```
db.colecao.insertMany([
    {Objeto1},
    {Objeto2},
    {Objeto3},
    {ObjetoN}
    ])
```

### Exemplos de Insert

```
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})
```

```
db.posts.insertMany([  
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])
```

