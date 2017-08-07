import React from 'react'
import './main.css'

import Form from './form/Form'
import Order from './Order'

const Main = (props) => {

	function getTotalQty(qty) {
		props.updateBasket(qty);
	}

	return (
	  <main>

      <div className="container">
        <div className="row">
          <p className="main-title">CHECKOUT</p>
  
          <div className="col-lg-6 col-lg-push-6 col-md-6 col-md-push-6">
            <Order getTotalQty={getTotalQty} />
          </div>

          <div className="col-lg-6 col-lg-pull-6 col-md-6 col-md-pull-6">
            <Form />
          </div>

        </div>
      </div>

    </main>
	)
	
}

export default Main;