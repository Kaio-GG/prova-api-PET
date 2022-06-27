
import { useState } from 'react';

import {novo , buscar} from './api/petapi.js'


function App() {
const [nome , setnome] = useState('')

const [ resposta, setresposta]= useState('')



async function novopet(){
  const resp = await novo(nome)
}


async function buscarpet(){
  const resp = await buscar()
  console.log(resp)
   setresposta(resp)
   
}




  return (
    <div className="App">
     <h1>
       novo pet
     </h1>
    <input type='text' value={nome} onChange={e => setnome(e.target.value)}/>
      <button  onClick={novopet} > pronto </button>

  
    </div>
  );
}

export default App;
