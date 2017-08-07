import React, { Component } from 'react'

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div className="contact-details-container">
	      <p className="secondary-title">DELIVERY ADDRESS</p>
	      <form action="#" name="checkout" id="checkout">
	        <label htmlFor="firstName">FIRST NAME <i className="recuired"></i></label> 
	        <input type="text" name="firstName" id="firstName" />

	        <label htmlFor="lastName">LAST NAME <i className="recuired"></i></label>
	        <input type="text" name="lastName" id="lastName" />

	        <label htmlFor="email">E-MAIL <i className="recuired"></i></label>
	        <input type="email" name="email" id="email" />

	        <label htmlFor="phone">PHONE</label>
	        <input type="text" />

	        <label htmlFor="address">ADDRESS <i className="recuired"></i></label>
	        <input type="text" name="address" id="address" />

	        <label htmlFor="address-cont">ADDRESS CONT.</label>
	        <input type="text" />

	        <label htmlFor="zipCode">ZIP CODE <i className="recuired"></i></label>
	        <input type="text" name="zipCode" id="zipCode" />

	        <label htmlFor="city">CITY <i className="recuired"></i></label>
	        <input type="text" name="city" id="city" />

	        <label htmlFor="state">STATE <i className="recuired"></i></label>
	        <input type="text" name="state" id="state" />

	        <label htmlFor="country">COUNTRY <i className="recuired"></i></label>
	        <select name="country">
	            <option value="">Select your country</option>
	            <option value="United States">United States</option>
	            <option value="Poland">Poland</option>
	            <option value="Ukraine">Ukraine</option>
	            <option value="Germany">Germany</option>
	            <option value="United Kingdom">United Kingdom</option>
	        </select>
	    
	        <p className="payment">PAYMENT</p>
	    
	        <label htmlFor="cardNumber">CARD NUMBER <i className="recuired"></i></label>
	        <input type="text" name="cardNumber" id="cardNumber" />

	        <label htmlFor="cardHolder">CARD HOLDER <i className="recuired"></i></label>
	        <input type="text" name="cardHolder" id="cardHolder" />

	        <label htmlFor="cvc">CVC <i className="recuired"></i></label>
	        <input type="text" name="cvc" id="cvc" />
	        
	        <button type="submit"><span>BUY</span></button>
	      </form>
	    </div>
		)
	}
}