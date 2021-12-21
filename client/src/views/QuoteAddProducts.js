import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuoteAddProductCard from '../components/QuoteAddProductCard';
import { getAllProducts } from '../helpers/data/productData';

function QuoteAddProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts().then((productsArray) => setProducts(productsArray));
  }, []);

  const params = useParams();

  return (
    <div>
      <h3>Adding products to {params.quoteID}</h3>
      {
        products && products.map((product) => (
          <QuoteAddProductCard
          key={product.productID}
          quoteID={params.quoteID}
          productID={product.productID}
          productName={product.productName}
          productDescription={product.productDescription}
          productPrice={product.productPrice}
          />
        ))
      }
    </div>
  );
}

export default QuoteAddProducts;
