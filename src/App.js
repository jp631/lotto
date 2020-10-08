import React, { Component } from 'react';

import WelcomeMenu from './component/menu/home-menu';
import SideMenu from './component/menu/side-menu';
import Header from './component/header';
import DisplayClients from "./component/clients/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideMenu: false,
      isMobile: (window.innerWidth < 1000) ? true : false,
      mobileStyle: {
        sidePanelPlacement: {
          left: this.showSideMenu ? '0rem' : '-19rem',
        },
        menuBar: {
          display: 'block',
          left: this.showSideMenu ? '0rem' : '22rem',
          cursor: 'pointer',
         
        },
        menuClose: {
          display: 'none',
          cursor: 'pointer',
  
        }
      }
    }
  }

  toggleSideBar = () => {
    this.setState({
      showSideMenu: this.state.showSideMenu ? false : true,
    }, 
    () => {
      this.setState({
        mobileStyle: {
          sidePanelPlacement: {
            left: this.state.showSideMenu ? '0rem' : '-19rem',
          },
          menuBar: {
          display: this.state.showSideMenu ? 'none' : 'block',
          left: this.showSideMenu ? '0rem' : '22rem',

          },
          menuClose: {
            display: this.state.showSideMenu  ? 'block' : 'none',
            left: this.state.showSideMenu ? '17rem' : '0rem',

        }
      }
      })
    })
    console.log(this.state.showSideMenu)
  }

  checkIfMobile = () => {
    this.setState({
      isMobile: (window.innerWidth < 1000) ? true : false,
    })
    console.log(this.state.isMobile);
  }

  render() {
    window.onresize = this.checkIfMobile;

    return (
      <BrowserRouter>
        <div className="app">
          <span className='HeaderPlacement'>
            <Header />
          </span>
          <span className='sidePanelPlacement'
            style={this.state.isMobile ?
              this.state.mobileStyle.sidePanelPlacement : { left: '0rem' }}>
            <FontAwesomeIcon onClick={this.toggleSideBar} className='icon' icon={faBars}
              style={this.state.isMobile ?
                this.state.mobileStyle.menuBar : { display: 'none' }} />
            <FontAwesomeIcon onClick={this.toggleSideBar} className='icon' icon={faTimesCircle}
              style={this.state.isMobile ?
                this.state.mobileStyle.menuClose : { display: 'none' }} />

            <SideMenu />
          </span>
          <Switch>
            <span className='middle-placement'>
              <Route exact path='/' component={WelcomeMenu} />
              <Route exact path='/clients' component={DisplayClients} />
            </span>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


// CLIENT

//ADMAIN
/*
see users and last purchase
email users
see lotto

**/




export default App;
