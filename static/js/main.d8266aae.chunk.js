(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{129:function(e,t,a){e.exports=a(406)},389:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(19),s=a.n(r),i=a(29),l=a.n(i),o=a(128),u=a(48),m=a(11),d=a(12),v=a(13),h=a(14),p=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.cases;return console.log(e),""==e.total?null:c.a.createElement("div",{className:"ui two statistics"},c.a.createElement("div",{className:"ui brown statistic"},c.a.createElement("div",{className:"value"},e.active),c.a.createElement("div",{className:"label"},"Active Cases")),c.a.createElement("div",{className:"ui yellow statistic"},c.a.createElement("div",{className:"value"},""!==e.today||0===e.today?e.today:"NA"),c.a.createElement("div",{className:"label"},"Cases Today")),c.a.createElement("div",{className:"ui green statistic"},c.a.createElement("div",{className:"value"},e.recover),c.a.createElement("div",{className:"label"},"Recovered")),c.a.createElement("div",{className:"ui red statistic"},c.a.createElement("div",{className:"value"},e.fatal),c.a.createElement("div",{className:"label"},"Fatal")))}}]),a}(c.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onCountrySelect=function(t){e.props.countrySelected(t)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"item",onClick:function(t){return e.onCountrySelect({country:e.props.countryName.country,isVisible:!1})}},c.a.createElement("div",{className:"right floated content"},c.a.createElement("div",{className:"total-count"},this.props.countryName.total)),c.a.createElement("div",{className:"content"},this.props.countryName.country))}}]),a}(c.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onCountrySelect=function(e){n.props.countrySelect(e.country),n.setState({isBoxVisible:e.isVisible})},n.state={isBoxVisible:!1,total:e.statistics.total},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.statistics.countryList.map((function(t){if(t)return c.a.createElement("div",{className:"item",key:t.country},c.a.createElement(f,{countrySelected:e.onCountrySelect,countryName:t}))}));return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"ui message",onClick:function(){return e.setState({isBoxVisible:!0})}},c.a.createElement("div",{className:"header"},this.props.statistics.selCountry?this.props.statistics.selCountry:"Global Status"),c.a.createElement("div",{className:"total-count-button"},c.a.createElement("span",{className:"count"},this.state.total),c.a.createElement("i",null,">"))),c.a.createElement("div",{className:"ui middle aligned divided list countries ".concat(this.state.isBoxVisible?"":"hidden")},c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"right floated content"},c.a.createElement("div",{className:"total-count close",onClick:function(){return e.setState({isBoxVisible:!1})}},"x")),c.a.createElement("div",{className:"content"},"Select a region")),t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{total:e.statistics.total}}}]),a}(c.a.Component),E=(a(133),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).checkMode=function(t){e.props.theme(t)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("header",null,c.a.createElement("h2",{className:"ui header"},"Covid-19 Tracker"),c.a.createElement("div",{className:"ui toggle checkbox"},c.a.createElement("input",{type:"checkbox",name:"public",onChange:function(t){return e.checkMode(t.target.checked)}}),c.a.createElement("label",null,"Dark Mode")))}}]),a}(c.a.Component)),b=(a(389),a(47)),N=a.n(b),g=N.a.create({baseURL:"https://coronavirus-19-api.herokuapp.com"}),k=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"item"},c.a.createElement("div",{class:"image"},c.a.createElement("img",{src:this.props.feed.urlToImage})),c.a.createElement("div",{class:"content"},c.a.createElement("a",{href:this.props.feed.url,target:"_blank",class:"header"},this.props.feed.title),c.a.createElement("div",{class:"extra"},this.props.feed.author)))}}]),a}(c.a.Component),j=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={total:"",active:"",recover:"",fatal:"",today:"",countryList:[],selCountry:"",articles:[],darkTheme:!1},e.componentDidMount=Object(u.a)(l.a.mark((function t(){var a,n,c,r,s,i,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/all");case 2:return a=t.sent,n=a.data,e.setState({total:n.cases,active:n.cases-n.recovered-n.deaths,recover:n.recovered,fatal:n.deaths}),t.next=7,g.get("/countries");case 7:c=t.sent,r=c.data.filter((function(e){return"India"===e.country})),s=[{country:r[0].country,total:r[0].cases}],i=c.data.map((function(e){if("India"!==e.country)return{country:e.country,total:e.cases}})),u=[].concat(s,Object(o.a)(i)),e.setState({countryList:u});case 13:case"end":return t.stop()}}),t)}))),e.updateStats=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/countries/"+a);case 2:n=t.sent,c=n.data,e.setState({total:c.cases,active:c.cases-c.recovered-c.deaths,recover:c.recovered,fatal:c.deaths,today:c.todayCases,selCountry:a}),e.getNews();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getNews=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?q=coronavirus "+e.state.selCountry+"&apiKey=048c336a18af41a4af76ba53e7a15efb");case 2:a=t.sent,n=a.data.articles.slice(0,5),e.setState({articles:n}),console.log(n);case 6:case"end":return t.stop()}}),t)}))),e.changeTheme=function(t){e.setState({darkTheme:t})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=[];this.state.articles.length>0&&(e=this.state.articles.map((function(e){return c.a.createElement("div",{key:e.title,class:"ui unstackable items"},c.a.createElement(k,{feed:e}))})));var t=e.length>0?c.a.createElement("h2",null,"News"):c.a.createElement("h3",null,"Select region to show latest news");return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"ui raised very padded text container ".concat(this.state.darkTheme?"darkMode":"")},c.a.createElement(E,{theme:this.changeTheme}),c.a.createElement(y,{countrySelect:this.updateStats,statistics:this.state}),c.a.createElement("div",{className:"stats"},c.a.createElement(p,{cases:this.state})),c.a.createElement("hr",null),t,e))}}]),a}(c.a.Component),O=function(){return c.a.createElement(j,null)};s.a.render(c.a.createElement(O,null),document.querySelector("#root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.d8266aae.chunk.js.map