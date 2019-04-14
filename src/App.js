import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import './index.css';
import './mainbanner.css';
import Navbar from './navbar';
// import Slide from './slide';
// import Content from './content';
import MainBanner from './mainbanner';
import Footer from './footer';

// const Slide = lazy(()=>{
//   import('./slide')
// });
const Slide = lazy(() => {
  return Promise.all([
    import("./slide"),
    new Promise(resolve => setTimeout(resolve, 300))
  ])
  .then(([moduleExports]) => moduleExports);
})
// import { read } from 'fs';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSistrix} from '@fortawesome/free-solid-svg-icons';


// library.add(faCoffee, faCheckSquare, faSistrix);



class App extends Component {
 
  render() {
    return (
     
      // <React.Fragment>
      //   {/* <Main id="main"/> */}
      //   <Navbar/>
      //   <br/>
      //   <Content></Content>
      // </React.Fragment>
       <React.Fragment>
        <Navbar/>
        <MainBanner/>
        <Suspense fallback={<div>Loading.....!!</div>}>
          <Slide/>
        </Suspense>
        <Footer/>
       </React.Fragment>
    );
  }
}

export default App;
