import './App.css';
import { Header } from './components/layout';
import { ProductList } from './components/views/products';

function App() {
  return (
    <div className="main-content">
      <Header />
      
      <div className="page-content py-6 lg:py-10">
        <div className="container">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
