import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Order extends Component {
	static propTypes = {
		getTotalQty: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			product1qty: 1,
      product2qty: 1,
      product1price: 100,
      product2price: 300,
      subtotal: 0,
      shipping: 20,
      total: 0
    }

    this.totalQty = this.state.product1qty + this.state.product2qty;
	}

	plusProductQty(elem) {
		let subtotal = 0;
		let total = 0;
		let product1qty = this.state.product1qty;
		let product2qty = this.state.product2qty;
		this.totalQty = product1qty + product2qty;

		if (elem === 'product1qty'){
			product1qty += 1;
			subtotal = product1qty * this.state.product1price + product2qty * this.state.product2price;
			this.totalQty += 1;
		} else {
			product2qty += 1;
			subtotal = product1qty * this.state.product1price + product2qty * this.state.product2price;
			this.totalQty += 1;
		}
		total = subtotal + this.state.shipping;

		this.setState({ 
			product1qty,
			product2qty,
			subtotal,
			total
		})

		if (this.props.getTotalQty) {
			this.props.getTotalQty(this.totalQty);
		}
	}

	minusProductQty(elem) {
		let subtotal = 0;
		let total = 0;
		let product1qty = this.state.product1qty;
		let product2qty = this.state.product2qty;
		this.totalQty = product1qty + product2qty;

		if (elem === 'product1qty' && this.state[elem] > 0){
			product1qty -= 1;
			subtotal = product1qty * this.state.product1price + product2qty * this.state.product2price;
			this.totalQty -= 1;
		} else if (elem === 'product2qty' && this.state[elem] > 0){
			product2qty -= 1;
			subtotal = product1qty * this.state.product1price + product2qty * this.state.product2price;
			this.totalQty -=1;
		}
		total = subtotal + this.state.shipping;
		
		this.setState({ 
			product1qty,
			product2qty,
			subtotal,
			total
		})
	
		if (this.props.getTotalQty) {
			this.props.getTotalQty(this.totalQty);
		}
	}

	componentDidMount() {
		let {
			product1qty,
			product2qty,
			product1price,
			product2price,
			subtotal,
			shipping,
			total
		} = this.state;

		subtotal = product1qty * product1price + product2qty * product2price;
		total = subtotal + shipping;

		this.setState({
			subtotal,
			total
		})

		this.props.getTotalQty(this.totalQty);
	}

	render() {
		return (
			<div className="order-container">
	      <p className="secondary-title">YOUR ORDER</p>

	      <div id="product1" className="product">
	        <div className="product-img">
	            <img src={require("./../img/pic-item.png")} alt="glasses" />
	        </div>
	        <p className="product-name">Acme product name</p>
	        <div className="plus-minus">
	          <img 
	          	src={require("./../img/icon-minus.svg")} 
	          	className="minus" alt="minus" 
	          	onClick={this.minusProductQty.bind(this, "product1qty")}
	          	/> 
	          <span className="quantity">{this.state.product1qty}</span> 
	          <img 
	          	src={require("./../img/icon-plus.svg")} 
	          	className="plus" alt="plus" 
	          	onClick={this.plusProductQty.bind(this, "product1qty")}
	          	/>
	        </div>
	        <span className="product-price"> Price </span>  <span className="product-price-amount"> {this.state.product1price}$ </span>
	      </div>
	      <div id="product2" className="product">
	        <div className="product-img">
	            <img src={require("./../img/pic-item.png")} alt="glasses" />
	        </div>
	        <p className="product-name">Motorhead glasses black</p>
	        <div className="plus-minus">
	            <img 
	            src={require("./../img/icon-minus.svg")} 
	            className="minus" alt="minus" 
	            onClick={this.minusProductQty.bind(this, "product2qty")}
	            /> 
	            <span className="quantity">{this.state.product2qty}</span> 
	            <img 
	            src={require("./../img/icon-plus.svg")} 
	            className="plus" alt="plus" 
	            onClick={this.plusProductQty.bind(this, "product2qty")}
	            />
	        </div>
	        <span className="product-price"> Price </span>  <span className="product-price-amount"> {this.state.product2price}$ </span>
	      </div>

	      <div className="summary">
	        <p className="secondary-title">ORDER SUMMARY</p>

	        <div className="summary-line">
	            <span className="summary-name">Subtotal</span> <span id="subtotal" className="summary-amount">{this.state.subtotal}$</span>
	        </div>
	        <div className="summary-line">
	            <span className="summary-name">Shipping</span> <span id="shipping" className="summary-amount">{this.state.shipping}$</span>
	        </div>
	        <hr />
	        <div className="summary-line">
	            <span className="summary-name">Total</span> <span id="total" className="summary-amount-total">{this.state.total}$</span>
	        </div>
	      </div>
	    </div>
		)
	}
}