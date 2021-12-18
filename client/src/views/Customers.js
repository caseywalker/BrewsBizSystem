import React, { useEffect, useState } from 'react';
import CustomerCard from '../components/CustomerCard';
import { getCustomers } from '../helpers/data/customerData';

function Customers() {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    getCustomers().then((customersArray) => setCustomers(customersArray));
  }, []);

  return (
    <div>
      <h3>Customers</h3>
      {
        customers && customers.map((customer) => (
          <CustomerCard
          key={customer.customerID}
          customerName={customer.customerName}
          customerAddress={customer.customerAddress}
          customerCity={customer.customerCity}
          customerZipCode={customer.customerZipCode}
          customerState={customer.customerState}
          />
        ))
      }
    </div>
  );
}

export default Customers;
