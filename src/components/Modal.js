import React from 'react'
import PropTypes from 'prop-types'
import './modal.css'

const Modal = (props) => {
	return (
		<div className="overlay">
			<div className="popup">
				<h1>Dear {props.name}!</h1>
				Thank you for placing your order with us,
				we look forward to delivering your goods soon
				<div 
					className="close-popup"
					onClick={props.onClickCloseModal}>
				</div>
			</div>
		</div>
	)
}

Modal.propTypes = {
	name: PropTypes.string.isRequired,
	onClickCloseModal: PropTypes.func.isRequired
}

export default Modal;