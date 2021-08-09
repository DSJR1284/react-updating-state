import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCounter from './components/ButtonCounter';
import ClickityClick from './components/ClickityClick';
import LightSwitch from './components/LightSwitch';


ReactDOM.render(
  <div>
    Mount Components Here
    <ClickityClick />
    <ButtonCounter />
    <br></br>
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
