import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../helpers/data/productData';

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts().then((productsArray) => setProducts(productsArray));
  }, []);

  return (
    <div>
      <h3>Products</h3>
      <div className='product-container'>
      {
        products && products.map((product) => (
          <ProductCard
          key={product.productID}
          productName={product.productName}
          productDescription={product.productDescription}
          productPrice={product.productPrice}
          />
        ))
      }
      </div>
    </div>
  );
}

export default Products;
