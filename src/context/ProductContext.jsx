import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: prev.length + 1 }]);
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      modalVisible,
      setModalVisible,
      selectedProduct,
      setSelectedProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};
