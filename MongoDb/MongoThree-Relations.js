use "inventario_cic";

//Relacionamento coleções

db.equipamento.insertOne({num_patrimonio : 100, marca : 'Dell', tipo: 'Computador',
    caracteristicas : {processador : 'I7', memória_GB : 16, armazenamento_GB : 512,
    tipo_computador : 'Notebook' }})
    
db.equipamento.insertOne({num_patrimonio : 101, marca : 'LG', tipo : 'Periférico',
    caracteristicas : {resolução : '1900X1200', tamanho_pol : 27, 
    tipo_periférico : 'Monior Led'}})
    
db.equipamento.find()

db.empresa.insertOne( { razao_social : "Santos do Eduardo", cnpj: 333456789,
   endereço : {rua : 'Penha', numero : 340, bairro : 'Lapa', cidade: 'São Paulo'},
   fones : [11998877665, 11991234567] }  )
   
//relacionando equipamento e empresa fornecedora pelo CNPJ
db.empresa.find({razao_social : /santos/i },{cnpj:1})

//atualizar equipamento com o CNPJ acima
db.equipamento.updateOne({num_patrimonio : 100},{$set : {cnpj_forncedor : 333456789}})
db.equipamento.updateOne({num_patrimonio : 100}, {$set : {dt_aquisição : ISODate("2023-03-01T17:22:33.098Z")}})

//relacionando as coleções usando $lookup -> JOIN
db.empresa.aggregate(
    {$match: {"cnpj" : {$exists: true},tipo_empresa : /fornec/i}},
    {$lookup: {
           from: "equipamento",
           localField: "cnpj",
           foreignField: "cnpj_fornecedor",
           as: "eqptos_fornecidos"}})

db.empresa.updateMany({}, {$rename: {"fone" : "fones"}})

//projetando somente alguns campos
db.empresa.aggregate(
    {$match: {"cnpj" : {$exists: true},tipo_empresa : /fornec/i}},
    {$lookup: {
           from: "equipamento",
           localField: "cnpj",
           foreignField: "cnpj_fornecedor",
           as: "eqptos_fornecidos"}}, 
           {$unwind: "$eqptos_fornecidos"},
           {$project: {_id:0, razao_social : 1, "fones" : 1,
               "eqptos_fornecidos.marca" : 1, "eqptos_fornecidos.tipo" : 1}})


db.empresa.aggregate(
    {$match: {"cnpj_fornecedor" : {$exists: true}}},
    {$lookup: {
           from: "empresa",
           localField: "cnpj_fornecedor",
           foreignField: "cnpj",
           as: "eqptos_fornecidos"}
           })







