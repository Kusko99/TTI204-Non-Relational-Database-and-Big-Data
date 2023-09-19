# Metódo Aggregate e Aggregation Pipelines

A operação Aggregate permite você agrupar, organizar, realizar calculos, anlisar dados, entre outros

As Aggregation Pipelines, podem ter um ou mais estágios, a ordem de como esse estágios aparecem é importante, cada estágio age de acordo com os resultados do estágio anterior

### $group

Este estágio de agregação é usado para agrupar documentos com base em critérios específicos, permitindo a realização de operações de agregação como somo, contagem ou média, dos dados agrupados

```
//Soma de valores por Categoria
db.transacoes.aggregate([
  { $group: { _id: "$categoria", total: { $sum: "$valor" } } }
]);
```

```
//Contagem de Documentos por estado
db.usuarios.aggregate([
  { $group: { _id: "$estado", total: { $sum: 1 } } }
]);
```

```
//Média de notas por Disciplina
db.registros_academicos.aggregate([
  { $group: { _id: "$disciplina", media: { $avg: "$nota" } } }
]);
```

### $limit

Este estado de agregação, limita o número de documentos que são passados para o próximo estágio

```
//limita o número de documentos no resultado
db.colecao.aggregate([
  { $limit: 10 }
]);
```

```
//agrupar e limitar resultados
db.transacoes.aggregate([
  { $group: { _id: "$categoria", total: { $sum: "$valor" } } },
  { $limit: 5 }
]);
```

```
//limitando após outras operações de agregação
db.registros_academicos.aggregate([
  { $group: { _id: "$disciplina", media: { $avg: "$nota" } } },
  { $sort: { media: -1 } }, // Ordena por média decrescente
  { $limit: 3 } // Retorna as 3 disciplinas com as maiores médias
]);
```

### $project

Este estado de agregação decide quais campos do documento passar para o proximo estágio de agregação

```
//Inclui apenas os campos nome e idade
db.colecao.aggregate([
  { $project: { nome: 1, idade: 1, _id: 0 } }
]);
```

```
//Inclui todos os campos menos telefone e email
db.usuarios.aggregate([
  { $project: { email: 0, telefone: 0 } }
]);
```

```
//Seleciona somente alguns campos do restaurante
db.restaurants.aggregate([
  {
    $project: {
      "name": 1,
      "cuisine": 1,
      "address": 1
    }
  },
  {
    $limit: 5
  }
])
```

```
//Calcula a idade com base na data de nascimento
db.pessoas.aggregate([
  {
    $project: {
      nome: 1,
      data_nascimento: 1,
      idade: {
        $subtract: [2023, { $year: "$data_nascimento" }]
      }
    }
  }
]);
```

### $sort
Este estado de agregação ordena e todos os documentos em uma ordem especifica

```
//Ordena pessoas pela idade
db.pessoas.aggregate([
  { $sort: { idade: 1 } }
]);
```

```
//Ordena usuários pela data de nascimento em ordem decrescente
db.usuarios.aggregate([
  { $sort: { data_nascimento: -1 } }
]);
```

```
//Ordena os documentos:
//primeiro por categoria em ordem crescente
//depois por valor em ordem descrecente
db.transacoes.aggregate([
  { $sort: { categoria: 1, valor: -1 } }
]);
```

# $match

Este estado de agregação funciona como o metodo find(), ele irá filtrar os documentos que combinam com a query passada para ele

```
//Seleciona os documentos onde o campo idade é maior ou igual a 25
db.pessoas.aggregate([
  { $match: { idade: { $gte: 25 } } }
]);
```

```
//Selecionar documentos onde a categoria é "A" e o valor maior que 100
db.transacoes.aggregate([
  { $match: { categoria: "A", valor: { $gt: 100 } } }
]);
```

```
//Flitra documentos onde o campo nome começa com "Jo"
db.usuarios.aggregate([
  { $match: { nome: /^Jo/ } }
]);
```

# $lookup

Este estado de agregação performa um "left outer join" para uma coleção na mesma data base

Existem quatros campos que são requeiridos:
* from: A coleção que será feita o lookup/join
* localField: O campo local da coleção que chamou o metodo aggregate, que será usado no join
* foreignField: O campo da coleção do from que será usado no join
* as: O novo nome para o campo que irá conter os documentos combinados do join

```
//Suponha que temos duas coleções, "pedidos" e "clientes", e queremos unir os pedidos aos seus respectivos clientes com base no campo "clienteId"
db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "_id",
      as: "cliente"
    }
  }
]);
```

```
//Suponha que queremos unir os pedidos aos produtos dentro de cada pedido (onde os produtos estão em um array "itens")
db.pedidos.aggregate([
  {
    $unwind: "$itens" // Desnormaliza o array de produtos
  },
  {
    $lookup: {
      from: "produtos",
      localField: "itens.produtoId",
      foreignField: "_id",
      as: "itens.produto"
    }
  },
  {
    $unwind: "$itens.produto" // Desnormaliza o array de produtos novamente
  }
]);
```

### $unwind

É um estágio de agregação usado para "desenrolar" um campo que contém um array, criando uma nova entrada para cada elemento do array. Isso é especialmente útil quando você deseja trabalhar com os elementos individuais do array como se fossem documentos separados

```
//Suponha que temos uma coleção de pedidos, onde o campo "itens" é um array e queremos "desenrolar" esse campo para que cada item do array seja tratado como um documento separado

db.pedidos.aggregate([
  { $unwind: "$itens" }
]);
```

```
//Suponha que temos uma coleção de pedidos onde o campo "itens" é um array de objetos e cada objeto contém um array chamado "produtos". Queremos desnormalizar esse array "produtos"

db.pedidos.aggregate([
  { $unwind: "$itens" },
  { $unwind: "$itens.produtos" }
]);
```

```
//Após desnormalizar, você pode realizar operações de agregação como contagem ou soma. Neste exemplo, estamos contando a ocorrência de cada produto após desnormalizar

db.pedidos.aggregate([
  { $unwind: "$itens" },
  { $unwind: "$itens.produtos" },
  {
    $group: {
      _id: "$itens.produtos.nome",
      total: { $sum: 1 } // Conta a ocorrência de cada produto
    }
  }
]);
```