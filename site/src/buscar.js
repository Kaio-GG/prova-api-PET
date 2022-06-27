import { useState } from 'react';

import {novo , buscar} from './api/petapi.js'


function App() {

const [ resposta, setresposta]= useState([])




async function buscarpet(){

try {
    const resp = await buscar()
  console.log(resp)
  setresposta(resp)   
} catch (err) {
    alert(err.message)
}
  
}
  return (
    <div className="App">

    <div>
      <button onClick={buscarpet}>buscar</button>

    </div>

  <table>
    <thead>
      <tr>
        <th>
          id
        </th>
        <th>
          nome
        </th>
      </tr>
    </thead>
      <tbody>
        {resposta.map( item => 
          <tr>
            <td>{item.id_pet}</td>
          <td>{item.nm_pet}</td>
          </tr>
          )}
      </tbody>
  </table>
    </div>
  );
}

export default App;
