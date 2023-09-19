//criando database

use locadora

//criando coleções
db.createCollection("grupos")
db.createCollection("veículos")

//inserindos grupos
db.grupos.insertOne({
    "categoria" : "econômico",
    "grupo" : "B",
    "auto" : "não",
    "pass" : 5,
    "malas" : 3,
    "usb" : "sim",
    "android" : "não",
    "apple" : "não",
    "combustível" : "flex"
})

db.grupos.insertOne({
    "categoria" : "hatch",
    "grupo" : "D",
    "auto" : "sim",
    "pass" : 5,
    "malas" : 3,
    "usb" : "sim",
    "android" : "sim",
    "apple" : "sim",
    "combustível" : "flex"
})

db.grupos.insertOne({
    "categoria" : "compacto",
    "grupo" : "F",
    "auto" : "não",
    "pass" : 5,
    "malas" : 4,
    "usb" : "sim",
    "android" : "sim",
    "apple" : "sim",
    "combustível" : "flex"
})

db.grupos.insertOne({
    "categoria" : "suv",
    "grupo" : "S",
    "auto" : "sim",
    "pass" : 7,
    "malas" : 5,
    "usb" : "sim",
    "android" : "sim",
    "apple" : "sim",
    "combustível" : "flex"
})

db.grupos.insertOne({
    "categoria" : "caminhote",
    "grupo" : "C",
    "auto" : "sim",
    "pass" : 5,
    "malas" : 5,
    "usb" : "sim",
    "android" : "sim",
    "apple" : "sim",
    "combustível" : "diesel"
})

db.grupos.insertOne({
    "categoria" : "elétrico",
    "grupo" : "X",
    "auto" : "sim",
    "pass" : 5,
    "malas" : 5,
    "usb" : "sim",
    "android" : "sim",
    "apple" : "sim",
    "combustível" : "elétrico"
})

db.grupos.insertOne({
    "categoria" : "hibrido",
    "grupo" : "H",
    "auto" : "sim",
    "pass" : 5,
    "malas" : 5,
    "usb" : "sim",
    "android" : "sim",
    "apple" : "sim",
    "combustível" : ['gasolina', 'elétrico']
})

db.veículos.insertOne({
    "placa" : "AYC2A20",
    "veiculo" : "mobi",
    "grupo" : "B",
    "marca" : "fiat",
    "km" : 18293,
    "motor" : 1.0,
    "portas" : 5,
    "extras" : "caderinha"
})

db.veículos.insertOne({
    "placa" : "BTR2A41",
    "veiculo" : "tiguan",
    "grupo" : "S",
    "marca" : "vw",
    "km" : 13909,
    "motor" : 2.0,
    "portas" : 5
})

db.veículos.insertOne({
    "placa" : "BNM2K12",
    "veiculo" : "up",
    "grupo" : "B",
    "marca" : "vw",
    "km" : 19562,
    "motor" : 1.0,
    "portas" : 4
})

db.veículos.insertOne({
    "placa" : "BCE9Aa62",
    "veiculo" : "leaf",
    "grupo" : "X",
    "marca" : "nissan",
    "km" : 2451,
    "motor" : "110kw",
    "portas" : 5,
    "extras" : "sistema de som bose"
})

db.veículos.insertOne({
    "placa" : "BGA8C57",
    "veiculo" : "L200",
    "grupo" : "C",
    "marca" : "mitsubishi",
    "km" : 932,
    "motor" : 4.0,
    "portas" : 5,
    "extras" : "tampa para bagageiro"
})

//Ex1 veiculos com menos de 10000km rodados
db.veículos.find({"km" : {$lt:10000}})

//Ex2 atualizar km do veiculo BNM2K12 
db.veículos.updateOne({"placa" : "BNM2K12"},{$set : {"km" : 22213}})
db.veículos.find({"placa" : "BNM2K12"})

//Ex3 listar os grupos de automoveis com motorização eletrica
db.grupos.find({"combustível" : /elétrico/i})

//Ex4 listar os grupos que são exclusivamente elétricos
db.grupos.find({$and: [
    {"combustível": "elétrico"},
    {"combustível": {$nin: ["gasolina","flex","diesel"] }}
    ]});
    
//Ex5 listar os automóveis que não tem extras
db.veículos.find({"extras" : {$exists : false}})

//Ex6 listar as informações do grupo B e os carros que pertecem a esse 
db.grupos.aggregate([
    {$match : {"grupo" : "B"}},
    {$lookup:{
        from: "veículos",
        localField: "grupo",
        foreignField : "grupo",
        as : "veiculo_grupo"
    }},
    ])
    
//Ex7 listar as informações dos veiculos e grupo ao qual ele pertence ara veiculos com menos de 20000km
db.veículos.aggregate([
    {$match: {"km" : {$lt : 20000}}},
    {$lookup: {
        from: "grupos",
        localField : "grupo",
        foreignField : "grupo",
        as : "veiculo_grupo"
    }}
    ])















