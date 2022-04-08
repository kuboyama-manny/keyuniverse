import React, {Component} from "react";
import {Link} from 'react-router-dom';
import successImg from './assets/success-graphic.png';
import BtnPrimary from '../../Buttons/BtnPrimary';
import $ from 'jquery';

// ({ title, content, id, type, link }) 

class ModalDefault extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    $(`#${this.props.id}Modal`).modal('toggle')
  }

  render() {
    const {title, content, id, type, link, dark, option} = this.props;
    let renderButton = () => {
      if (!link) {
        if (option) {
          return
        } else {
          return <button type="button"
                         className="btn btn-block px-5 btn-primary btn-gradient font-spacing btn-lg text-uppercase"
                         data-dismiss="modal">Close</button>
        }
      } else {
        return <Link onClick={this.toggleModal} to={link}
                     className="btn btn-block px-5 btn-primary btn-gradient font-spacing btn-lg">
          <small>GOT IT</small>
        </Link>
      }
    }
    return (
      <div className="modal fade" id={`${id}Modal`} tabIndex="-1" role="dialog" aria-labelledby={`${id}Label`}
           aria-hidden="true">
        <div className="modal-dialog shadow-lg" role="document">
          <div className={`modal-content ${dark ? 'bg-dark text-white' : ''}`}>
            {/* <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div> */}


            <div className="modal-body px-sm-5 pb-1 text-center">
              <div className="d-flex justify-content-center">
                {type === "success" &&
                <img src={successImg} className="my-3"/>
                }
              </div>
              <h4 className="modal-title mt-3 text-center" id={`${id}Label`}>{title || "Modal Title"}</h4>
              <div className="m-0">{content || "Content"}</div>
            </div>
            <div className="modal-footer pb-5">
              <div className="col-sm-10 m-auto text-center">
                {renderButton()}
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default ModalDefault;
