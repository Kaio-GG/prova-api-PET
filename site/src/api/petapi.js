import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})


 export async function novo (nome ){
const resposta = await api.post ('/pet/cadastro',  {
    nome:nome
})

return resposta.status
}


export async function buscar (nome ){
const resposta = await api.get('/pet/procurar', {
    nome:nome
})    

return resposta.data;
}

