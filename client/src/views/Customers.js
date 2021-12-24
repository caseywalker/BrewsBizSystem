import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomerCard from '../components/CustomerCard';
import { getCustomers } from '../helpers/data/customerData';

function Customers({ userFromDB }) {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    getCustomers().then((customersArray) => setCustomers(customersArray));
  }, []);

  return (
    <div>
      <h3>Customers</h3>
      <div className='customer-container'>
      {
        customers && customers.map((customer) => (
          <CustomerCard
          key={customer.customerID}
          customerID={customer.customerID}
          customerName={customer.customerName}
          customerAddress={customer.customerAddress}
          customerCity={customer.customerCity}
          customerZipCode={customer.customerZipCode}
          customerState={customer.customerState}
          userFromDB={userFromDB}
          />
        ))
      }
      </div>
    </div>
  );
}

Customers.propTypes = {
  userFromDB: PropTypes.any
};

export default Customers;
