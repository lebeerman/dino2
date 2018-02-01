import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Profiles from './components/Profiles';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = { 
      profiles: [],
      active: false
    }
  }

  componentDidMount() {
    this.getDinosaurs();
  }

  getDinosaurs = () => {
    let apiURL = './dinosaurs.json';
    return fetch(apiURL)
      .then(response => response.json())
      .then(cardData => {
        this.setState({ profiles: cardData });
        console.dir( this.state);
      })
  };
  
  toggleClass() {
    const currentState = this.state.active;
    console.log('CHANGING!'+ currentState)
    document.querySelector('.skills-container').classList.add('hidden');
    this.setState({ active: !currentState });
  };

  addActiveClass() {
    this.setState({
      active: true
    })
  };

  render() {
    return (
      <div>
        <Header />
        <Profiles profiles={this.state.profiles} />
        <Footer />
      </div>
    );
  }
}
export default App;