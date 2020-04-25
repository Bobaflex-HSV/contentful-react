import React from 'react';
import logo from './logo.svg';
import './App.css';
var contentful = require('contentful');

const contentfulSpaceId = 'nqclg9tj58dw';
const contentfulCdApiAccesstoken =
  'TwaQ7_8Cf1tObLkdCazTWMrUaU-0J-yhwYe_eYNnw98';

var client = contentful.createClient({
  space: contentfulSpaceId,
  accessToken: contentfulCdApiAccesstoken,
});

function App() {
  return (
    <div className="App">
      Working....
    </div>
  );
}

export default App;
