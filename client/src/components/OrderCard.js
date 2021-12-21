import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCustomerByID } from '../helpers/data/customerData';

function OrderCard({
  orderID,
  customerID,
  orderAmount,
  orderDate
}) {
  const [thisCustomer, setThisCustomer] = useState(null);
  const [date] = useState(orderDate.split('T'));

  const history = useHistory();

  useEffect(() => {
    getCustomerByID(customerID).then((customer) => setThisCustomer(customer));
  }, []);

  const handleClick = () => {
    history.push(`/orderDetails/${orderID}`);
  };

  return (
    <div>
      {
        thisCustomer && <Card className='expense-cards'>
        <CardBody>
          <CardTitle tag="h3">Order for {thisCustomer.customerName}</CardTitle>
          <CardText>Total: ${orderAmount}</CardText>
          <CardText>Date Ordered: {date[0]}</CardText>
          <Button className='mt-1' color='info' onClick={handleClick}>View Details</Button>
        </CardBody>
      </Card>
      }
    </div>
  );
}

OrderCard.propTypes = {
  orderID: PropTypes.string.isRequired,
  customerID: PropTypes.string.isRequired,
  orderAmount: PropTypes.number.isRequired,
  orderDate: PropTypes.any.isRequired
};

export default OrderCard;
