import React from 'react';
import iconRespect from './assets/icon-respect.png';
import iconTrust from './assets/icon-trust.png';
import iconVerified from './assets/icon-verified.png';

const iconMainSellerStyle = {
  height: '2rem',
  marginTop: '10px'
};

const iconStyle = {
  height: '1.5rem',
};

function Badges(props) {
  const { badges } = props;
  function MainSellerBadges() {
    return (
      <ul className="list-inline m-0">
        {badges.respected_badge &&
        <li className="list-inline-item mr-3"><img src={iconRespect} alt="Respected" style={iconMainSellerStyle}/></li>
        }
        {badges.trusted_badge &&
        <li className="list-inline-item mr-3"><img src={iconTrust} alt="Trusted" style={iconMainSellerStyle}/></li>
        }
        {badges.verified_badge &&
        <li className="list-inline-item"><img src={iconVerified} alt="Verified" style={iconMainSellerStyle}/></li>
        }
      </ul>
    )
  }

  if (props.main === true) {
    return <MainSellerBadges/>;
  } else {
    return (
      <div>
        {props.size === "md" && badges &&
        <ul className="list-inline m-0">
          {badges.respected_badge &&
          <li className="d-flex align-items-center py-1"><img src={iconRespect} alt=""/>Respected</li>
          }
          {badges.trusted_badge &&
          <li className="d-flex align-items-center py-1"><img src={iconTrust} alt=""/>Trusted</li>
          }
          {badges.verified_badge &&
          <li className="d-flex align-items-center py-1"><img src={iconVerified} alt=""/>Verified</li>
          }
        </ul>
        }
        {props.size === "sm" && badges &&
        <ul className="list-inline m-0">
          {badges.respected_badge &&
          <li className="list-inline-item mr-3"><img src={iconRespect} alt="" style={iconStyle}/></li>
          }
          {badges.trusted_badge &&
          <li className="list-inline-item mr-3"><img src={iconTrust} alt="" style={iconStyle}/></li>
          }
          {badges.verified_badge &&
          <li className="list-inline-item"><img src={iconVerified} alt="" style={iconStyle}/></li>
          }
        </ul>
        }
        {!props.size && badges &&
        <ul className="list-inline m-0">
          {badges.respected_badge &&
          <li className="list-inline-item mr-3"><img src={iconRespect} alt="" style={iconStyle}/></li>
          }
          {badges.trusted_badge &&
          <li className="list-inline-item mr-3"><img src={iconTrust} alt="" style={iconStyle}/></li>
          }
          {badges.verified_badge &&
          <li className="list-inline-item"><img src={iconVerified} alt="" style={iconStyle}/></li>
          }
        </ul>
        }
      </div>
    )
  }
}

export default Badges;