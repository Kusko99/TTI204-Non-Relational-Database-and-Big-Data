# Algumas funções importantes

###### String

* reverse() : inverte a string
* split() : quebra a string
* toLower() : coloca toda a string com letras minusculas 
* toUpper() : coloca toda a string com letras maiusculas 

###### List

* size(): retorna o tamanho de uma lista
* tail() : retorna tudo da lista, tirando o primeiro valor
* head(): retorna o primeiro elemento de uma lista
* last(): retorna o ultimo elemento de uma lista
* reverse() : ela inverte uma lista
* keys(): retorna uma lista contendo uma string que representa os nomes das propriedades
* labels(): retorna uma string que representa todos os labels de um nó
* range(): cria uma lista onde (inicio,fim,passo)


###### Funções de Prendicato (Boolean)
* all(): todas as propriedades serão verdadeiras antes de ele retornar o valor
* any(): Se alguma relação é correta, todas passam
* exists(): Busca se existe uma propriedade ou path
* not exists(): Busca se não existe uma propriedade ou path

###### Funções Escalares
* coalesce(): retorna o primeiro valor null em uma dada lista
* endNodes(): retorna o nó final de uma relação
* startNode(): retorna o nó inicial de uma relação
* id(): retorna o id de um nó
* length(): retorna o tamanho de um path
* properties(): retornar as propriedades de um nó/relação
* toFloat(): transforma em float
* toInteger(): transforma em integer
* Type(): retorna o tipo de uma relação
* nodes() : todos os nós em uma path

###### Funções de Agregação
* avg(): retorna a media
* collect(): agrega multiplos dados um uma unica lista
* max(): retorna o maior numero
* min(): retorna o menor numero
* sum(): realiza a soma de numeros

###### Funções Matematicas
* abs(): modulo de um número
* ceil(): arredondamento para cima
* floor(): arrendondamento para baixo
* rand(): um número randomico
* round(): arrendonda um numero para o int mais proximo
* sign(): retorna o sinal de um número