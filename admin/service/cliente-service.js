const CriarNovaLinha = (nome, email) => {
    const NovoCliente = document.createElement("tr");

    const conteudo = 
    `<td class="td" data-td>${nome}</td>

    <td>${email}</td>

    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`;

    NovoCliente.innerHTML = conteudo;
    return NovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/profile')

http.send()

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);

    data.forEach(element => {
        tabela.appendChild(CriarNovaLinha(element.nome, element.email));
    });
}
// Conexão com o banjo JSON, que é ativado pelo terminal, consulte read me.