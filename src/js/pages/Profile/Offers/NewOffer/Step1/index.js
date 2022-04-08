import React, { Component } from 'react';
import CustomAutoComplete from '../../../../../components/Forms/CustomAutocomplete';
import CustomSelect from '../../../../../components/Forms/CustomSelect';

class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allGames: [{ label: 'No games found', value: 'no_game' }],
      autoCompleteInputValue: ''
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.searchGames.length !== nextProps.searchGames.length) {
      if (nextProps.searchGames.length === 0) {
        this.setState({ allGames: [{ label: 'No games found', value: 'no_game' }]});
      } else {
        const gamesArr = nextProps.searchGames.map(game => {
          return { label: game.title, value: game.safe_url }
        });
        this.setState({ allGames: gamesArr });
      }
    }
  }

  changeValue = value => {
    if (this.state.autoCompleteInputValue.length <= 45) {
      this.setState({ autoCompleteInputValue: value }, () => {
        if (this.state.autoCompleteInputValue.length >= 3) {
          this.props.getSearchGames(this.state.autoCompleteInputValue)
        }
      });
    }
  };

  onSelectValue = (value, selectedItem) => this.setState({ autoCompleteInputValue: value }, () => {
    this.props.selectGame(selectedItem);
  });

  render () {
    const { allGames, autoCompleteInputValue } = this.state;
    const { selectRegion } = this.props;
    return (
      <div data-aos="fade">
        <h5 className="font-spacing font-weight-light">STEP 1: GENERAL INFORMATION</h5>
        <p>Choose general game information and key's quantity that you want to sell.</p>
        <div className="py-3">
          <div className="form-row">
            <div className="col-sm-6">
              <CustomAutoComplete
                placeholder="Enter a game keyword"
                games={allGames}
                changeValue={this.changeValue}
                onSelectValue={this.onSelectValue}
                keyword={autoCompleteInputValue}
              />
            </div>
            <div className="col-sm-6">
              <CustomSelect
                label="Region"
                opts={["US", "EU"]}
                placeholder="Choose game region"
                onChange={selectRegion}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step1;
