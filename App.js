import './App.css';
import React, {useState} from 'react';
import { Tabela } from './Tabela';

function App(){
  
   const [mensagem, setMensagem] = useState('');
   const [mensagens, setMensagens] = useState([]);

   function handleChange(e){
    setMensagem (e.target.value);
   }
   console.log(mensagem)
   console.log(mensagens)
    return(
     <div>
      <h2>Tabela de Contagem</h2>
      <label>
        <input type="text" name="name" value={mensagem} onChange={handleChange}/>
      </label>
        <button onClick={()=>setMensagens([...mensagens,mensagem])}>inserir</button>
        <br></br><br></br>
        <Tabela mensagens={mensagens}/>
        
    </div>
  ); 
}
  
export default App;
