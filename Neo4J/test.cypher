//Banco de Dados Teste sobre a NBA
//Para criar o Banco inicial rode o arquivo TestCreate.cypher

//Consulta todos os nós
MATCH (n) 
RETURN n

//Consultar todos os jogadores usando LABEL
MATCH (n:PLAYER)
RETURN n

//Cosultar todos os treinadores usando LABEL
MATCH(n:COACH)
RETURN n

//Consultar todos os times usando LABEL
MATCH(n:TEAM)
RETURN n

//Consultar o nome de um Jogador
MATCH(n:PLAYER)
RETURN n.name

//Consultar o nome e altura de um Jogador
MATCH(n:PLAYER)
RETURN n.name, n.height

//Consultar o nome, altura e idade de um Jogador
MATCH(n:PLAYER)
RETURN n.name, n.height, n.age

//Consultar o nome,altura e idade de um Jogador mas agora nomeando os campos de retorno
MATCH(n:PLAYER)
RETURN n.name AS nome_jogador , n.height AS altura_jogador, n.age AS idade_jogador

//FILTRO-> Somente o nó do LeBron James
MATCH(n:PLAYER)
WHERE n.name = "LeBron James"
RETURN n 

//Filtro -> Somente o nó do LeBron James (outra maneira)
MATCH(n:PLAYER {name:"LeBron James"})
RETURN n 

//Filtro -> Somente o nó do LeBron James com altura 2.06
MATCH(n:PLAYER)
WHERE n.name = "LeBron James" AND n.height = 2.06
RETURN n 

//Filtro -> Somente o nó do LeBron James com altura 2.06 (outra maneira)
MATCH(n:PLAYER {name:"LeBron James", height: 2.06})
RETURN n 

//Filtro -> Somente o nó do LeBron James com altura 2.06 e peso 113
MATCH(n:PLAYER)
WHERE n.name = "LeBron James" AND n.height = 2.06 AND n.weight = 113
RETURN n 

//Filtro -> Consultar os Jogadores que não são o LeBron James
MATCH(n:PLAYER)
WHERE n.name <> "LeBron James"
RETURN n 

//Filtro -> Consultar os Jogadores maiores ou iguais que 2m
MATCH(n:PLAYER)
WHERE n.height >= 2
RETURN n 

//Filtro -> Consultar os Jogadores maiores que 2m
MATCH(n:PLAYER)
WHERE n.height > 2
RETURN n 

//Filtro -> Consultar os Jogadores menores ou iguais que 2m
MATCH(n:PLAYER)
WHERE n.height <= 2
RETURN n 

//Filtro -> Consultar os Jogadores maiores ou iguais que 2m
MATCH(n:PLAYER)
WHERE n.height < 2
RETURN n 

//Filtro -> Consultar o IMC do Jogador
MATCH(n:PLAYER)
WHERE (n.weight / (n.height * n.height)) > 25
RETURN n

//Filtro -> Consultar jogadores menores ou com 2 metros e jogadores que pesam ou tem 100 kg
MATCH(n:PLAYER)
WHERE n.weight >= 100 AND n.height <= 2
RETURN n

//Filtro -> Consultar jogadores com altura >= 2.1 ou peso >= 120
MATCH(n:PLAYER)
WHERE n.weight >= 120 OR n.height >= 2.1
RETURN n

//Filtro -> Mesma consulta de cima mas usando NOT
MATCH(n:PLAYER)
WHERE NOT n.weight >= 120 OR n.height >= 2.1
RETURN n

//Filtro -> Jogadores com altura mais que 2 Limitando por 5
MATCH(n:PLAYER)
WHERE n.height >= 2
RETURN n
LIMIT 5

//Filtro ->Jogadores com altura mais que 2 Limitando por 5 pulando os 2 primeiros
MATCH(n:PLAYER)
WHERE n.height >= 2
RETURN n
SKIP 2
LIMIT 5

//Filtro -> Jogadores maiores que 2 m ordenado por altura (por padrão vem ordem ascendente)
MATCH(n:PLAYER)
WHERE n.height >= 2
RETURN n
ORDER BY n.height 

//Filtro -> Mesma consulta anterior mas em ordem  descendente
MATCH(n:PLAYER)
WHERE n.height >= 2
RETURN n
ORDER BY n.height DESC

//Filtro -> Ordem ascendente explicita 
MATCH(n:PLAYER)
WHERE n.height >= 2
RETURN n
ORDER BY n.height ASC

//Filtro -> Filtrando por mutilpos nós
MATCH(n:PLAYER), (m:COACH)
RETURN n,m

//Filtro -> Filtrando multipos nós com WHERE
MATCH(n:PLAYER), (m:COACH)
WHERE n.height >=2
RETURN n,m

//Filtro -> Devolvendo o time tbm
MATCH(n:PLAYER), (m:COACH), (p:TEAM)
WHERE n.height >=2
RETURN n,m,p

