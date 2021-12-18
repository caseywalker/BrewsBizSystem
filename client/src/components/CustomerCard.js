import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

function CustomerCard({
  customerName,
  customerAddress,
  customerCity,
  customerZipCode,
  customerState
}) {
  return (
    <div>
      <Card className='expense-cards'>
        <CardBody>
          <CardTitle tag="h3">{customerName}</CardTitle>
          <CardText>Address: {customerAddress}</CardText>
          <CardText>{customerCity}, {customerState} {customerZipCode} </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

CustomerCard.propTypes = {
  customerName: PropTypes.string.isRequired,
  customerAddress: PropTypes.string.isRequired,
  customerCity: PropTypes.string.isRequired,
  customerZipCode: PropTypes.number.isRequired,
  customerState: PropTypes.string.isRequired
};

export default CustomerCard;
