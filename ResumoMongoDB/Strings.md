# Busca de Strings Mongo

* Buscar Strigns que começam com

```
//Buscam Strings que começam com "Jo"
db.colecao.find({ nome: /^Jo/ });
```

* Qualquer caractere zero ou mais vezes

```
//Buscam strings que contem s seguido de qualquer números de caracteres e terminam com "o"
db.colecao.find({ nome: /s.*o/ });
```

* Qualquer caractere zero ou mais vezes e ignorando a case

```
//Mesma coisa do de cima só que agora era igonora letras maisculas e minusculas
db.colecao.find({ nome: /s.*o/i });
```

* Buscar Strigns que terminam com

```
//Busca Strings que terminam com "o"
db.colecao.find({ nome: /o$/ });
```