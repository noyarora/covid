import React, { Fragment } from 'react';
import Cards from './Cards';
import CountryList from './Country-List';
import Header from './Header';
import Footer from './Footer';

import '../style.css';

import covid from '../api/covid';
import Axios from 'axios';
import News from './News';

class Apps extends React.Component{

    state = {
        total: '', 
        active: '', 
        recover: '', 
        fatal: '', 
        today: '', 
        countryList : [], 
        selCountry: '', 
        articles: [],
        darkTheme: false,
        showLoader: true
    };

    componentDidMount = async () => {
        this.getGlobalStats();
        //get coumtries

        const currentCountryIp =  await Axios.get('https://ipapi.co/json/');
        this.updateStats(currentCountryIp.data.country_name);
        let countries = await covid.get('/countries');
        const currentCountry = countries.data.filter(res => res.country === 'India');
        const currentCountryData = [{country: currentCountry[0].country, total: currentCountry[0].cases}];
        const countryData = countries.data.map(res => {
            if(res.country !== 'India') {
                return {country: res.country, total: res.cases}
            }
        });
        const finalCountryList = [...currentCountryData, ...countryData]

        this.setState({countryList: finalCountryList})
    }

    render() {
        let newsFeed = [];
        if(this.state.articles.length > 0) {
        newsFeed = this.state.articles.map(res => {
            return (
                <div key={res.title} className="ui unstackable items">
                    <News feed={res}></News>
                </div>
            );
        });
        }


        return (
            <Fragment>
                <div className={`ui raised very padded text container ${this.state.darkTheme ? 'darkMode' : ''}`}>
                    <Header theme={this.changeTheme}></Header>
                    <div className="ui two column doubling stackable grid">
                        <div className="column">
                            <CountryList countrySelect={this.updateStats} statistics={this.state}></CountryList>
                            <div className="stats">
                                <Cards cases={this.state}></Cards>
                            </div>
                            <button className="ui button basic" onClick={this.getGlobalStats}>
                                Show Global Statistics
                            </button>
                            <p className="note">Note: Data is updated through opensource api. Actual count may vary</p>
                        </div>
                        <div className="column">
                            <h4 className="ui horizontal divider header">
                            News
                        </h4>
                        {newsFeed.length > 0 ? newsFeed : <div className="no-news">No news found for selected region.</div>} 
                        <div className="ui fitted divider"></div> 
                        </div>
                    </div>                     
                    <Footer></Footer>   
                    <div className={`loader ${this.state.showLoader ? '' : 'hideLoader'}`}>
                    <div className="ui active centered inline loader"></div>
                    </div>       
                </div>
            </Fragment>
        );
    }

    updateStats = async (e) => {
        const countryStats = await covid.get('/countries/' + e);
        const countryStatsData = countryStats.data;
        this.setState({total: countryStatsData.cases, active: (countryStatsData.cases - countryStatsData.recovered - countryStatsData.deaths), recover: countryStatsData.recovered, fatal: countryStatsData.deaths, today: countryStatsData.todayCases, selCountry: e, showLoader: true});

        this.getNews();
    };

    getNews = async () => {
        await Axios.get('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?' +
        'q=coronavirus ' + this.state.selCountry + '&' +
        'apiKey=048c336a18af41a4af76ba53e7a15efb').then(res => {
            const news = res;
            const articles = news.data.articles.slice(0, 5);
            this.setState({articles: articles});
        }, error => console.log(error));

        this.setState({showLoader: false});

    };

    getGlobalStats = async () => {
        const stats = await covid.get('/all');
        const caseData = stats.data;
        this.setState({total: caseData.cases, active: (caseData.cases - caseData.recovered - caseData.deaths), recover: caseData.recovered, fatal: caseData.deaths, today: '', selCountry: '', showLoader: true});
    
        this.getNews();
    };

    changeTheme = (e) => {
        this.setState({darkTheme: e});
    };
};

export default Apps;