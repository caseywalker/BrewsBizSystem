import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getCustomerByID } from '../helpers/data/customerData';
import { deleteQuote, getOpenQuotes } from '../helpers/data/quoteData';

function QuoteCard({
  quoteID,
  customerID,
  quoteAmount,
  quoteDate,
  setQuotes
}) {
  const [thisCustomer, setThisCustomer] = useState(null);
  const [date] = useState(quoteDate.split('T'));

  const history = useHistory();

  const handleClick = () => {
    history.push(`/singleQuote/${quoteID}`);
  };

  const handleDelete = () => {
    deleteQuote(quoteID).then(() => getOpenQuotes().then((quoteArr) => setQuotes(quoteArr)));
  };

  const handleOrder = () => {
    history.push(`/confirmOrder/${quoteID}/${customerID}`);
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
          <Button className='mt-1 mx-1' color='danger' onClick={handleDelete}>Delete Quote</Button>
          <Button className='mt-1' color='success' onClick={handleOrder}>Place Order</Button>
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
  quoteDate: PropTypes.any.isRequired,
  setQuotes: PropTypes.func
};

export default QuoteCard;
