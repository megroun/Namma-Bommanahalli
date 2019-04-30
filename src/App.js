import React, { Component } from 'react';
// import React, { Component, lazy, Suspense } from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import './index.css';
// import './mainbanner.css';
// import Navbar from './navbar';
// import MainBanner from './mainbanner';
// import Footer from './footer';
import Test from './test';
import Main from './main';


// const Slide = lazy(() => {
//   return Promise.all([
//     import("./slide"),
//     new Promise(resolve => setTimeout(resolve, 300))
//   ])
//   .then(([moduleExports]) => moduleExports);
// })

class App extends Component {
  
 
  render() {
    return (
      //  <React.Fragment>
      //   <Navbar/>
      //   <MainBanner/>
      //   <Suspense fallback={<div>Loading.....!!</div>}>
      //     <Slide/>
      //   </Suspense>
      //   <Footer/>
      //   <BrowserRouter>
      //   <div>
      //     <Switch>
      //     <Route path="/home" component={Test} exact/>
      //     </Switch>
      //   </div>
      //   </BrowserRouter>
      //  </React.Fragment>
      <React.Fragment>
      
        {/* <Main></Main> */}
        <BrowserRouter>
            <Route path="/" component={Main} exact strict />
            <Route path="/test" component={Test} exact strict />
       </BrowserRouter>
   
      </React.Fragment>
    );
  }
}

export default App;
