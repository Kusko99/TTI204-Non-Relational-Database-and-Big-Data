# Union Clause

* Ele serve para lhe ajudar a fazer os resultados de multiplas querys
* Serve para combinar o resultado de duas querys
* Vc deve usar AS, mas para combinar os resultados eles devem ter o mesmo nome
* Se vc n quer nenhum dupliado use UNION
* Se vc quer os duplicados use UNION ALL

```
match(n:Person)
return n.name AS result
UNION ALL
match(n:Movie)
return n.title AS result
```