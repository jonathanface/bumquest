import React from 'react';
import ReactDOM from 'react-dom';
import {Globals} from './Globals.jsx';
import {Landing} from './Landing.jsx';

window.onload = function() {
  new Globals();
  ReactDOM.render(
    <Landing />,
    Globals.ROOT_ELEMENT
  ); 
}