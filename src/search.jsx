import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Fa500px } from '@fortawesome/free-solid-svg-icons';
// import { Fa500px } from "react-icons/fa";
import IosSearch from 'react-ionicons/lib/IosSearch';

class Search extends Component {
    styles = {
        fontSize: "30px",
        color: "black",
        height: "20px",
        position: "relative",
        bottom: "5px"
    };
    // buttonStyles={

    // }
    render() {
        return (
            <div className="search">
                <input type="text" className="searchBar" placeholder="Search hospitals, properties and more..."></input>
                <button className="btn btn-warning btn-sm" id="searchButton"><IosSearch beat={true} style={this.styles} /></button>
            </div>
        );
    }
}

export default Search;