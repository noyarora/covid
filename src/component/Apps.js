import React, { Fragment } from 'react';
import Cards from './Cards';
import CountryList from './Country-List';
import Header from './Header';

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
        darkTheme: false
    };

    componentDidMount = async () => {
        const stats = await covid.get('/all');
        const caseData = stats.data;
        this.setState({total: caseData.cases, active: (caseData.cases - caseData.recovered - caseData.deaths), recover: caseData.recovered, fatal: caseData.deaths});

        //get coumtries
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
                <div key={res.title} class="ui unstackable items">
                    <News feed={res}></News>
                </div>
            );
        });
        }

        const newsHead =  newsFeed.length > 0 ? <h2>News</h2> : <h3>Select region to show latest news</h3>;
        

        return (
            <Fragment>
                <div className={`ui raised very padded text container ${this.state.darkTheme ? 'darkMode' : ''}`}>
                    <Header theme={this.changeTheme}></Header>
                    <CountryList countrySelect={this.updateStats} statistics={this.state}></CountryList>
                    <div className="stats">
                        <Cards cases={this.state}></Cards>
                    </div>
                    <hr></hr>
                    {newsHead}
                    {newsFeed}             
                </div>
            </Fragment>
        );
    }

    updateStats = async (e) => {
        const countryStats = await covid.get('/countries/' + e);
        const countryStatsData = countryStats.data;
        this.setState({total: countryStatsData.cases, active: (countryStatsData.cases - countryStatsData.recovered - countryStatsData.deaths), recover: countryStatsData.recovered, fatal: countryStatsData.deaths, today: countryStatsData.todayCases, selCountry: e});

        this.getNews();
    };

    getNews = async () => {
        const news = await Axios.get('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?' +
        'q=coronavirus ' + this.state.selCountry + '&' +
        'apiKey=048c336a18af41a4af76ba53e7a15efb');

        const articles = news.data.articles.slice(0, 5);
        this.setState({articles: articles});
        console.log(articles);
    };

    changeTheme = (e) => {
        this.setState({darkTheme: e});
    };
};

export default Apps;