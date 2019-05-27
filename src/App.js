import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import apiKey from './config';

// import components
import Header from './components/Header';
import Gallery from './components/Gallery';
import GalleryItem from './components/GalleryItem';
import Nav from './components/Nav';
import Form from './components/Form';
import NotFound from './components/NotFound';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      angels: [],
      crystals: [],
      unicorns: [],
      loading: true
    };
  };

  componentDidMount() {
    // load photos as soon as app loads
    this.performSearch();
  }

  performSearch = (query) => {
    // where do I get the correct API link?
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching parsing data', error);
      });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />

      {/* switch will render the first route that matches the URL */}
        <Switch>
          {/* instruct the route to render the component only when it matches the exact route */}
          <Route exact path="/form" component={Form} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/galleryitem" component={GalleryItem} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/nav" component={Nav} />
          <Route component={NotFound} />
          <Gallery data ={this.state.photos} />
        </Switch>
      
          {
            // if the loading state is true...
            (this.state.loading)
              ? <p>Loading...</p>
              : <Gallery data={this.state.gifs} />
          }

        </div>
      </BrowserRouter>
    );
  }
}