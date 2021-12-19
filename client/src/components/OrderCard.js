import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getCustomerByID } from '../helpers/data/customerData';

function OrderCard({
  customerID,
  orderAmount,
  orderDate
}) {
  const [thisCustomer, setThisCustomer] = useState(null);
  const [date] = useState(orderDate.split('T'));

  useEffect(() => {
    getCustomerByID(customerID).then((customer) => setThisCustomer(customer));
  }, []);

  return (
    <div>
      {
        thisCustomer && <Card className='expense-cards'>
        <CardBody>
          <CardTitle tag="h3">Order for {thisCustomer.customerName}</CardTitle>
          <CardText>Total: ${orderAmount}</CardText>
          <CardText>Date Ordered: {date[0]}</CardText>
        </CardBody>
      </Card>
      }
    </div>
  );
}

OrderCard.propTypes = {
  customerID: PropTypes.string.isRequired,
  orderAmount: PropTypes.number.isRequired,
  orderDate: PropTypes.any.isRequired
};

export default OrderCard;
