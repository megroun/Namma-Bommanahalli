import React, { Component } from 'react';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        console.log('this.props = ', this.props);
    }

    render() {
        return (
            <div className="dropdown-content dropdown-contentCategory">
                {/* <a href='#'>{this.props.title}</a> */}
                {
                    this.props.myData.map((usercategories) => {
                        return (
                            <a location={usercategories.name} key={usercategories.id}>{usercategories.name}</a>
                        )
                    })
                }

            </div>

        );
    }

}

export default MenuItem;