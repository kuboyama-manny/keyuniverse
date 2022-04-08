import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import CustomInput from '../../../components/Forms/CustomInput';

class CheckoutFormModal extends Component {
  toggleModal() {
    $('#checkoutModal').modal('toggle')
  }

  render() {
    return (
      <div className="modal fade" id="checkoutModal" tabIndex="-1" role="dialog" aria-labelledby="checkoutModalLabel"
           aria-hidden="true">
        <div className="modal-dialog shadow-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <h4 className="modal-title text-center" id="checkoutModalLabel">Checkout Form</h4>

            <div className="modal-body px-sm-5">
              <p>Fill the card information and finish your order process. </p>
              <form action="">
                <CustomInput label="Card Number" placeholder="4111 111 1111 111"/>
                <div className="form-row">
                  <div className="col-sm-6">
                    <CustomInput label="Expired Date" placeholder="04/20"/>
                  </div>
                  <div className="col-sm-6">
                    <CustomInput label="Secure Code" placeholder="***"/>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer pb-5">
              <Link onClick={this.toggleModal} to={`/checkout-success`}
                    className="btn px-5 btn-primary btn-gradient font-spacing btn-lg">
                <small>PAY €30.00</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckoutFormModal;


