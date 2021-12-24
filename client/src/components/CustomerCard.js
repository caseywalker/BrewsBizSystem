import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { addNewQuote } from '../helpers/data/quoteData';

function CustomerCard({
  customerID,
  customerName,
  customerAddress,
  customerCity,
  customerZipCode,
  customerState,
  userFromDB
}) {
  const quoteObject = {
    userID: userFromDB.userID,
    customerID
  };

  const history = useHistory();

  const handleClick = () => {
    addNewQuote(quoteObject).then((resp) => history.push(`/singleQuote/${resp.quoteID}`));
  };

  return (
    <div>
      <Card className='customer-cards'>
        <CardBody>
          <CardTitle tag="h3">{customerName}</CardTitle>
          <CardText>Address: {customerAddress}</CardText>
          <CardText>{customerCity}, {customerState} {customerZipCode} </CardText>
          <Button className="btn-md mr-2 ml-2 mt-2" color="info" onClick={() => handleClick()}>Create Quote</Button>
        </CardBody>
      </Card>
    </div>
  );
}

CustomerCard.propTypes = {
  customerID: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerAddress: PropTypes.string.isRequired,
  customerCity: PropTypes.string.isRequired,
  customerZipCode: PropTypes.number.isRequired,
  customerState: PropTypes.string.isRequired,
  userFromDB: PropTypes.any.isRequired
};

export default CustomerCard;
