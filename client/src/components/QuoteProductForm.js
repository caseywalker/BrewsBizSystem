import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addProductToQuote } from '../helpers/data/quoteData';

function QuoteProductForm({
  quoteID,
  productID
}) {
  const [thisProduct, setThisProduct] = useState({
    productID,
    productQuantity: 1
  });

  const history = useHistory();

  const handleNumberInput = (e) => {
    setThisProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.valueAsNumber
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductToQuote(quoteID, thisProduct).then((resp) => history.push(`/singleQuote/${resp.quoteID}`));
  };

  return (
    <div className='form-group'>
      <form className='mt-3' id='add-expense-form' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Add to Quote</h2>
        <label>Quantity:</label>
        <input
        className='ml-2'
        name='productQuantity'
        type='number'
        placeholder='1'
        value={thisProduct.productQuantity}
        onChange={handleNumberInput} />
        <br/>
        <Button color='success' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

QuoteProductForm.propTypes = {
  quoteID: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
};

export default QuoteProductForm;
