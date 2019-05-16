import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import apiKey from './config'

// import components
import Header from './Header';
import Gallery from './Gallery';
import GalleryItem from './Nav';
import Nav from './Header';
import Form from './Form';
import NotFound from './NotFound';

class App extends Component { 


};



render() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        {/*   
        
        // switch will render the first route that matches the URL
        <Switch>
        // instruct the route to render the component only when it matches the exact route
        <Route exact path="/about" render={ () => <About />} /> 
        <Route component={NotFound} />
        </Switch>
      
      */}

      </div>
    </BrowserRouter>
  );
};

export default App;