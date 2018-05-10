import React, { Component } from 'react';
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
  render() {
    return (
      <div>
        <div className="container-fluid headerShape">
          <div className="contentArea">
            <div className="row header">
              <div className="col-sm-9 col-12 logo">
                <img src={topLogo} alt="logo" />
              </div>
              <div className="col-sm-3 col-12">
                <button className="buttonBg contUsButt">PARTNER SIGN IN</button>
                <button className="buttonBg contUsButt">BECOME A PARTNER</button>
                <button type="button" className="hambtn navbar-toggler noPadding" name="button" data-toggle="collapse" data-target="#navbarCollapse"
                  aria-expanded="true">
                  <FontAwesome.FaAlignJustify />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="navbar-collapse collapse" id="navbarCollapse">
                  <ul className="navbar-nav foot-navs ml-auto text-center">
                    <li className="nav-item">
                      <a className="nav-link">Download Apps</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Contact Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Privacy Policy</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Teams &amp; conditions</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 noPadding sliderImg">
              <img src={headerImg} alt="Header Img" />
              <div className="sliderTxt">
                <p>On-demand services ....</p>
                <h3>Search
                      <span>.</span> Connect
                      <span>.</span> Walk-in</h3>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="boxBg formBox">
                <span className="headerLogo">
                  <img src={formHeaderLogo} alt="" />
                </span>
                <span className="boxTitle">Become an instawalkin partner</span>
                <form>
                  <input type="text" placeholder="Business name" name="businessname" />
                  <input type="text" placeholder="Contact name" name="businessname" />
                  <input type="text" placeholder="Phone Number" name="businessname" />
                  <button className="buttonBg getStartedButt">get started</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contentArea">
          <div className="row">
            <div className="col-sm-6">
              <div className="boxBg contentBox">
                <span className="headerLogo">
                  <img src={forUsersLogo} alt="" />
                </span>
                <span className="titleTxt">For Users</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="boxBg contentBox">
                <span className="headerLogo">
                  <img src={forPartnerLogo} alt="" />
                </span>
                <span className="titleTxt">For Partners</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid appBg">
          <div className="contentArea">
            <div className="row">
              <div className="col-sm-5 phoneImg">
                <img src={phone} alt="" />
              </div>
              <div className="col-sm-7">
                <span className="titletxt">Get the instawalkin App</span>
                <span>
                  <img src={googleplayIcon} alt="" />
                </span>
                <span>
                  <img src={appStore} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid socialBg">
          <div className="contentArea">
            <div className="row">
              <div className="col-sm-9 col-12 phoneImg">
                <img src={bottomLogo} alt="" />
              </div>
              <div className="col-sm-3 col-12">
                <span className="titleTxt">Connect with Us</span>
                <span className="socielIcons">
                  <a>
                    <img src={fbIcon} alt="" />
                    {/* <FontAwesome.FaFacebookOfficial /> */}
                  </a>
                </span>
                <span className="socielIcons">
                  <a>
                    <img src={twitIcon} alt="" />
                  </a>
                </span>
                <span className="socielIcons">
                  <a>
                    <img src={instaIcon} alt="" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;