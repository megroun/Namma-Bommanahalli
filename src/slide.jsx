import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
// import { BrowserRouter as Link } from 'react-router-dom';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import { BrowserRouter, Route, NavLink, Switch, Link } from 'react-router-dom';
import Test from './test.jsx';

class Slide extends Component {
    //    state={};

    render() {
        return (
            <div className="mainContainers">
                <div className="firstContainer">
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/hotelWeb.jpg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Link to="/test">
                                    <Button variant="primary">More Details
                                    </Button>
                                    {/* <Link to="./parkBanner.jpg" /> */}
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/hotelWeb.jpg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/hotelWeb.jpg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/hotelWeb.jpg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="secondContainer">
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/apartments.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/apartments.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/apartments.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/apartments.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="thirdContainer">
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/saloonWeb.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/saloonWeb.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/saloonWeb.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card1">
                        <Card className="classfiy" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../src/images/saloonWeb.jpeg")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary">More Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;