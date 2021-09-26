import './App.css';
   
function contaVogais(str) {
  const m = str.match(/[aeiouáâãàéêíóôõú]/gi);
  return m === null ? 0 : m.length;
}
function contaConsoantes(str) {
  const m = str.match(/[bcdfghjklmnpqrstvwxyzç]/gi);
  return m === null ? 0 : m.length;
}
function calcular(mensagens) {
    return `${contaVogais(mensagens)}V ${contaConsoantes(mensagens)}C`;

}
  
   export function Tabela({mensagens}) {
   return(
      <div>
        <table>
          <tread>
          <tr>
            <th>Número Digitado</th>
            <th>Texto Digitado</th>
            <th>Contador</th>
          </tr>
          </tread>
          <tbody>
            {mensagens.map((mensagens, index) => (
              <tr key={index}>
                  <td id='a'>{index + 1}</td>
                  <td>{mensagens}</td>
                  <td>{calcular(mensagens)}</td>
              </tr>
          ))}
          </tbody>
        </table>
     </div>);
 }