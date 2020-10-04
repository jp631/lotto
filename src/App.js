import React from 'react';

import WelcomeMenu from './component/menu/home-menu';
import SideMenu from './component/menu/side-menu';
import Header from './component/header';
import DisplayClients from "./component/clients/index";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import './App.scss';



function App() {

  return (
    <BrowserRouter>
  <div className="app">
      <span className='HeaderPlacement'>
        <Header />
      </span>
      <span className='sidePanelPlacement'>
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


// CLIENT

//ADMAIN
/*
see users and last purchase
email users
see lotto

**/




export default App;
