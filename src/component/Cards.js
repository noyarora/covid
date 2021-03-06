import React from 'react';

class Cards extends React.Component {

    render () {
        const covidData = this.props.cases;

        if(covidData.total == "") {
            return null
        }
        return (
            <div className="ui two statistics">
                <div className="ui brown statistic">
                    <div className="value">
                    {covidData.active}
                    </div>
                    <div className="label">
                    Active Cases
                    </div>
                </div>
                <div className="ui yellow statistic">
                    <div className="value">
                    {covidData.today !== '' || covidData.today === 0 ? covidData.today : 'NA'}
                    </div>
                    <div className="label">
                    Cases Today
                    </div>
                </div>
                <div className="ui green statistic">
                    <div className="value">
                    {covidData.recover}
                    </div>
                    <div className="label">
                    Recovered
                    </div>
                </div>
                <div className="ui red statistic">
                    <div className="value">
                    {covidData.fatal}
                    </div>
                    <div className="label">
                    Fatal
                    </div>
                </div>
            </div>
        );
    }
};

export default Cards;