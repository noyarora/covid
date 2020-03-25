import React from 'react';


class Country extends React.Component {
    render() {
    return (
        <div className="item" onClick={(e) => this.onCountrySelect({country: this.props.countryName.country, isVisible: false})}>
            <div className="right floated content">
                <div className="total-count">{this.props.countryName.total}</div>
            </div>
            <div className="content">
            {this.props.countryName.country}
            </div>
        </div>
    );
    }

    onCountrySelect = (e) => {
        this.props.countrySelected(e);
    };
}

export default Country;