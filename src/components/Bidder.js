import React from 'react'
import './Bidder.css';

function Bidder() {

  return (
       <div className="container">
        <h2>Bidder Form</h2>
        <form action="#">
            <div className="form-group">
                <label htmlFor="product-id">Product ID:</label>
                <input type="text" id="product-id" name="product-id" required=""/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required=""/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required=""/>
            </div>
            <div className="form-group">
                <label htmlFor="contact-number">Contact Number:</label>
                <input type="tel" id="contact-number" name="contact-number"/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="street-address" name="street-address" placeholder="Street Address" required=""/>
                <input type="text" id="city" name="city" placeholder="City" required=""/>
                <input type="text" id="state" name="state" placeholder="State" required=""/>
                <input type="text" id="zip-code" name="zip-code" placeholder="ZIP Code" required=""/>
            </div>
            <div className="form-group">
                <label htmlFor="bid-amount">Bid Amount:</label>
                <input type="number" id="bid-amount" name="bid-amount" required=""/>
            </div>
            <div className="form-group">
                <label htmlFor="payment-method">Payment Method:</label>
                <select id="payment-method" name="payment-method" required>
                    <option value="credit-card">Credit Card</option>
                    <option value="bank-transfer">Bank Transfer</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" id="other-payment-method" name="other-payment-method" placeholder="Specify other method"/>
            </div>
            <div className="form-group">
                <label htmlFor="additional-comments">Additional Comments/Notes:</label>
                <textarea id="additional-comments" name="additional-comments" rows="4"></textarea>
            </div>
            <button type="submit">Submit Bid</button>
        </form>
    </div>
    
  )
}

export default Bidder