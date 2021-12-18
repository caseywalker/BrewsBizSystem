import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

function ProductCard({
  productName,
  productDescription,
  productPrice
}) {
  return (
    <div>
      <Card className='expense-cards'>
        <CardBody>
          <CardTitle tag="h3">{productName}</CardTitle>
          <CardText>{productDescription}</CardText>
          <CardText>Price: ${productPrice}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

ProductCard.propTypes = {
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  productPrice: PropTypes.number
};

export default ProductCard;
