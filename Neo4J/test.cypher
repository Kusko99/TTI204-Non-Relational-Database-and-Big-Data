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