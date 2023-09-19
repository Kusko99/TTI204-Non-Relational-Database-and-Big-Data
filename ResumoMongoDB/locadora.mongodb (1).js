use("locadora");
db.createCollection("grupos");
db.grupos.insertOne(
    {
        Categoria: "Econômico",
        Grupo: "B",
        Auto: "Não",
        Pass: 5,
        Malas: 3,
        USB: "Sim",
        Android: "Não",
        Apple: "Não",
        Combustível: "Flex"
    }
)

use("locadora");
db.grupos.insertOne(
    {
        Categoria: "Hatch",
        Grupo: "D",
        Auto: "Sim",
        Pass: 5,
        Malas: 3,
        USB: "Sim",
        Android: "Sim",
        Apple: "Sim",
        Combustível: "Flex"
    }
)

use("locadora");
db.grupos.insertOne(
    {
        Categoria: "Compacto",
        Grupo: "F",
        Auto: "Não",
        Pass: 5,
        Malas: 4,
        USB: "Sim",
        Android: "Sim",
        Apple: "Sim",
        Combustível: "Flex"
    }
)
use("locadora");
db.grupos.insertOne(
    {
        Categoria: "SUV",
        Grupo: "S",
        Auto: "Sim",
        Pass: 7,
        Malas: 5,
        USB: "Sim",
        Android: "Sim",
        Apple: "Sim",
        Combustível: "Flex"
    }
)
use("locadora");
db.grupos.insertOne(
    {
        Categoria: "Caminhonete",
        Grupo: "C",
        Auto: "Sim",
        Pass: 5,
        Malas: 5,
        USB: "Sim",
        Android: "Sim",
        Apple: "Sim",
        Combustível: "Diesel"
    }
)
use("locadora");
db.grupos.insertOne(
    {
        Categoria: "Elétrico",
        Grupo: "X",
        Auto: "Sim",
        Pass: 5,
        Malas: 5,
        USB: "Sim",
        Android: "Sim",
        Apple: "Sim",
        Combustível: "Elétrico"
    }
)
use("locadora");
db.grupos.insertOne(
    {
        Categoria: "Híbrido",
        Grupo: "H",
        Auto: "Sim",
        Pass: 5,
        Malas: 5,
        USB: "Sim",
        Android: "Sim",
        Apple: "Sim",
        Combustível: ["Elétrico", "Gasolina"]
    }
)


use("locadora");
db.createCollection("veiculos");
db.veiculos.insertMany(
    [
        {
            Placa: "AYC2A20",
            Veiculo: "Mobi",
            Grupo: "B",
            Marca: "Fiat",
            KM: 18293,
            Motor: "1.0",
            Portas: 5,
            Extras: "Cadeirinha"
        },
        {
            Placa: "BTR2A41",
            Veiculo: "Tiguan",
            Grupo: "S",
            Marca: "VW",
            KM: 13909,
            Motor: "2.0",
            Portas: 5
        },    
        {
            Placa: "BNM2K12",
            Veiculo: "UP",
            Grupo: "B",
            Marca: "VW",
            KM: 19562,
            Motor: "1.0",
            Portas: 4
        },
        {
            Placa: "BCE9A62",
            Veiculo: "LEAF",
            Grupo: "X",
            Marca: "Nissan",
            KM: 2451,
            Motor: "110KW",
            Portas: 5,
            Extras: "Sistema de som Bose"
        },
        {
            Placa: "BGA8C57",
            Veiculo: "L200",
            Grupo: "C",
            Marca: "Mitsubish",
            KM: 932,
            Motor: "4.0",
            Portas: 5,
            Extras: "Tampa para bagageiro"
        }
    ]
)

use("locadora");
db.veiculos.find({KM: {$lt:10000}});

use("locadora");
db.veiculos.updateOne({Placa: 'BNM2K12'}, {$set: {KM:22213}});

use("locadora");
db.grupos.find({Combustível: /Elétrico/i });

use("locadora");
db.grupos.find({$and: [
    {Combustível: /Elétrico/i },
    {Combustível: {$nin: ["Gasolina","Flex","Diesel"] }}
    ]});

use("locadora");
db.veiculos.find({Extras: {$exists:false}});

use("locadora");
db.grupos.aggregate(
    {$lookup: {
        from: "veiculos",
        localField: "Grupo",
        foreignField: "Grupo",
        as: "veiculos_grupo"
    }}
)

use("locadora");
db.veiculos.aggregate(
    {$match: {KM: {$lt: 20000}}},
    {$lookup: {
        from: "grupos",
        localField: "Grupo",
        foreignField: "Grupo",
        as: "grupo_veiculo"
    }}
)
