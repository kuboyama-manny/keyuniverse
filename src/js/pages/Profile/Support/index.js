import React from "react";
import {Link} from 'react-router-dom';
import Breadcrumbs from '../../../components/Navigation/Breadcrumbs';
import DescriptionItem from '../../../components/DescriptionItem';
import BtnPrimary from '../../../components/Buttons/BtnPrimary';
import CustomInput from '../../../components/Forms/CustomInput';
import ModalDefault from '../../../components/Modals/ModalDefault';


function Support(props) {
  const modalSuccess = {
    id: "ticket-created",
    title: "Congratulations!",
    type: "success",
    content: "You have succesfully created the support ticket. Our support managers will do their best to help you with the issue.",
    // link: "/profile/Offers/my-Offers"
  };
  return (

    <div>
      <div className="container">

        <div className="row py-5">
          <div className="col">
            <div className="d-flex">
              <Link to={'/profile/general'}>
                <Breadcrumbs content="Go back to profile"/>
              </Link>
            </div>
            <h3>Create a support ticket</h3>
            <div className="row">
              <div className="col-sm-10">
                <p>If you have an issue with the key, you can create the support ticket and we’ll try to resolve it as
                  soon as possible.
                  Before you create the support ticket, please check that you enter right numbers of the key and this
                  key is really invalid.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <DescriptionItem title="Order" desc="#1009"/>
                <DescriptionItem title="Offer ID" desc="#000763"/>
                <DescriptionItem title="Date" desc="02/17/18"/>
                <DescriptionItem title="Game" desc="Rayman Origins"/>
                <DescriptionItem title="Price" desc="€11.50"/>
                <DescriptionItem title="Seller" desc="Nightmare"/>

                <div className="py-4">
                  <CustomInput label="Notes" placeholder="Please describe your issue"/>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-sm-end">
              <div data-toggle="modal" data-target={`#${modalSuccess.id}Modal`}>
                <BtnPrimary content="Create Support Ticket"/>
              </div>
            </div>
            <ModalDefault
              type={modalSuccess.type}
              id={modalSuccess.id}
              title={modalSuccess.title}
              content={modalSuccess.content}
              link={modalSuccess.link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
