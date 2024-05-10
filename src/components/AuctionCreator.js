import React from 'react'
import './AuctionCreator.css'

function AuctionCreator() {
    return (
        <div>
            
        <form className="">
          <h2>Auction Form</h2>
    
          <label htmlFor="auction-title">Auction Title:</label>
          <input type="text" id="auction-title" name="auction-title" required />
    
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
    
          <label htmlFor="starting-bid-price">Starting Bid Price:</label>
          <input type="number" id="starting-bid-price" name="starting-bid-price" required />
    
          <label htmlFor="reserve-price">Reserve Price:</label>
          <input type="number" id="reserve-price" name="reserve-price" required />
    
          <label htmlFor="auction-duration">Auction Duration:</label>
          <input type="datetime-local" id="start-time" name="start-time" required />
          <input type="datetime-local" id="end-time" name="end-time" required />
          <select id="duration" name="duration">
            <option value="1">1 Day</option>
            <option value="3">3 Days</option>
            <option value="7">1 Week</option>
          </select>
    
          <label htmlFor="bid-increment">Bid Increment:</label>
          <input type="number" id="bid-increment" name="bid-increment" required />
    
          <label htmlFor="payment-methods">Payment Methods:</label>
          <input type="checkbox" id="credit-card" name="payment-method" value="credit-card" required />
          <label htmlFor="credit-card">Credit Card</label>
          <input type="checkbox" id="paypal" name="payment-method" value="paypal" required />
          <label htmlFor="paypal">PayPal</label>
          <input type="checkbox" id="crypto" name="payment-method" value="crypto" required />
          <label htmlFor="crypto">Cryptocurrency</label>
    
          <label htmlFor="starting-period-bid">Starting Period htmlFor Bid:</label>
          <input type="date" id="starting-period-bid" name="starting-period-bid" required />
    
          <label htmlFor="ending-period-bid">Ending Period htmlFor Bid:</label>
          <input type="date" id="ending-period-bid" name="ending-period-bid" required />
    
          <label htmlFor="delivery-details">Delivery/Transfer Details:</label>
          <textarea id="delivery-details" name="delivery-details" required></textarea>
    
          <label htmlFor="seller-name">Seller Name:</label>
          <input type="text" id="seller-name" name="seller-name" required />
    
          <label htmlFor="seller-email">Seller Email:</label>
          <input type="email" id="seller-email" name="seller-email" required />
    
          <label htmlFor="seller-phone">Seller Phone:</label>
          <input type="tel" id="seller-phone" name="seller-phone" required />
    
          <label htmlFor="category">Category:</label>
          <select id="category" name="category">
            <option value="electronics">Electronics</option>
            <option value="art">Art</option>
            <option value="collectibles">Collectibles</option>
            <option value="other">Other</option>
          </select>
    
          <label htmlFor="photos-files">Upload Photos/Files:</label>
          <input type="file" id="photos-files" name="photos-files" required />
    
          <label htmlFor="terms-conditions">
            <input type="checkbox" id="terms-conditions" name="terms-conditions" required />
            I agree to the terms and conditions
          </label>
          
          <button type="submit">Submit</button>
        </form>
        </div>
      )
}

export default AuctionCreator