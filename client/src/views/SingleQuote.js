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

  useEffect(() => {
    getQuoteDetailsByID(params.quoteID).then((detailsArray) => setThisQuote(detailsArray));
  }, []);

  return (
    <div>
      <h3>Single Quote View</h3>
      <Button className='mt-1' color='success' onClick={handleClick}>Add Products</Button>
      {
        thisQuote && thisQuote.map((quoteDetail) => (
          <QuoteProduct
          key={quoteDetail.quoteDetailID}
          productID={quoteDetail.productID}
          productPrice={quoteDetail.productPrice}
          productQuantity={quoteDetail.productQuantity}
          />
        ))
      }
    </div>
  );
}

export default SingleQuote;
