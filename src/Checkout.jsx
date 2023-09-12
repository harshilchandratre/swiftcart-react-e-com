import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [buttonText, setButtonText] = useState('Pay Now');

  function showLoading(event) {
    event.preventDefault(); // Prevent form submission

    setButtonText('Processing Payment...');

    setTimeout(function () {
      setButtonText('Payment completed.');
    }, 3000); // Change to the desired duration in milliseconds
  }

  return (

    <div className="checkout-container">
      <div className="credit-card-form">
        <h2>Credit Card Payment</h2>
        <form>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Card number" />
          </div>
          <div className="form-group">
            <label htmlFor="card-holder">Card Holder</label>
            <input type="text" id="card-holder" placeholder="Card holder's name" />
          </div>
          <div className="form-row">
            <div className="form-group form-column">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" />
            </div>
            <div className="form-group form-column">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="CVV" />
            </div>
          </div>
          <button type="submit" className="click-button" onClick={showLoading}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>

  );
};

export default Checkout;