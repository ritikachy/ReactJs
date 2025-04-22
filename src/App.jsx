import ProductTable from './components/ProductTable';
import AddProductModal from './components/AddProductModal';
import { ProductProvider } from './context/ProductContext';
import App from './App';  // No extension needed

import App from './components/App';  // Adjust based on your folder structure

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
