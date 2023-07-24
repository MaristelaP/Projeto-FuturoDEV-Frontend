import './App.css';
import { EstoqueProvider } from './components/contexts/estoqueContext';
import AppRoutes from './routes';
import { ProdutoProvider } from './components/contexts/ProdutoContext';

function App() {
  return (
    <div className="App">

      <EstoqueProvider>
        <ProdutoProvider> 
          

            <AppRoutes />
         
          
        </ProdutoProvider>
      </EstoqueProvider>

    </div>
  );
}

export default App;


//<Outlet />