import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';

// pages
import Login from './pages/Login';
import Browse from './pages/Browse';

function App() {
  const location = useLocation();
  const history = useHistory();

  // to check if token exist or not and send to the correct page
  useEffect(() => {
    // if on not login page and no token
    if (
      location.pathname !== 'login' &&
      !JSON.parse(localStorage.getItem('token'))
    ) {
      localStorage.clear();
      history.push('/login');
    }

    // if on login page and has token
    else if (
      location.pathname === 'login' &&
      JSON.parse(localStorage.getItem('token'))
    ) {
      history.push('/browse');
    }
  }, [location, history]);

  return (
    <div>
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
