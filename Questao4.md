## Modelo Lógico do Banco de Dados ##
Modelo lógico das tabelas banco de dados:

1. __Clientes__:

    * ```id_cliente``` (PK)
    * ```razao_social```
    * ```estado_id``` (FK)

2. __Telefones__:
    * ```id_telefone``` (PK)
    * ```numero```
    * ```tipo_id``` (FK)
    * ```cliente_id``` (FK)

3. __Tipos_Telefone__:
    * ```id_tipo (PK)```
    * ```descricao```

4. __Estados__:
    * ```id_estado``` (PK)
    * ```nome```
    * ```sigla```

### Relacionamentos ###

* Um cliente pode ter vários telefones (Relacionamento 1:N entre ```Clientes``` e ```Telefones```).
* Cada telefone tem um tipo (Relacionamento N:1 entre ```Telefones``` e ```Tipos_Telefone```).
* Cada cliente está associado a um estado (Relacionamento N:1 entre ```Clientes``` e ```Estados```).

### Comando SQL para Buscar Clientes de São Paulo ###

``` sql  
SELECT 
    c.id_cliente, 
    c.razao_social, 
    t.numero 
FROM 
    Clientes c
JOIN 
    Telefones t ON c.id_cliente = t.cliente_id
JOIN 
    Estados e ON c.estado_id = e.id_estado
WHERE 
    e.sigla = 'SP';
```