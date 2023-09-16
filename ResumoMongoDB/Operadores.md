# Operadores em MongoDB

* $gt : verifica se um atributo é maior que um valor
* $gte : verifica se um atributo é maior ou igual que um valor
* $lt : verifica se um atributo é menor que um valor
* $lte: verifica se um atributo é menor ou igual que um valor
* $exists: verifica se um atributo existe
* $type: verifica se existe um atributo de um tipo determinado
* $or : compara duas condições com o operador ou
* $and: compara duas condições com o operador and
* $in: verifica se um atributo contém um dos valores de um array
* $all: verifica se um atributo contém todos os valores de um array

### Exemplos

```
//$gt, $gte, $lt, $lte: {campo: {$operador:valor}}
db.notas.find({nota:{$gt:95}})
db.notas.find({nota:{$gte:95, $lte:98},
tipo:"exercicio"})
db.notas.find({score:{$lt:95}})

//$exists
db.pessoas.find({"profissão":{$exists:true}});

//$type
db.pessoas.find({nome:{$type:"string"}});

//$or
db.estoque.find({$or: [{qtde: {$lt: 20}},
{preço: 10}]})

//$and
//explicitamente (reparem no [])
db.pessoas.find( { $and: [ { nome: { $gt: "C"} },
{ nome: { $regex: "a"} } ] } );
//implicitamente
db.pessoas.find( { nome: { $gt: "C", $regex: "a"}});
//explicitamente (reparem no [])
db.notas.find( { $and: [ { nota: { $gt: 50} },
{ tipo: "prova"} ] } );
//implicitamente
db.notas.find( { nota: { $gt: 50}, tipo:"prova"});
```