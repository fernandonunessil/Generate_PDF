import './App.css';
import ClientesPDF from './Relatorios/Clientes';

const clientes = [
  {
    nome:'Fernando',
    sobrenome:'Nunes',
    aniversario:'12/04/2006'
  },
  {
    nome:'Isadora',
    sobrenome:'Nunes',
    aniversario:'09/01/2002'
  },
  {
    nome:'Dilma',
    sobrenome:'Nunes',
    aniversario:'12/03/1973'
  },
  {
    nome:'Odair',
    sobrenome:'Silva',
    aniversario:'16/06/1984'
  },
]

function App() {
  return (
    <div className='app'>
      <div className='button' onClick={(e) => ClientesPDF(clientes)}>
        <p>Gerar pdf</p>
      </div>
    </div>
  );
}

export default App;
