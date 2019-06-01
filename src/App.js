import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './index.css';
import axios from 'axios';
import apiKey from './config';

// import components
import Header from './components/Header';
import Gallery from './components/Gallery';
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
    this.performSearch("angels");
    this.performSearch("crystals");
    this.performSearch("unicorns");
  }

  // fetch Flicker API data using Axios
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === "angels") {
          this.setState({
            angels: response.data.photos.photo,
            loading: false
          });
        } else if (query === "crystals") {
          this.setState({
            crystals: response.data.photos.photo,
            loading: false
          });
        } else if (query === "unicorns") {
          this.setState({
            unicorns: response.data.photos.photo,
            loading: false
          });
        } else {
          this.setState({
            results: response.data.photos.photo,
            loading: false
          });
        }
      })
      .catch(error => {
        console.log('Error fetching parsing data', error);
      });
  }

  // render the page
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route render={props => <Form {...props} onSearch={this.performSearch} />} />
          <Header />

      {/* switch will render the first route that matches the URL */}
        <Switch>
            {/* instruct the route to render the component only when it matches the exact route */}
            <Route exact path="/angels" render={() => <Gallery title="Angels" data={this.state.angels} />} />
            <Route exact path="/crystals" render={() => <Gallery title="Crystals" data={this.state.crystals} />} />
            <Route exact path="/unicorns" render={() => <Gallery title="Unicorns" data={this.state.unicorns} />} />
            <Route exact path="/search/:topic" render={() => <Gallery data={this.state.results} />} />

            <Route component={NotFound} />

        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}