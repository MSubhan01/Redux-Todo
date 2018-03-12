import React, { Component } from 'react';
import App from "./App/App"
import {Config} from "./firebase/firebase"
import firebase from "firebase"

class Main extends Component {
  constructor(){
    super();
    this.state = {}
    firebase.initializeApp(Config)
  }
  render() {
    return (
      <div>
          <App/>
      </div>      
    );
  }
}
export default Main;