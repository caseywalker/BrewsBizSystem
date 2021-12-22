import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import QuoteCard from '../components/QuoteCard';
import { getOpenQuotes } from '../helpers/data/quoteData';

function Quotes() {
  const [quotes, setQuotes] = useState(null);

  const history = useHistory();

  useEffect(() => {
    getOpenQuotes().then((quoteArray) => setQuotes(quoteArray));
  }, []);

  const handleClick = () => {
    history.push('/customers');
  };

  return (
    <div>
      <h3>Quotes</h3>
      <Button className='mb-2' color='info' onClick={handleClick}>New Quote</Button>
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
