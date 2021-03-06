import React, { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import { getAllOrders } from '../helpers/data/orderData';

function Orders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    getAllOrders().then((ordersArray) => setOrders(ordersArray));
  }, []);

  return (
    <div>
      <h3>Order</h3>
      <div className='order-container'>
      {
        orders && orders.map((order) => (
          <OrderCard
          key={order.orderID}
          orderID={order.orderID}
          customerID={order.customerID}
          orderAmount={order.orderAmount}
          orderDate={order.orderDate}
          />
        ))
      }
      </div>
    </div>
  );
}

export default Orders;
