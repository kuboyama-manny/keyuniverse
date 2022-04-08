import React, {Component} from 'react';
import Modal from 'react-responsive-modal';

class BaseModalContainer extends Component {
  render() {
    const { open, title, children, dark, onCloseModal, onSaveModal } = this.props;
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
              <h4 className="modal-title mt-3 text-center">{title || "Modal Title"}</h4>
              <div className="m-0">
                { children }
              </div>
            </div>
            <div className="modal-footer pb-5">
              <div className="col-sm-10 m-auto text-center d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn px-5 btn-primary btn-gradient font-spacing btn-lg text-uppercase"
                  data-dismiss="modal"
                  onClick={onCloseModal}
                >
                  Close
                </button>
                {
                  onSaveModal &&
                  <button
                    type="button"
                    className="btn px-5 btn-primary btn-gradient font-spacing btn-lg text-uppercase"
                    data-dismiss="modal"
                    onClick={onSaveModal}
                  >
                    save
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default BaseModalContainer;