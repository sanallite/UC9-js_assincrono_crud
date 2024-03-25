export const listaClientes = () => {
    return fetch('http://localhost:3000/profile').then( resposta => {
            return resposta.json();
        }
    )
}

export const criarCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then( resposta => {
            return resposta.body
        } )
}

export const removerCliente = (id) => {
    return fetch('http://localhost:3000/profile/${id}', {
        method: 'DELETE'
    })
}

export const clientService = {
    listaClientes,
    criarCliente,
    removerCliente
}