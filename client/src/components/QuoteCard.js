import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getCustomerByID } from '../helpers/data/customerData';

function QuoteCard({
  quoteID,
  customerID,
  quoteAmount,
  quoteDate
}) {
  const [thisCustomer, setThisCustomer] = useState(null);
  const [date] = useState(quoteDate.split('T'));

  const history = useHistory();

  const handleClick = () => {
    history.push(`/singleQuote/${quoteID}`);
  };

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
          <CardText>Date Created: {date[0]}</CardText>
          <Button className='mt-1' color='info' onClick={handleClick}>View Details</Button>
        </CardBody>
      </Card>
      }
    </div>
  );
}

QuoteCard.propTypes = {
  quoteID: PropTypes.string.isRequired,
  customerID: PropTypes.string.isRequired,
  quoteAmount: PropTypes.number.isRequired,
  quoteDate: PropTypes.any.isRequired
};

export default QuoteCard;
