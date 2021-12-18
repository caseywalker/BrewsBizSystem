import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import './App.scss';
import { getUserWithUID } from '../helpers/data/userData';
import NavBar from '../components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  const [userFromDB, setUserFromDB] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          userName: authed.displayName,
          uid: authed.uid
        };
        setUser(userInfoObj);
        getUserWithUID(authed.uid).then((resp) => setUserFromDB(resp));
      } else if (user || user === null) {
        setUser(false);
        setUserFromDB(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar
        user={user}
        userFromDB={userFromDB}
        />
        <Routes
        user={user}
        userFromDB={userFromDB}
        />
      </Router>
    </div>
  );
}

export default App;
