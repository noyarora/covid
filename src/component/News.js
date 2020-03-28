import React from 'react';

class News extends React.Component{
    render() {
    return (
            <div className="item">
                <div className="image">
                    <img src={this.props.feed.urlToImage} />
                </div>
                <div className="content">
                    <a href={this.props.feed.url} target="_blank" className="header">{this.props.feed.title}</a>
                    <div className="extra">
                        {this.props.feed.author}
                    </div>
                </div>
            </div>
    );
    }
};

export default News;