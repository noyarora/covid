import React, { Fragment } from 'react';
import Country from './Countries'

class CountryList extends React.Component {

    

    constructor(props){
        super(props);
        this.state = {isBoxVisible: false, total: props.statistics.total}
    }

    static getDerivedStateFromProps(props, state){
            return {
              total: props.statistics.total
            };
    }

    render() {
        const countryList = this.props.statistics.countryList.map(country => {
            if(country) 
            return (
                <div className="item" key={country.country}>
                    <Country countrySelected={this.onCountrySelect} countryName={country}></Country>
                </div>
            );
        });
        return (
            <Fragment>
                <div className="ui message" onClick={() => this.setState({isBoxVisible: true})}>
                    <div className="header">
                        {this.props.statistics.selCountry !== '' ? 'Global Status' : this.props.statistics.selCountry}
                    </div>
                    <div>
                        <span className="count">{this.state.total}</span>
                        <i>></i>
                    </div>
                </div>
                <div className={`ui middle aligned divided list countries ${this.state.isBoxVisible ? '' : 'hidden'}`}>
                    <div className="item">
                        <div className="right floated content">
                            <div className="total-count close" onClick={() => this.setState({isBoxVisible: false})}>x</div>
                        </div>
                        <div className="content">
                            &nbsp;
                        </div>
                    </div>
                    {countryList}
                </div>
            </Fragment>
        );
    }

    onCountrySelect = (e) => {
        this.props.countrySelect(e.country);
        this.setState({isBoxVisible: e.isVisible});
    };
}

export default CountryList;