import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './main.css'

import Modal from '../Modal'
import Form from './form/Form'
import Order from './Order'

export default class Main extends Component {
  static propTypes = {
    updateBasket: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      name: ''
    }
  }

	getTotalQty(qty) {
		this.props.updateBasket(qty);
	}

  getModalInfo(name) {
    this.setState({ modalIsOpen: true, name })
  }

  onClickCloseModal() {
    this.setState({ modalIsOpen: false, name: '' })
  }

  render() {
  	return (
  	  <main>
        {this.state.modalIsOpen ?
          <Modal 
            name={this.state.name}
            onClickCloseModal={this.onClickCloseModal.bind(this)} /> 
          : null
        }
        <div className="container">
          <div className="row">
            <p className="main-title">CHECKOUT</p>
    
            <div className="col-lg-6 col-lg-push-6 col-md-6 col-md-push-6">
              <Order getTotalQty={this.getTotalQty.bind(this)} />
            </div>

            <div className="col-lg-6 col-lg-pull-6 col-md-6 col-md-pull-6">
              <Form getModalInfo={this.getModalInfo.bind(this)} />
            </div>

          </div>
        </div>

      </main>
  	)
  }
	
}