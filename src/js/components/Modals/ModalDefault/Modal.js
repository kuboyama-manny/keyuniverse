import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import successImg from './assets/success-graphic.png';

class ModalDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  renderButton = () => {
    const { link, option } = this.props;
    if (!link) {
      if (option) {
        return true;
      } else {
        return (
          <button
            type="button"
            className="btn btn-block px-5 btn-primary btn-gradient font-spacing btn-lg text-uppercase"
            data-dismiss="modal"
          >
            Close
          </button>
        )
      }
    } else {
      return (
        <Link
          to={link}
          className="btn btn-block px-5 btn-primary btn-gradient font-spacing btn-lg"
        >
          <small>GOT IT</small>
        </Link>
      )
    }
  };

  render() {
    const { open, title, content, id, type, dark, onCloseModal } = this.props;
    return (
      <Modal
        data-aos="fade-up"
        className="modal-dialog shadow-lg"
        open={open}
        onClose={onCloseModal}
        center={true}
        showCloseIcon={false}
      >
        <div role="document">
          <div className={`modal-content ${dark ? 'bg-dark text-white' : ''}`}>
            <div className="modal-body px-sm-5 pb-1 text-center">
              <div className="d-flex justify-content-center">
                {
                  type === "success" && <img src={successImg} className="my-3"/>
                }
              </div>
              <h4 className="modal-title mt-3 text-center" id={`${id}Label`}>{title || "Modal Title"}</h4>
              <div className="m-0">{content || "Content"}</div>
            </div>
            <div className="modal-footer pb-5">
              <div className="col-sm-10 m-auto text-center">
                {this.renderButton()}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalDefault;