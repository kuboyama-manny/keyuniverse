import React, {Component} from "react";
import {Link} from 'react-router-dom';
import ProfileMain from '../';
import BtnPrimary from '../../../components/Buttons/BtnPrimary';
import CustomSelect from '../../../components/Forms/CustomSelect';
import DescriptionItem from '../../../components/DescriptionItem';
import FaIcon from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/fontawesome-free-solid';


class BankAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAccount: false
    }
    this.toggleAccountView = this.toggleAccountView.bind(this);
  }

  toggleAccountView() {
    this.setState({selectedAccount: !this.state.selectedAccount})
  }

  render() {
    return (
      <ProfileMain>
        <h4>Bank Account</h4>

        {/* When there are no accounts */}
        {/* <p>To add the bank account and withdraw money for your selling, please fill the information below.</p>
                <div className="row">
                    <div className="col-sm-6">
                        <CustomSelect label="Country" opts={["United Kingdom","US"]}/>
                    </div>
                </div> */}

        <table className="table table-hover">
          <thead>
          <tr>
            <th scope="col">BANK NAME</th>
            <th scope="col">LAST 4 CARD NUMBERS</th>
            <th scope="col">CURRENCY</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr data-aos="fade-up" className={this.state.selectedAccount ? 'active' : ''}
              onClick={() => this.toggleAccountView()}>
            <th scope="row">Bank of UK, N.A.</th>
            <td>XXXX-XXXX-XXXX-2222</td>
            <td>GBP</td>
            <td>
              <div className="text-white h5 m-0"><FaIcon icon={faTimes}/></div>
            </td>
          </tr>
          <tr data-aos="fade-up" onClick={() => this.toggleAccountView()}>
            <th scope="row">Bank of UK, N.A.</th>
            <td>XXXX-XXXX-XXXX-1111</td>
            <td>USD</td>
            <td>
              <div className="text-white h5 m-0"><FaIcon icon={faTimes}/></div>
            </td>
          </tr>
          </tbody>
        </table>

        <div className="d-flex justify-content-end">
          <Link to={"/profile/accounts/new"}>
            <BtnPrimary content="Add bank Account"/>
          </Link>
        </div>
        {this.state.selectedAccount &&
        <div data-aos="fade">
          <h5 className="font-weight-normal font-spacing py-3 mt-5">LEGAL ENTITY</h5>
          <div className="d-flex">
            <div className="w-100">

              <DescriptionItem title="Business Type" desc="Individual" size={4}/>
              <DescriptionItem title="First name" desc="Tom" size={4}/>
              <DescriptionItem title="Last name" desc="Smith" size={4}/>
              <DescriptionItem title="Date of birth" desc="1985/06/21" size={4}/>

            </div>
            <div className="w-100">
              <DescriptionItem title="Address city" desc="London" size={4}/>
              <DescriptionItem title="Address line" desc="223 River Road" size={4}/>
              <DescriptionItem title="Postal code" desc="06320" size={4}/>

            </div>
          </div>
        </div>
        }

      </ProfileMain>
    );
  }
}

export default BankAccounts;
