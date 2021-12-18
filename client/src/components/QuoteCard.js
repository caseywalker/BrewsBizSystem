import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getCustomerByID } from '../helpers/data/customerData';

function QuoteCard({
  customerID,
  quoteAmount,
  quoteDate
}) {
  const [thisCustomer, setThisCustomer] = useState(null);

  useEffect(() => {
    getCustomerByID(customerID).then((customer) => setThisCustomer(customer));
  }, []);

  return (
    <div>
      {
        thisCustomer && <Card className='expense-cards'>
        <CardBody>
          <CardTitle tag="h3">Quote for {thisCustomer.customerName}</CardTitle>
          <CardText>Total: ${quoteAmount}</CardText>
          <CardText>Date Created: {quoteDate}</CardText>
        </CardBody>
      </Card>
      }
    </div>
  );
}

QuoteCard.propTypes = {
  customerID: PropTypes.string.isRequired,
  quoteAmount: PropTypes.number.isRequired,
  quoteDate: PropTypes.any.isRequired
};

export default QuoteCard;
