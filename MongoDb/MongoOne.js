use iventario_cic
// db.empresa.insertOne({
//     razao_social : "IBM do Brasil Ltda",
//     cnpj : 123456789,
//     endereço : {
//         rua : 'Tutótia',
//         numero : 100,
//         bairro: 'Paraíso',
//         cidade: 'São Paulo'
//     },
//     fones : [11998877665, 11991234567]
// })
//exibindo os databases e coleções
show databases
show collections
//criando a coleção empresa
db.empresa.drop()
db.empresa.insertOne({
    razao_social : "IBM do Brasil Ltda",
    cnpj : 123456789,
    endereço : {
        rua : 'Tutótia',
        numero : 100,
        bairro: 'Paraíso',
        cidade: 'São Paulo'
    },
    fones : [11998877665, 11991234567]
})
//consultando - similar ao SELECT * FROM
db.empresa.find({})
//excluindo a IBM duplicada
db.empresa.deleteOne({_id : ObjectId("64df765857eb08c65c6f9285")})
//inserindo mais de um docto por vez
db.empresa.insertMany([{
    razao_social: 'Microsft do Brasil Ltda',
    tipo_empresa: 'Fabricante',
    endereço: 'Av.Engenheiro Berrini,500-Vila Olímpia-São Paulo',
    fone : [{ddd:11, numero:987654321},{ddd:11,numero:980000234}]
},{
    razao_social: 'ABCD equipamentos eletrônicos SA', 
    cnpj : 12300999,
    inscrição_social: 'ISENTO'
}]) 