import React from 'react';

class News extends React.Component{
    render() {
    return (
            <div class="item">
                <div class="image">
                    <img src={this.props.feed.urlToImage} />
                </div>
                <div class="content">
                    <a href={this.props.feed.url} target="_blank" class="header">{this.props.feed.title}</a>
                </div>
            </div>
    );
    }
};

export default News;