import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';

// pages
import Login from './pages/Login/Login';
import Browse from './pages/Browse/Browse';

function App() {
  const location = useLocation();
  const history = useHistory();

  // to check if token exist or not and send to the correct page
  useEffect(() => {
    // if on not login page and no token
    if (
      location.pathname !== '/login' &&
      JSON.parse(localStorage.getItem('token'))
    ) {
      localStorage.removeItem('token');
      history.push('/login');
    }

    // if on login page and has token
    else if (
      location.pathname === '/login' &&
      JSON.parse(localStorage.getItem('token'))
    ) {
      history.push('/browse');
    }
  }, [location, history]);

  // check if the auth token is valid
  useEffect(() => {
    async function fetcher() {
      if (
        JSON.parse(localStorage.getItem('token')) &&
        location.pathname !== '/login'
      ) {
        const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
        const res = await fetch('http://localhost:5000/api/', {
          headers: {
            authorization: token,
          },
        });
        const json = await res.json();
        // if a error
        if (res.status !== 200) {
          localStorage.removeItem('token');
          history.push('/login');
          console.log(json);
        }
      }
    }
    fetcher();
  }, [location, history]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: '0',
        padding: '0',
      }}>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/browse">
          <Browse />
        </Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
