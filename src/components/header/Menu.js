import React from 'react'
import PropTypes from 'prop-types'

const Menu = (props) => {
	return (
		<div className="menu" style={props.isOpen ? {display: 'block'} : null}>
      <ul>
          <li><a href="">Women</a></li>
          <li><a href="">Men</a></li>
          <li><a href="">Accessories</a></li>
          <li><a href="">Shoes</a></li>
      </ul>
    </div>
	)
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default Menu;