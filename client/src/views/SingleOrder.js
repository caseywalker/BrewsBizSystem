import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import OrderProduct from '../components/OrderProduct';
import { getOrderDetailsByID } from '../helpers/data/orderData';

function SingleOrder() {
  const [thisOrder, setThisOrder] = useState(null);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getOrderDetailsByID(params.orderID).then((resp) => setThisOrder(resp));
  }, []);

  const handleBack = () => {
    history.push('/orders');
  };

  return (
    <div>
      <h3>Single Order View</h3>
      <Button className='mb-2' color='warning' onClick={handleBack}>Back To Orders</Button>
      {
        thisOrder && thisOrder.map((orderDetail) => (
          <OrderProduct
          key={orderDetail.orderDetailID}
          productID={orderDetail.productID}
          productPrice={orderDetail.productPrice}
          productQuantity={orderDetail.productQuantity}
          />
        ))
      }
    </div>
  );
}

export default SingleOrder;