//Relações -> Procurar todos os jogadores que jogam no LAKERS
MATCH (n:PLAYER) -[r:PLAYS_FOR]-> (p:TEAM)
WHERE p.name = "LA Lakers"
RETURN n

//Relações -> Procurar todos os jogadores que jogam no LAKERS (invertido)
MATCH (p:TEAM) <-[r:PLAYS_FOR]- (n:PLAYER)
WHERE p.name = "LA Lakers"
RETURN n

//Relações -> Retornando jogadores e time
MATCH (n:PLAYER) -[r:PLAYS_FOR]-> (p:TEAM)
WHERE p.name = "LA Lakers"
RETURN n, p

//Relações -> Procurar todos os jogadores que jogam no LAKERS ou Mavericks
MATCH (n:PLAYER) -[r:PLAYS_FOR]-> (p:TEAM)
WHERE p.name = "LA Lakers" OR p.name = "Dallas Mavericks"
RETURN n, p

//Relações -> Filtrando por uma propriedade da Relação
MATCH (n:PLAYER) -[r:PLAYS_FOR]-> (p:TEAM)
WHERE r.salary >= 35000000
RETURN n,p

//Relações -> Filtrando todos os companheiros de equipes do LeBron James 
MATCH(n:PLAYER{name:"LeBron James"}) - [:TEAMMATES] -> (p:PLAYER)
RETURN p

//Relações -> Filtrando todos os companheiros de equipes do LeBron James que ganham mais de 40000
MATCH(n:PLAYER{name:"LeBron James"}) - [:TEAMMATES] -> (p:PLAYER)
MATCH(p) - [r:PLAYS_FOR] -> (m:TEAM)
WHERE r.salary >= 40000000
RETURN p

//Agregação de Dados -> Contando o número de jogos jogados
MATCH (player:PLAYER)- [r:PLAYED_AGAINST] -> (:TEAM)
RETURN player.name, COUNT(r)

//Agregação de Dados -> Media de pontos nos jogos jogados
MATCH (player:PLAYER)- [r:PLAYED_AGAINST] -> (:TEAM)
RETURN player.name, AVG(r.points)

//Agregação de Dados -> O jogador com maior número de Pontos
MATCH (player:PLAYER)- [r:PLAYED_AGAINST] -> (:TEAM)
RETURN player.name, AVG(r.points) AS ppg
ORDER BY ppg DESC
LIMIT 1

//Deletar nós -> Deletar o Jogador Ja Morant
MATCH(p:PLAYER {name:"Ja Morant"})
DETACH DELETE p

//Deletar relações -> Deletando um PlayFor de Joel
MATCH(p:PLAYER {name:"Joel Embiid"}) - [rel:PLAYS_FOR] -> (:TEAM)
DELETE rel

//Deletar todos os nós 
MATCH (n) 
DETACH DELETE n

//Inserindo Dados
CREATE (:PLAYER:COACH:GENERAL_MANAGER {name:"LeBron James", height:2.01})

//Inserindo Dados e retornado o resultado
CREATE (n:PLAYER:COACH:GENERAL_MANAGER {name:"LeBron James", height:2.01})
RETURN n

//Inserindo um nó e criando uma relação (Serão criados dois nós)
CREATE (:PLAYER {name:"Antony Davidson"}) - [:PLAYS_FOR {salary:34000000}] -> (:TEAM{name:"La Lakers"})

// Criando uma relação entre dois nós existentes
MATCH(p:PLAYER{name:"LeBron James"}),(t:TEAM{name:"La Lakers"})
CREATE (p) - [:PLAYS_FOR{salary:40000000}] -> (t)

//Update de dados (Adicionando Propriedades)
MATCH(n:PLAYER)
WHERE ID(n) = 0
SET n.name = "Daniel Tijolos"
RETURN n

//Update de dados (Atualizando uma propriedade)
MATCH(n:PLAYER)
WHERE ID(n) = 3 
SET n.height = 2.02
RETURN n

//Update de dados (Atualizando uma propriedade e adicioando outra)
MATCH(n:PLAYER)
WHERE ID(n) = 3 
SET n.height = 2.02, n.age = 36
RETURN n

//Update de dados (Adicionar uma nova Label)
MATCH(n:PLAYER)
WHERE ID(n) = 3 
SET n:REF
RETURN n

//Update dados (atualizando um atributo de uma relação)
MATCH(n {name:"LeBron James"}) - [r:PLAYS_FOR] -> (t:TEAM)
SET r.salary = 60000000
RETURN n,t

//Remoção de dados (removendo um atributo)
MATCH(n:PLAYER {name:"LeBron James"})
REMOVE n.age
RETURN n

//Remoção de dados (removendo uma label)
MATCH(n:PLAYER {name:"LeBron James"})
REMOVE n:REF
RETURN n