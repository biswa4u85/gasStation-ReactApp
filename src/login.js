import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';
import topLogo from './images/top-logo.png';
import headerImg from './images/header-img.png';
import formHeaderLogo from './images/form-header-logo.jpg';
import forUsersLogo from './images/for-users-logo.jpg';
import forPartnerLogo from './images/for-partner-logo.jpg';
import phone from './images/phone.png';
import googleplayIcon from './images/googleplay-icon.png';
import appStore from './images/app-store.png';
import bottomLogo from './images/bottom-logo.png';
import fbIcon from './images/fb-icon.png';
import twitIcon from './images/twit-icon.png';
import instaIcon from './images/insta-icon.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;