import React, { Component } from 'react';
import MenuItem from './menuitem';
// import PageContent from 's.json'

class CategoryDropDown extends Component {
    state = {
        Categories: [
            { name: 'Properties', id: 1 },
            { name: 'Hotels', id: 2 },
            { name: 'Education', id: 3 },
            { name: 'Health Care', id: 4 },
            { name: 'Repair', id: 5 },
            { name: 'Groceries', id: 6 },
            { name: 'Fitness', id: 7 },
            { name: 'Pet Car', id: 8 },
            { name: 'Furniture', id: 9 },
            { name: 'Electronics', id: 10 },
            { name: 'Stationery', id: 11 },
            { name: 'Saloon', id: 12 }
        ]
    };

    render() {
        return (
            <div className="dropdownCategory hidden-xs-up">
                <button className="dropbtnCategory hidden-xs-up">
                    <i className="arrow downCategory hidden-xs-up"></i>Browse by category
                </button>
                {/* <div id="myDropdownCategory" className="dropdown-contentCategory">
                    {
                        this.state.Categories.map((usercategories) => {
                            return (
                                <a location={usercategories.category} key={usercategories.id}>{usercategories.category}</a>
                            )
                        })
                    }
                  
                </div> */}
                <MenuItem myData={this.state.Categories}></MenuItem>
            </div>
        );
    }
    dropCategory(event) {
        // document.getElementById("myDropdownCategory").classList.toggle("showCategory");
        console.log('reached ', event.target.matches('.dropbtnCategory'));
        if (event.target.matches('.dropbtnCategory')) {
            var dropdownsCategory = document.getElementsByClassName("dropdown-contentCategory");
            //   var a;
            for (let a = 0; a < dropdownsCategory.length; a++) {
                var openDropdown = dropdownsCategory[a];
                if (openDropdown.classList.contains('showCategory')) {
                    openDropdown.classList.remove('showCategory');
                }
                else {
                    openDropdown.classList.add('showCategory');
                }
            }
        }
    }

}

export default CategoryDropDown;


// export PageContent =[
//     pageTitle:'xya',
//     imgSrc:'',
//     data:[{},{}]
// ];