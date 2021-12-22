import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { GetProductByID } from '../helpers/data/productData';
import EditQuoteProductForm from './EditQuoteProductForm';
import { getQuoteDetailsByID, removeProductFromQuote } from '../helpers/data/quoteData';

function QuoteProduct({
  quoteID,
  quoteDetailID,
  productID,
  productPrice,
  productQuantity,
  setThisQuote
}) {
  const [product, setProduct] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing((prevState) => !prevState);
  };

  const handleDelete = () => {
    removeProductFromQuote(quoteDetailID, quoteID).then(() => getQuoteDetailsByID(quoteID).then((respArr) => setThisQuote(respArr)));
  };

  useEffect(() => {
    GetProductByID(productID).then((prod) => setProduct(prod));
  }, []);

  return (
    <div>
      <Card className='product-cards'>
        <CardBody>
           { product && <CardTitle tag="h3">{product.productName}</CardTitle> }
          <CardText>Product Price: ${productPrice}</CardText>
          <CardText>Quantity: {productQuantity}</CardText>
          <Button className='mt-1 mx-1' color='info' onClick={() => handleClick()}>
            { editing ? 'Close' : 'Edit' }
          </Button>
          <Button className='mt-1 mx-1' color='danger' onClick={() => handleDelete()}>Remove</Button>
          {
            editing && <EditQuoteProductForm
            quoteDetailID={quoteDetailID}
            quoteID={quoteID}
            productID={productID}
            productQuantity={productQuantity}
            setThisQuote={setThisQuote}
            />
          }
        </CardBody>
      </Card>
    </div>
  );
}

QuoteProduct.propTypes = {
  quoteID: PropTypes.string.isRequired,
  quoteDetailID: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
  setThisQuote: PropTypes.func
};

export default QuoteProduct;
