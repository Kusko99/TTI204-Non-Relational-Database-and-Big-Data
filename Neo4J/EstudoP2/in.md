IN clause

* sempre que usar IN vc deve usar uma lista
* para o sistema saber que é uma lista use []

```
MATCH (a) - [r] -> (b)
WHERE a.name IN ["Laurance Fishburne","Lilly Wachowski","Lana Wachowski"]
RETURN a.name, type(r), b.title
```

```
MATCH (a) - [r] -> (b)
WHERE a.name IN b.name
RETURN a.name, type(r), b.title
```