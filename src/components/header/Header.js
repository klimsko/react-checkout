import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<div className="container">
        
      <div className="header">
        <p className="header-title">ACME STORE</p>
        <div className="hamburger"><span>Menu</span></div>
        <div className="menu">
          <ul>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Shoes</a></li>
          </ul>
        </div>
        <div className="basket">
          <img src={require("./../img/icon-bag.svg")} alt="Basket" />
          <span className="basket-quantity">{props.basket}</span>
        </div>
      </div>

    </div>
	)
}

Header.propTypes = {
	basket: PropTypes.number.isRequired
}

export default Header;