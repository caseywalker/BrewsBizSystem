import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import { getCustomerByID } from '../helpers/data/customerData';
import { getQuoteByID } from '../helpers/data/quoteData';
import { placeOrder } from '../helpers/data/orderData';

function ConfirmOrder() {
  const [confirmQuote, setConfirmQuote] = useState(null);
  const [thisCustomer, setThisCustomer] = useState(null);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getQuoteByID(params.quoteID).then((resp) => setConfirmQuote(resp));
    getCustomerByID(params.customerID).then((customer) => setThisCustomer(customer));
  }, []);

  const handleClick = () => {
    placeOrder(params.quoteID).then((orderResp) => history.push(`/orderDetails/${orderResp.orderID}`));
  };

  return (
    <div>
      {
        confirmQuote && <Card className='expense-cards'>
        <CardBody>
          <CardTitle tag="h3">Quote for {thisCustomer.customerName}</CardTitle>
          <CardText>Total: ${confirmQuote.quoteAmount}</CardText>
          <Button className='mt-1' color='success' onClick={handleClick}>Confirm Order</Button>
        </CardBody>
      </Card>
      }
    </div>
  );
}

export default ConfirmOrder;
