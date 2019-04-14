import React, { Component } from 'react';


class MainBanner extends Component {
    // state = {}
    render() {
        return (
            <div className="mainBanner">
                {/* <h1 className="test">hello</h1> */}
                <img src={require("../src/images/banner.png")} className="banner" alt="banner" />
            </div>
        );
    }
}

export default MainBanner;