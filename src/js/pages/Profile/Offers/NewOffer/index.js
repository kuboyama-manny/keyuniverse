import React, {Component} from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';
import FaIcon from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/fontawesome-free-solid';

import BtnLink from '../../../../components/Buttons/BtnLink';
import BtnPrimary from '../../../../components/Buttons/BtnPrimary';
import ProfileMain from '../../';
import ModalDefault from '../../../../components/Modals/ModalDefault/Modal';

import { addNotificationHelper } from '../../../../utils/helpers';
import constants from '../../../../utils/constants';



import {
  getSearchGames,
  selectGame,
  selectRegion,
  onChangePrice,
  toggleDonate,
  toggleDonationAmount,
  addProductKey,
  onChangeProductKey,
  removeProductKey,
  uploadDocument,
  saveAcceptedFileName,
  createNewOffer,
  publishNewOffer,
  getUploadedDocuments,
  deleteUploadedDocument
} from '../../../../actions/Profile/NewOffer';

import AjaxLoader from '../../../../components/AjaxLoader';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const modalSuccess = {
  id: "offer-created",
  title: "The offer has been created",
  type: "success",
  content: "Please, pay attention that in case you made mistakes you have to close the current offer and create the new one.",
  link: "/profile/Offers/my-Offers"
};

class NewOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepVal: 1,
      currentView: `Step1`,
      open: false
    };
  }

  componentDidMount() {
    if (this.props.isDraftOffer) {
      this.setState({ stepVal: 5, currentView: 'Step5' })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.createOfferStatus && this.props.createOfferStatus !== nextProps.createOfferStatus) {
      this.setState({ open: true });
    }
    if (!this.props.groupId && this.props.groupId !== nextProps.groupId) {
      this.goToNext();
    }
  }

  goToNext = () => this.setState({ stepVal: this.state.stepVal + 1, currentView: `Step${this.state.stepVal + 1}` });

  prevStep = () => this.setState({ stepVal: this.state.stepVal - 1, currentView: `Step${this.state.stepVal - 1}` });

  nextStep = () => {
    const { safeUrl, region, price, donation, donationPercent, productKeys, createNewOffer, uploadedFileName } = this.props;
    if (this.state.stepVal === 1) {
      if (!safeUrl) {
        addNotificationHelper(this.refs.notificationSystem, constants.notification.error.newOfferFirstStepError, 'error')
      } else {
        this.goToNext();
      }
    } else if (this.state.stepVal === 2) {
      if (price === '0') {
        addNotificationHelper(this.refs.notificationSystem, constants.notification.error.newOfferSecondStepError, 'error')
      } else {
        this.goToNext();
      }
    } else if (this.state.stepVal === 3) {
      if (productKeys.length === 0 || productKeys[0] === '') {
        addNotificationHelper(this.refs.notificationSystem, constants.notification.error.newOfferThirdStepError, 'error')
      } else {
        const detail = {
          safe_url: safeUrl,
          region,
          price,
          donation,
          donation_percent: donationPercent,
          product_keys: productKeys
        };
        createNewOffer(detail);
      }
    } else if (this.state.stepVal === 4) {
      if (uploadedFileName.length > 0) {
        this.goToNext();
      } else {
        addNotificationHelper(this.refs.notificationSystem, constants.notification.error.newOfferFourthStepError, 'error')
      }
    }
  };

  publishNewOffer = () => {
    const { groupId, publishNewOffer, uploadedFileName } = this.props;
    const detail = { group_id: groupId };
    if (uploadedFileName.length === 0) {
      this.setState({ stepVal: 4, currentView: 'Step4' }, () => {
        addNotificationHelper(this.refs.notificationSystem, constants.notification.error.newOfferFourthStepError, 'error')
      });
    } else {
      publishNewOffer(detail);
    }
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  changeCurrentView = (stepVal, currentView) => this.setState({ stepVal, currentView });

  render() {
    const {stepVal, currentView} = this.state;
    const Steps = {
      Step1: <Step1 {...this.props} />,
      Step2: <Step2 {...this.props} />,
      Step3: <Step3 {...this.props} />,
      Step4: <Step4 {...this.props} />,
      Step5: <Step5 {...this.props} />,
      default: <Step1 {...this.props} />
    };
    return (
      <ProfileMain>
        <div className="row">
          <div className="col-sm-8">
            <div className="h4 py-3 d-flex align-items-center justify-content-between">
              <span
                className={stepVal === 1 ? "text-white" : "text-info"}
                onClick={() => this.changeCurrentView(1, 'Step1')}
              >
                <FaIcon icon={faCircle}/>
              </span>
              <span
                className={stepVal === 2 ? "text-white" : "text-info"}
                onClick={() => this.changeCurrentView(2, 'Step2')}
              >
                <FaIcon icon={faCircle}/>
              </span>
              <span
                className={stepVal === 3 ? "text-white" : "text-info"}
                onClick={() => this.changeCurrentView(3, 'Step3')}
              >
                <FaIcon icon={faCircle}/>
              </span>
              <span
                className={stepVal === 4 ? "text-white" : "text-info"}
                onClick={() => this.changeCurrentView(4, 'Step4')}
              >
                <FaIcon icon={faCircle}/>
              </span>
              <span
                className={stepVal === 5 ? "text-white" : "text-info"}
                onClick={() => this.changeCurrentView(5, 'Step5')}
              >
                <FaIcon icon={faCircle}/>
              </span>
            </div>
            <h4 className="mb-4 ">Create new offer</h4>
            {/* Steps Rendering */}
            {Steps[currentView]}

            {/* Steps Navigation */}
            <div className="d-flex align-items-center justify-content-end">
              {currentView === "Step1" ?
                <Link to={'/profile/Offers/my-Offers'} className="px-4">
                  <BtnLink content="Cancel"/>
                </Link>
                :
                <div onClick={() => this.prevStep()} className="px-4">
                  <BtnLink content="Back"/>
                </div>
              }
              {currentView !== "Step5" ?
                <div>
                  <BtnPrimary
                    content="Next"
                    onClick={this.nextStep}
                    isLoading={this.props.buttonLoading}
                  />
                </div>
                :
                <div>
                  <BtnPrimary
                    content="Confirm"
                    onClick={this.publishNewOffer}
                  />
                  <ModalDefault
                    open={this.state.open}
                    type={modalSuccess.type}
                    id={modalSuccess.id}
                    title={modalSuccess.title}
                    content={modalSuccess.content}
                    link={modalSuccess.link}
                    onCloseModal={this.onCloseModal}
                  />
                </div>
              }
            </div>
          </div>
        </div>
        <AjaxLoader visible={this.props.loading}/>
        <NotificationSystem ref='notificationSystem' />
      </ProfileMain>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profile.newOffer.loading,
    buttonLoading: state.profile.newOffer.buttonLoading,
    safeUrl: state.profile.newOffer.safeUrl,
    gameName: state.profile.newOffer.gameName,
    region: state.profile.newOffer.region,
    groupId: state.profile.newOffer.groupId,
    price: state.profile.newOffer.price,
    searchGames: state.profile.newOffer.searchGames,
    donation: state.profile.newOffer.donation,
    donationPercent: state.profile.newOffer.donationPercent,
    productKeys: state.profile.newOffer.productKeys,
    uploadProgressVal: state.profile.newOffer.uploadProgressVal,
    acceptedFileName: state.profile.newOffer.acceptedFileName,
    uploadedFileName: state.profile.newOffer.uploadedFileName,
    createOfferStatus: state.profile.newOffer.createOfferStatus,
    isDraftOffer: state.profile.newOffer.isDraftOffer
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSearchGames: searchKey => {
      dispatch(getSearchGames(searchKey, ownProps.history));
    },
    selectGame: selectedGame => {
      dispatch(selectGame(selectedGame));
    },
    selectRegion: selectedRegion => {
      dispatch(selectRegion(selectedRegion));
    },
    onChangePrice: price => {
      dispatch(onChangePrice(price));
    },
    toggleDonate: donation => {
      dispatch(toggleDonate(donation));
    },
    toggleDonationAmount: donationPercent => {
      dispatch(toggleDonationAmount(donationPercent));
    },
    addProductKey: () => {
      dispatch(addProductKey());
    },
    removeProductKey: index => {
      dispatch(removeProductKey(index));
    },
    onChangeProductKey: (productKey, index) => {
      dispatch(onChangeProductKey(productKey, index));
    },
    uploadDocument: (formData, filename) => {
      dispatch(uploadDocument(formData, filename, ownProps.history));
    },
    saveAcceptedFileName: fileName => {
      dispatch(saveAcceptedFileName(fileName));
    },
    createNewOffer: detail => {
      dispatch(createNewOffer(detail, ownProps.history));
    },
    publishNewOffer: detail => {
      dispatch(publishNewOffer(detail, ownProps.history));
    },
    getUploadedDocuments: groupId => {
      dispatch(getUploadedDocuments(groupId, ownProps.history))
    },
    deleteUploadedDocument: (newFilename, originFileName, groupId) => {
      dispatch(deleteUploadedDocument(newFilename, originFileName, groupId, ownProps.history));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NewOffer);
