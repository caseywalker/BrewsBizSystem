import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { EditProductInQuote, getQuoteDetailsByID } from '../helpers/data/quoteData';

function EditQuoteProductForm({
  quoteDetailID,
  quoteID,
  productID,
  productQuantity,
  setThisQuote
}) {
  const [thisProduct, setThisProduct] = useState({
    productID,
    productQuantity: productQuantity || 1
  });

  const handleNumberInput = (e) => {
    setThisProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.valueAsNumber
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EditProductInQuote(quoteDetailID, quoteID, thisProduct.productQuantity).then((resp) => getQuoteDetailsByID(resp.quoteID).then((respArr) => setThisQuote(respArr)));
  };

  return (
    <div className='form-group'>
      <form className='mt-3' id='add-expense-form' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Update</h2>
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

EditQuoteProductForm.propTypes = {
  quoteDetailID: PropTypes.string.isRequired,
  quoteID: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired,
  setThisQuote: PropTypes.func
};

export default EditQuoteProductForm;
