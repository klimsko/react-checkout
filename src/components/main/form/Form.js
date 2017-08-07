import React, { Component } from 'react'

export default class Form extends Component {
	constructor() {
		super();

		this.state = {
			firstName: '',
			firstNameValid: false,
			lastName: '',
			lastNameValid: false,
			email: '',
			emailValid: false,
			phone: '',
			address: '',
			addressValid: false,
			addressCont: '',
			zipCode: '',
			zipCodeValid: false,
			city: '',
			cityValid: false,
			state: '',
			stateValid: false,
			country: '',
			countryValid: false,
			cardNumber: '',
			cardNumberValid: false,
			cardHolder: '',
			cardHolderValid: false,
			cvc: '',
			cvcValid: false,
			btnActive: false
		}
	}

	onInputChange(event) {
		const inputValue = event.target.value,
					inputName = event.target.name;
		
		this.setState({
			[inputName]: inputValue,
			[inputName + 'Valid']: inputValue.length > 0
		}, this.btnActive)
	}

	btnActive() {
		if (this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid 
				&& this.state.addressValid && this.state.zipCodeValid && this.state.cityValid 
				&& this.state.stateValid && this.state.countryValid && this.state.cardNumberValid 
				&& this.state.cardHolderValid && this.state.cvcValid) 
		{
			this.setState({ btnActive: true })
		}
		else {this.setState({ btnActive: false })}
			
	}

	render() {
		return (
			<div className="contact-details-container">
	      <p className="secondary-title">DELIVERY ADDRESS</p>
	      <form action="#" name="checkout" id="checkout">
	        <label htmlFor="firstName">FIRST NAME <i className="recuired"></i></label> 
	        <input 
		        type="text" name="firstName" id="firstName" 
		        value={this.state.firstName} 
		        onChange={this.onInputChange.bind(this)} 
	        />
	        <label
	        	htmlFor="firstName"
	        	className="error"
	        	style={ this.state.firstNameValid ? {display: 'none'} : {display: 'block'} }>
	        	Please enter your first name
	        </label>

	        <label htmlFor="lastName">LAST NAME <i className="recuired"></i></label>
	        <input 
		        type="text" name="lastName" id="lastName" 
		        value={this.state.lastName} 
		        onChange={this.onInputChange.bind(this)} 
	        />
	        <label 
	        	htmlFor="lastName"
	        	className="error"
	        	style={ this.state.lastNameValid ? {display: 'none'} : {display: 'block'} }>
	        	Please enter your last name
	        </label>

	        <label htmlFor="email">E-MAIL <i className="recuired"></i></label>
	        <input 
	        	type="email" name="email" id="email" 
	        	value={this.state.email} 
	        	onChange={this.onInputChange.bind(this)} 
	        />
	        <label
	        	htmlFor="email" 
	        	className="error"
	        	style={ this.state.emailValid ? {display: 'none'} : {display: 'block'} }>
	        	Please enter a valid email address
	        </label>

	        <label htmlFor="phone">PHONE</label>
	        <input type="text" 
	        	value={this.state.phone}
	        	onChange={this.onInputChange.bind(this)} 
	        />

	        <label htmlFor="address">ADDRESS <i className="recuired"></i></label>
	        <input 
		        type="text" name="address" id="address" 
		        value={this.state.adress} 
		        onChange={this.onInputChange.bind(this)} 
	        />
	        <label 
	        	htmlFor="address"
	        	className="error"
	        	style={ this.state.addressValid ? {display: 'none'} : {display: 'block'} }>
	        	This field is required
	        </label>

	        <label htmlFor="address-cont">ADDRESS CONT.</label>
	        <input type="text" 
		        value={this.state.addressCont} 
		        onChange={this.onInputChange.bind(this)} 
	        />

	        <label htmlFor="zipCode">ZIP CODE <i className="recuired"></i></label>
	        <input 
		        type="text" name="zipCode" id="zipCode" 
		        value={this.state.zipCode} 
		        onChange={this.onInputChange.bind(this)} 
	        />
	        <label 
	        	htmlFor="zipCode"
	        	className="error"
	        	style={ this.state.zipCodeValid ? {display: 'none'} : {display: 'block'} }>
	        	This field is required
	        </label>

	        <label htmlFor="city">CITY <i className="recuired"></i></label>
	        <input 
	        	type="text" name="city" id="city" 
	        	value={this.state.city} 
	        	onChange={this.onInputChange.bind(this)} 
	        />
	        <label 
	        	htmlFor="city"
	        	className="error"
	        	style={ this.state.cityValid ? {display: 'none'} : {display: 'block'} }>
	        	This field is required
	        </label>

	        <label htmlFor="state">STATE <i className="recuired"></i></label>
	        <input 
		        type="text" name="state" id="state" 
		        value={this.state.state} 
		        onChange={this.onInputChange.bind(this)} 
	       	/>
	       	<label 
	       		htmlFor="state"
	        	className="error"
	        	style={ this.state.stateValid ? {display: 'none'} : {display: 'block'} }>
	        	This field is required
	        </label>

	        <label htmlFor="country">COUNTRY <i className="recuired"></i></label>
	        <select name="country" value={this.state.country} onChange={this.onInputChange.bind(this)} >
	            <option value="">Select your country</option>
	            <option value="United States">United States</option>
	            <option value="Poland">Poland</option>
	            <option value="Ukraine">Ukraine</option>
	            <option value="Germany">Germany</option>
	            <option value="United Kingdom">United Kingdom</option>
	        </select>
	        <label 
	        	htmlFor="country"
	        	className="error"
	        	style={ this.state.countryValid ? {display: 'none'} : {display: 'block'} }>
	        	Please select your country
	        </label>
	    
	        <p className="payment">PAYMENT</p>
	    
	        <label htmlFor="cardNumber">CARD NUMBER <i className="recuired"></i></label>
	        <input 
		        type="text" name="cardNumber" id="cardNumber" 
		        value={this.state.cardNumber} 
		        onChange={this.onInputChange.bind(this)} 
	        />
	        <label 
	        	htmlFor="cardNumber"
	        	className="error"
	        	style={ this.state.cardNumberValid ? {display: 'none'} : {display: 'block'} }>
	        	This field is required
	        </label>

	        <label htmlFor="cardHolder">CARD HOLDER <i className="recuired"></i></label>
	        <input 
		        type="text" name="cardHolder" id="cardHolder" 
		        value={this.state.cardHolder} 
		        onChange={this.onInputChange.bind(this)} 
	        />
	        <label 
	        	htmlFor="cardHolder"
	        	className="error"
	        	style={ this.state.cardHolderValid ? {display: 'none'} : {display: 'block'} }>
	        	This field is required
	        </label>

	        <label htmlFor="cvc">CVC <i className="recuired"></i></label>
	        <input 
		        type="text" name="cvc" id="cvc" 
		        value={this.state.cvc} 
		        onChange={this.onInputChange.bind(this)} 
	        />
	        <label 
	        	htmlFor="cvc"
	        	className="error"
	        	style={ this.state.cvcValid ? {display: 'none'} : {display: 'block'} }>
	        	This field is required
	        </label>
	        
	        <button 
	        	className={this.state.btnActive ? '' : 'btn-disabled'} 
	        	type="submit" 
	        	disabled={!this.state.btnActive}>
	        	<span>BUY</span>
	        </button>
	      </form>
	    </div>
		)
	}
}