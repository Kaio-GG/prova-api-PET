import { con } from "./connection.js";

export async function loginpet (novonome){
const comando =`
insert into tb_pet (nm_pet)
values (?)`
const [respota] = await con.query (comando, [novonome.nome])
return  respota[0]
}




export async function consultarpet(){
const comando =
`select * from tb_pet`
const [respota] = await con.query(comando)
return respota
}