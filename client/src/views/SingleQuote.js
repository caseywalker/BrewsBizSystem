import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuoteProduct from '../components/QuoteProduct';
import { getQuoteDetailsByID } from '../helpers/data/quoteData';

function SingleQuote() {
  const [thisQuote, setThisQuote] = useState(null);

  const params = useParams();

  console.warn(thisQuote);

  useEffect(() => {
    getQuoteDetailsByID(params.quoteID).then((detailsArray) => setThisQuote(detailsArray));
  }, []);

  return (
    <div>
      <h3>Single Quote View</h3>
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
