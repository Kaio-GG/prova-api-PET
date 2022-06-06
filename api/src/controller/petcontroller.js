import { loginpet , consultarpet} from "../repositori/petrepositori.js";
import { Router } from "express";

const server =Router()

server.post('/pet/cadastro', async (req,resp) =>{
   try{
    const nome = req.body
    const respota= await loginpet(nome)
    resp.send(respota)

}catch(err){
    resp.status(404).send({
        erro:err.message
    })
}

})

server.get('/pet/procurar' , async (req , resp) =>{
    try {
        
        const a = await consultarpet()
        resp.send(a)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})



export default server