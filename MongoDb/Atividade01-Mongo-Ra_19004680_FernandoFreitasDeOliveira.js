use inventario_cic
// exibindo os databases e coleções
show databases
show collections
// criando a coleção empresa
db.empresa.drop()
db.empresa.insertOne( { razao_social : "IBM do Brasil Ltda", cnpj: 123456789,
   endereço : {rua : 'Tutóia', numero : 100, bairro : 'Paraíso', cidade: 'São Paulo'},
   fones : [11998877665, 11991234567] }  )
 
db.empresa.insertOne( { razao_social : "Santos do Eduardo", cnpj: 333456789,
   endereço : {rua : 'Penha', numero : 340, bairro : 'Lapa', cidade: 'São Paulo'},
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

// a) inserido uma nova empresa com razão social, tipo, cnpj, endereço (com campos) e fone com campos para ddd e número
db.empresa.insertOne({razao_social : 'Daniel Tijolos S.A.', tipo_empresa: 'Fabricante', cnpj : 123456700,
    endereço : {rua : "Rua do Sacramento", numero : 55, bairro : "Rudge Ramos", cidade : "São Bernardo do Campo", cep : "09640-000"},
    fones : [{ ddd: 11, numero : 41775426}]
})

//b) atualize o bairro da empresa inserida (Daniel Tijolos S.A.)
db.empresa.updateOne ({razao_social : /tijolos/i }, {$set: {"endereço.bairro" : 'Taboão' }})

//c) Incluir um novo numero de telefone e posteriormente atualize
db.empresa.updateOne({razao_social : /tijolos/i}, {$push : {fones : { ddd: 11, numero : 971150204 } } } )
db.empresa.updateOne(
{razao_social: /tijolos/i,"fones.numero": 971150204},
{$set: {"fones.$.ddd": 11, "fones.$.numero": 998030023}})


//d) mostrar razão social, endereço e fones de empresas localizadas no bairro da lapa
db.empresa.find({"endereço.bairro" : {$ne: 'Lapa'}},{"razao_social" : 1, "endereço" : 1, "fones" : 1})

//e) Mostre todos os dados de d) mas para as empresas que tenham a palavra Equipamento na razão, mas que não se
// localizem em cidades com nome de santo (São, Santo, Santa)
db.empresa.find({$and: [{razao_social: /equipamentos/i}, 
{$or: [ {"endereço.cidade": {$ne:'são'} } , 
{"endereço.cidade": {$ne:'santo'}} , 
{"endereço.cidade": {$ne:'santo'}} ] } ] }, 
{"razao_social" : 1, "endereço" : 1, "fones" : 1})















