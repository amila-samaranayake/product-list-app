import './App.css';
import { Header } from './components/layout';
import { ProductList } from './components/views/products';

function App() {
  return (
    <div className="main-content">
      <Header />
      <div className="container mx-auto">
          <ProductList />
      </div>
    </div>
  );
}

export default App;
