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
 
db.empresa.find()
db.empresa.find({razao_social : "Microsoft do Basil Ltda"})
//similar ao like
db.empresa.find({razao_social : /miCROsoft/i})
db.empresa.find({razao_social : /ltda/i})
//o find traz todos as instâncias o findOne traz somente a primeira instância
db.empresa.findOne({razao_social : /ltda/i})
//fazer o update de uma empresa
db.empresa.updateOne({razao_social : /microsoft/i},{$set:{
    razao_social : "Microsoft Corporation do Brasi Ltda."
}})
// incluindo um novo campo ano de fundação
db.empresa.updateOne({razao_social : /miCROsoft/i}, {$set : {
    ano_fundação : 1975
}})
db.empresa.updateOne({razao_social : /iBm/i},{$set:{
    ano_fundação : 1911
}})
// consultas com operadores numéricos
db.empresa.find({ano_fundação : 1975})
db.empresa.find({ano_fundação : {$eq : 1975}}) // $eq = equal
db.empresa.find({ano_fundação : {$ne : 1975}}) // $ne = not equal
db.empresa.find({ano_fundação : {$gt : 1970}}) // $gt = greater than (maior que)
db.empresa.find({ano_fundação : {$gte : 1970}}) // $gt = greater than or equal (maior que ou igual)
db.empresa.find({razao_social : {$not : /ltda/i}}) // não é ltda, caracter
//consulta com operador OR e AND
db.empresa.find({$or: [{razao_social : /ltda/i},{ano_fundação : {$lt:1990}}, {tipo_empresa : /fabricante/i }]}) // busca todas as instâncias que tem ao menos uma das especificações
db.empresa.find({$and: [{razao_social : /ltda/i},{ano_fundação : {$lt:1990}}, {tipo_empresa : /fabricante/i }]}) // busca todas as instância que tenham todas as especificações
// CRUD em vetores
db.empresa.find({razao_social : /ibm/i},{_id : 0, razao_social : 1, fones: 1})
// adicionando novo fone
db.empresa.updateOne({razao_social : /ibm/i} , {$set : {fones : [11990123980]}}) // substitui todos
db.empresa.updateOne({razao_social : /ibm/i}, {$push : {fones : [11998877665]}}) //$push deu erro [], criou um vetor dentro do vetor, se tirar o simbolo de vetor não resolve o erro
//excluir um elemento do vetor
db.empresa.find({"fones" : [11998877665]})
db.empresa.find({razao_social : /ibm/i, "fones" : [1199887765]},{$pull : {"fones" : [11998877665]}})
// inserção correta usando $each
db.empresa.updateOne({razao_social : /ibm/i}, {$push : {fones : {$each : 11998877665}}})
db.empresa.updateOne({razao_social : /ibm/i}, {$push : {fones : {$each : [11998877665,1199123009]}}})
//atualizar um fone 
db.empresa.updateOne({"fones" : [1198877665]},{$set:{"fones.$" : 1198877666}})
//consultada com posição dos caracteres
// string termina com ltda -- operador $ no final
db.empresa.find({razao_social : /ltda/i})
db.empresa.find({razao_social : /ltda$/i}) // $ no final indica que a palavra termina com aquele array de caracteres
db.empresa.find({razao_social : /ltda.$/i}) // .$ indica que tem que começar com ltda
//string começando com algum caracter ^
db.empresa.find({endereço : /^av/i})
//consultar empresas em São Paulo
db.empresa.find()
db.empresa.find({$or: [{endereço : /s.*o paulo/i},{"endereço.cidade" : /s.*o paulo/i }]}) // .* pegar qualquer caracter que esteja naquela posição, é um caracter coringa
db.empresa.find({$and : [{razao_social : /ltda/i}, 
    {$or: [{endereço : /para.*so/i},{"endereço.bairro" : /^para.*so/i}]}
]})
























































