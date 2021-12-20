import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import QuoteProductForm from './QuoteProductForm';

function QuoteAddProductCard({
  quoteID,
  productID,
  productName,
  productDescription,
  productPrice
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing((prevState) => !prevState);
  };

  return (
    <div>
      <Card className='expense-cards'>
        <CardBody>
          <CardTitle tag="h3">{productName}</CardTitle>
          <CardText>{productDescription}</CardText>
          <CardText>Price: ${productPrice}</CardText>
          <Button className='mt-1' color='success' onClick={() => handleClick()}>
            { editing ? 'Close' : 'Add' }
          </Button>
          {
            editing && <QuoteProductForm
            quoteID={quoteID}
            productID={productID}
            />
          }
        </CardBody>
      </Card>
    </div>
  );
}

QuoteAddProductCard.propTypes = {
  quoteID: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  productPrice: PropTypes.number
};

export default QuoteAddProductCard;
