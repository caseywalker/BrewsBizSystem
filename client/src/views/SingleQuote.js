import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import QuoteProduct from '../components/QuoteProduct';
import { getQuoteDetailsByID } from '../helpers/data/quoteData';

function SingleQuote() {
  const [thisQuote, setThisQuote] = useState(null);

  const params = useParams();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/quoteAddProducts/${params.quoteID}`);
  };

  const handleBack = () => {
    history.push('/quotes');
  };

  useEffect(() => {
    getQuoteDetailsByID(params.quoteID).then((detailsArray) => setThisQuote(detailsArray));
  }, []);

  return (
    <div>
      <h3>Single Quote View</h3>
      <Button className='mb-2 mx-1' color='success' onClick={handleClick}>Add Products</Button>
      <Button className='mb-2 mx-1' color='warning' onClick={handleBack}>Back To Quotes</Button>
      {
        thisQuote && thisQuote.map((quoteDetail) => (
          <QuoteProduct
          key={quoteDetail.quoteDetailID}
          quoteID={quoteDetail.quoteID}
          quoteDetailID={quoteDetail.quoteDetailID}
          productID={quoteDetail.productID}
          productPrice={quoteDetail.productPrice}
          productQuantity={quoteDetail.productQuantity}
          setThisQuote={setThisQuote}
          />
        ))
      }
    </div>
  );
}

export default SingleQuote;
