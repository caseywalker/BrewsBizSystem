import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderProduct from '../components/OrderProduct';
import { getOrderDetailsByID } from '../helpers/data/orderData';

function SingleOrder() {
  const [thisOrder, setThisOrder] = useState(null);

  const params = useParams();

  useEffect(() => {
    getOrderDetailsByID(params.orderID).then((resp) => setThisOrder(resp));
  }, []);

  return (
    <div>
      <h3>Single Order View</h3>
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
