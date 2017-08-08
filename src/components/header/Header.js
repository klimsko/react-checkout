import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

import Menu from './Menu'

const Header = (props) => {
	return (
		<div className="container">
        
      <div className="header">
        <p className="header-title">ACME STORE</p>
        <div onClick={props.openHamburgerMenu} className="hamburger">
          <span>Menu</span>
        </div>
        <Menu isOpen={props.isOpen} />
        <div className="basket">
          <img src={require("./../img/icon-bag.svg")} alt="Basket" />
          <span className="basket-quantity">{props.basket}</span>
        </div>
      </div>

    </div>
	)
}

Header.propTypes = {
  openHamburgerMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  basket: PropTypes.number.isRequired
}

export default Header;