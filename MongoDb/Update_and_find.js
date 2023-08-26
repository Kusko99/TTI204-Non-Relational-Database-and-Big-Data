// aula 18/agosto 
use inventario_cic
// exibindo os databases e coleções
show databases
show collections
// criando a coleção empresa
db.empresa.drop()
db.empresa.insertOne( { razao_social : "IBM do Brasil Ltda", cnpj: 123456789,
   endereço : {rua : 'Tutóia', numero : 100, bairro : 'Paraíso', cidade: 'São Paulo'},
   fones : [11998877665, 11991234567] }  )
// consultando - similar ao SELECT * FROM
db.empresa.find({})
// excluindo a IBM duplicada
db.empresa.deleteOne({_id:  ObjectId("64df7550e9442dfa73e00c14") })  
// inserindo mais de um docto por vez 
db.empresa.insertMany( [ {razao_social : 'Microsoft do Brasil Ltda' ,
tipo_empresa : 'Fabricante', endereço : 'Av. Engenheiro Berrini, 500- Vila Olímpia-São Paulo',
fone : [{ddd: 11, numero : 987654321}, {ddd: 11, numero: 980000234}] }   ,
{razao_social : 'ABCD equipamentos eletrônicos SA' , cnpj : 123000999,
 inscrição_estadual : 'ISENTO' } ]  )
// aula 25/agosto - consultas, manipulação de vetores
db.empresa.find () 
db.empresa.find ({razao_social : 'Microsoft do Brasil Ltda'}) 
// similar ao like - / equivale ao % do SQL  - i= insensitive
db.empresa.find ({razao_social : /miCROsoft/i })
db.empresa.findOne ({razao_social : /ltda/i })
db.empresa.updateOne ({razao_social : /miCROsoft/i }, 
                      {$set: {razao_social: "Microsoft Corporation do Brasil Ltda."}})
// incluindo um novo campo ano de fundação
db.empresa.updateOne ({razao_social : /miCROsoft/i }, {$set: {ano_fundação : 1975}} )
db.empresa.updateOne ({razao_social : /iBm/i }, {$set: {ano_fundação : 1911}} )
db.empresa.find()
// consultas com operadores numéricos 
db.empresa.find({ano_fundação : 1975})
db.empresa.find({ano_fundação : {$eq: 1975} } ) // $eq = equal
db.empresa.find({ano_fundação : {$ne: 1975} } ) // $ne not equal 
db.empresa.find({ano_fundação : {$gt: 1900} } ) // $gt greater than (maior que) 
db.empresa.find({ano_fundação : {$gte: 1911} } ) // $gte greater than or equal (maior que ou igual) 
db.empresa.find({ano_fundação : {$lt: 1990} } ) // $lt lower than (maior que) 
db.empresa.find({ano_fundação : {$lte: 1911} } ) // $lte lower than or equal (maior que ou igual)
db.empresa.find ({razao_social : {$not:  /ltda/i } }) // não é ltda, caracter
// consulta com operador OR e AND
db.empresa.find ( {$or: [ {razao_social : /ltda/i }, {ano_fundação : {$lt: 1900} },
                          {tipo_empresa : /fabricante/i} ] } ) 
db.empresa.find ( {$and: [ {razao_social : /ltda/i }, {ano_fundação : {$gt: 1900} },
                          {tipo_empresa : /fabricante/i} ] } ) 
db.empresa.find ({razao_social: /ltda/i, ano_fundação: {$gt: 1900}, tipo_empresa : /fabricante/i }) 
// CRUD em vetores 
db.empresa.find({razao_social : /ibm/i} , {_id : 0 , razao_social : 1, fones: 1 } )
// adicionando novo fone
db.empresa.updateOne({razao_social : /ibm/i} , {$set: {fones: [11990123980] } }) // substituiu todos
db.empresa.updateOne({razao_social : /ibm/i} , {$push: {fones: [11998877665] } }) // $push deu erro []
// excluir um elemento do vetor
db.empresa.find( {"fones": [11998877665] })
db.empresa.updateOne( {razao_social : /ibm/i, "fones": [11998877665]  } , {$pull: {"fones": [11998877665] } } )
// inserção correta usando $each
db.empresa.find({razao_social : /ibm/i} , {_id : 0 , razao_social : 1, fones: 1 } )
db.empresa.updateOne({razao_social : /ibm/i} , {$push: {fones: {$each : [11998877665] } } })
db.empresa.updateOne({razao_social : /ibm/i} , {$push: {fones: {$each : [11998811223, 11991230009 } } })
// atualizar um fone 
db.empresa.updateOne( {"fones": 11998877665 }, {$set: {"fones.$" : 11998877666 }})
//consultas com posição dos caracteres
// string termina com ltda  -- operador $ no final
db.empresa.find({razao_social : /ltda/i } )
db.empresa.find({razao_social : /ltda$/i } )
db.empresa.find({razao_social : /ltda.$/i } )
// string começando com algum caracter ^ 
db.empresa.find({endereço: /^av/i })
// consultar empresas em São Paulo
db.empresa.find({})
db.empresa.find({$or: [ {endereço: /s.*o paulo/i } , {"endereço.cidade": /^s.*o paulo$/i} ] })
db.empresa.find({$and: [{razao_social: /ltda/i}, 
       {$or: [ {endereço: /para.*so/i } , {"endereço.bairro": /^para.*so/i} ] } ] } ) 




