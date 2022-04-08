import React from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';
import FaIcon from '@fortawesome/react-fontawesome';
import DropZone from 'react-dropzone';
import {
  faUsers,
  faLock,
  faEnvelope,
  faSignOutAlt,
  faEdit
} from '@fortawesome/fontawesome-free-solid';

import Badges from '../../../components/Badges';
import DescriptionItem from '../../../components/DescriptionItem';
import AvatarImg from '../../../components/Avatars/AvatarImg';
import BtnPrimaryOutline from '../../../components/Buttons/BtnPrimaryOutline';
import ProfileMain from '../';
import AjaxLoader from '../../../components/AjaxLoader';
import Modal from '../../../components/Modals/BaseModal';

import {
  getProfileInfo,
  setImageUrl,
  setCroppedFile,
  handleCropChange,
  onCloseModal,
  updateProfilePicture
} from '../../../actions/Profile/General';

class ProfileGeneral extends React.Component {
  constructor(props) {
    super(props);

    this.dropZoneRef = null;
    this.imageRef = null;

  }


  componentDidMount() {
    this.props.getProfileInfo();
  }

  onOpenDropZoneDialog = () => {
    this.dropZoneRef.open();
  };

  onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.props.setImageUrl(event.target.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  };

  handleCropChange = (crop) => {
    this.props.handleCropChange(crop);
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop, pixelCrop) => {
    this.makeClientCrop(crop, pixelCrop);
  };

  makeClientCrop = (crop, pixelCrop) => {
    if (this.imageRef && crop.width && crop.height) {
      this.getCroppedImg(
        this.imageRef,
        pixelCrop,
        'croppedFile.jpeg',
      ).then(croppedImageUrl => {
        console.log('---- cropped image url ----', croppedImageUrl);
        // this.setState({ croppedImageUrl })
      });
    }
  };

  getCroppedImg(image, pixelCrop, fileName) {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        this.props.setCroppedFile(new File([blob], 'croppedFile.jpeg'));
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { generalData, openModal, src, crop, openCrop, onCloseModal, updateProfilePicture } = this.props;
    return (
      <ProfileMain>
        <h4>General Info</h4>
        <div className="d-flex align-items-center mt-4">
          {
            openCrop ?
              <Modal
                title={'Update user profile picture'}
                open={openModal}
                onCloseModal={onCloseModal}
                onSaveModal={updateProfilePicture}
              >
                <ReactCrop
                  src={src}
                  crop={crop}
                  onChange={this.handleCropChange}
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                />
              </Modal> :
              <DropZone
                accept="image/jpeg, image/png, image/bmp, image/gif"
                ref={node => this.dropZoneRef = node}
                className={'upload-zone'}
                activeClassName={'active'}
                disableClick={true}
                onDrop={this.onDrop}
              >
                {({getRootProps, getInputProps}) => (
                  <div {...getRootProps()} className={'profile-image-container'}>
                    <input {...getInputProps()} />
                    <AvatarImg
                      onClick={this.onOpenDropZoneDialog}
                      imageUrl={generalData && generalData.user_info.profile_pic}
                    />
                    <div className="image-editor" onClick={this.onOpenDropZoneDialog}>
                      <div>Change Avatar</div>
                      <FaIcon icon={faEdit} className="profile-image-editor"/>
                    </div>
                  </div>
                )}
              </DropZone>
          }
          <div className="mx-3">
            <Badges badges={generalData && generalData.user_info.badges} size="sm"/>
            <div>
              <p className="mb-0">Level: {generalData && generalData.user_info.level}</p>
              <p className="mb-0">XP: {generalData && generalData.user_info.xp}</p>
            </div>
          </div>
          <div className="ml-auto">
            <BtnPrimaryOutline content="EDIT"/>
          </div>
        </div>
        <div className="row my-4">
          {generalData &&
          <div className="col">
            <DescriptionItem title="Username" desc={generalData.username}/>
            <DescriptionItem title="Email" desc={generalData.email}/>
            <DescriptionItem title="Phone number" desc={generalData.phone}/>
          </div>
          }
        </div>
        <h4 className="font-spacing font-weight-normal mt-4 mb-3">ACTIONS</h4>
        <p className="font-weight-bold">
          <Link to={"/public-profile"} className="btn-link text-white">
            <span className="mr-4"><FaIcon icon={faUsers}/> PUBLIC PROFILE</span>
          </Link>
          <Link to={"/profile/change-password"} className="btn-link text-white">
            <span className="mr-4"><FaIcon icon={faLock}/> CHANGE PASSWORD</span>
          </Link>
        </p>
        <p className="font-weight-bold">
          <span className="mr-4"><FaIcon icon={faEnvelope}/> CHANGE EMAIL</span>
          <span className="mr-4"><FaIcon icon={faSignOutAlt}/> LOGOUT</span>
        </p>
        <AjaxLoader visible={this.props.loading}/>
      </ProfileMain>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profile.general.loading,
    openModal: state.profile.general.openModal,
    openCrop: state.profile.general.openCrop,
    src: state.profile.general.src,
    crop: state.profile.general.crop,
    generalData: state.profile.general.generalData
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfileInfo: () => {
      dispatch(getProfileInfo(ownProps.history));
    },
    setImageUrl: src => {
      dispatch(setImageUrl(src));
    },
    setCroppedFile: file => {
      dispatch(setCroppedFile(file));
    },
    handleCropChange: crop => {
      dispatch(handleCropChange(crop));
    },
    onCloseModal: () => {
      dispatch(onCloseModal());
    },
    updateProfilePicture: () => {
      dispatch(updateProfilePicture(ownProps.history));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfileGeneral);