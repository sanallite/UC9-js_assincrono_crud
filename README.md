## Instruções de Uso:

* Instale, se for necessário, o Node.js
* Instale pelo npm os pacotes ``json-server`` e ``browser-sync``.

* Na pasta ``admin`` inicie um servidor do banco de dados com o comando:

    ``npx json-server ./db.json``

* E para rodar o projeto no navegador: 
    
    ``npx browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html``
