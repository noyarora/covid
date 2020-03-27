import React from 'react';
import { render } from '@testing-library/react';


class Header extends React.Component {

    checkMode = (e) => {
        this.props.theme(e);
    };

    render() {
    return (
        <header>
            <h2 className="ui header">
                Covid-19 Tracker
            </h2>
            <div className="ui toggle checkbox">
                <input type="checkbox" name="public" onChange={(e) => this.checkMode(e.target.checked)}/>
                <label>Dark Mode</label>
            </div>
        </header>
    );
    }
}

export default Header;