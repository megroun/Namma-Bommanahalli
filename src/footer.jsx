import React, { Component } from 'react';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook/';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import MdMail from 'react-ionicons/lib/MdMail';
import MdChatboxes from 'react-ionicons/lib/MdChatboxes';


class Footer extends Component {
    styles = {
        color: 'white',
        // background: 'white'
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark col-12" id="footer">
                    <a className="navbar-brand Fa500px" id="logoNamefooter">Namma Bommanahalli<br />
                        <a id="byName">Developed by Rahul Abhishek</a>
                        <span className="badge badge-pill badge-secondary"></span>
                    </a>
                    <div className="info">
                        <div className="title">Additional Info</div>
                        <div className="links"><MdMail style={this.styles} beat={true} color="red" />Email Us</div>
                        {/* <div className="links">Call Us</div> */}
                        <div className="links"><MdChatboxes style={this.styles} shake={true} color="#00acee" />Chat with Us</div>
                    </div>
                    <div className="info1" >
                        <div className="title1">Social Media</div>
                        <div className="links"><LogoFacebook style={this.styles} shake={true} color="white" />Facebook</div>
                        <div className="links"><LogoTwitter style={this.styles} beat={true} color=" #00acee" />Twitter</div>
                        <div className="links"><LogoInstagram style={this.styles} rotate={true} color=" pink" />Instagram</div>
                    </div>
                    <div className="info2">
                        <div className="title2">Address</div>
                        <div className="links">13th main, 8th cross, Virat Nagar,<br />
                            Bommanahalli, Bangalore- 560068</div>
                        {/* <div className="links">Call Us</div>
                        <div className="links">Chat with Us</div> */}
                    </div>
                    {/* <ul className="info">
                        <li>Email</li>
                        <li>Chat</li>
                    </ul> */}
                </nav>
            </div>
        );
    }
}

export default Footer;