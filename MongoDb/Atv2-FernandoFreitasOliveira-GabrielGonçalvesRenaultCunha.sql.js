//Atividade 2 lab
use inventario_cic

//Exercício a
db.equipamento.insertOne({"num_patrimonio": 200, "marca" : "Daniel", "tipo" : "Mesa Digitalizadora", "caracteristicas" : {
    "resolução" : "2540", "tamanho" : "Grande", "niveis_de_pressao" : 2048, "peso" : 250, "cor" : "rosa"
}})

//Exercício b
db.equipamento.aggregate({$lookup: {
       from: "equipamento",
       localField: "periféricos_instalados.patrimonio_perif",
       foreignField: "num_patrimonio",
       as: "alocacando novo periferico"
     }})
db.equipamento.updateOne({num_patrimonio : 100},{
    $push: {periféricos_instalados:
        {patrimonio_perif: 200, dt_alocação: new Date()}}
})
    
db.equipamento.updateOne ({num_patrimonio: 100},
{$set: {periféricos_instalados: [ {patrimonio_perif: 102, dt_alocação: new Date() },
                                  {patrimonio_perif: 103, dt_alocação: new Date() } ] }  } )
db.equipamento.find({num_patrimonio: 100})    
db.equipamento.find()    
//Exercício c

db.equipamento.aggregate ([
    {$match: {"num_patrimonio":100}}, 
    {$lookup:
       {from : "equipamento" ,
        localField: "periféricos_instalados.patrimonio_perif" ,
        foreignField: "num_patrimonio" ,
        as : "periferico" }
    }, 
    {$unwind: "$periferico"}, 
    {$match: { "periferico.caracteristicas.resolução" :  {$exists: true}}},
    {$project: {"_id":0,"marca": 1 , "tipo": 1 , "periferico.marca" : 1,"periferico.num_patrimonio" : 1,"periferico.caracteristicas.resolução": 1,
                "periféricos_instalados.dt_alocação":1} }
    ] )