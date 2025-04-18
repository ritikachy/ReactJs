import ProductTable from './components/ProductTable';
import AddProductModal from './components/AddProductModal';
import { ProductProvider } from './context/ProductContext';


const App = () => {
  return (
    <ProductProvider>
      <div style={{ padding: 24 }}>
        <h1>🛒 Products</h1>
        <ProductTable />
        <AddProductModal />
      </div>
    </ProductProvider>
  );
};

export default App;
