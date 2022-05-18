import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  /*
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );*/
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>We now have Auth!</h1>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);