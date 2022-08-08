import './App.css';
import ClientesPDF from './Relatorios/Clientes';

const clientes = [
  {
    nome:'Jhon',
    sobrenome:'Doe',
    aniversario:'12/04/2006'
  },
  {
    nome:'Marta',
    sobrenome:'Scott',
    aniversario:'09/01/2002'
  },
  {
    nome:'Jane',
    sobrenome:'Doe',
    aniversario:'12/03/1973'
  },
  {
    nome:'Michael',
    sobrenome:'Smith',
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
