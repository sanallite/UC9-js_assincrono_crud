# Curso Técnico - UC9 - Desenvolvimento Back-End

Nona unidade curricular do meu curso técnico no Senac, no módulo web back-end.

## Conteúdo
A estrutura e estilização das páginas foram feitos préviamente pelo professor, e em aula foram criados os scripts, utilizando o método fetch e os verbos HTTP para criar, editar, ler e excluir dados de uma API local em um arquivo JSON.
* Os scripts modulares são divididos entre service, que lida com a API, e controller, que lida com os elementos das páginas

## Instruções de Uso:

* Instale, se for necessário, o Node.js
* Instale pelo npm os pacotes ``json-server`` e ``browser-sync``.
* Na pasta ``admin`` inicie um servidor do banco de dados com o comando:
  
      npx json-server ./db.json
* E para rodar o projeto no navegador:
  
      npx browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
