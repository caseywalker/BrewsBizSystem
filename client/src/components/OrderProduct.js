import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { GetProductByID } from '../helpers/data/productData';

function OrderProduct({
  productID,
  productPrice,
  productQuantity
}) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    GetProductByID(productID).then((prod) => setProduct(prod));
  }, []);

  return (
    <div>
      <Card className='order-product-cards'>
        <CardBody>
           { product && <CardTitle tag="h3">{product.productName}</CardTitle> }
          <CardText>Product Price: ${productPrice}</CardText>
          <CardText>Quantity: {productQuantity}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

OrderProduct.propTypes = {
  productID: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
};

export default OrderProduct;
