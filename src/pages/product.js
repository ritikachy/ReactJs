// src/pages/Product.js
import React, { useEffect, useState } from 'react';
import { Card, Spin, Row, Col, message } from 'antd';

const { Meta } = Card;

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        message.error('Failed to fetch products!');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spin tip="Loading products..." style={{ margin: '2rem auto', display: 'block' }} />;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  style={{ height: '250px', objectFit: 'contain', padding: '1rem' }}
                />
              }
            >
              <Meta title={product.title} description={`$${product.price}`} />
              <p style={{ marginTop: '0.5rem' }}>{product.description.slice(0, 100)}...</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
// Product.js



export default Product;
