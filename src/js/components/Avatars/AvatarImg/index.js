import React, { Component } from 'react';
// import avatarSm from './assets/avatar-sm.png';
// import avatarMd from './assets/avatar-md.png';

const imageStyle = {
  width: '80px',
  height: '80px'
};

class AvatarImg extends Component {
  constructor(props) {
    super(props);
  }

  renderAvatar() {
    const { imageUrl, size, onClick } = this.props;
    if (!size) {
      return <img style={imageStyle} src={imageUrl} onClick={onClick} alt=""/>
    } else {
      if (size === "md") {
        return <img style={imageStyle} src={imageUrl} onClick={onClick} alt=""/>
      }
    }
  }

  render() {
    return (
      this.renderAvatar(this.props)
    )
  }
}

export default AvatarImg;