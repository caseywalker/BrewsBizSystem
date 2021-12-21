import React, { useState, useEffect } from 'react';
import QuoteCard from '../components/QuoteCard';
import { getOpenQuotes } from '../helpers/data/quoteData';

function Quotes() {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    getOpenQuotes().then((quoteArray) => setQuotes(quoteArray));
  }, []);
  return (
    <div>
      <h3>Quotes</h3>
      {
        quotes && quotes.map((quote) => (
          <QuoteCard
          key={quote.quoteID}
          quoteID={quote.quoteID}
          customerID={quote.customerID}
          quoteAmount={quote.quoteAmount}
          quoteDate={quote.quoteDate}
          setQuotes={setQuotes}
          />
        ))
      }
    </div>
  );
}

export default Quotes;
