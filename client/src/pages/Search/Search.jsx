import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import NavBar from '../Browse/component/Navbar';
import Card from '../Browse/component/Card';

const Search = () => {
  const history = useHistory();
  const location = useLocation();

  const [isLoading, setisLoading] = useState(true);

  const [shows, setshows] = useState([]);
  const [movies, setmovies] = useState([]);
  const [specials, setspecials] = useState([]);

  useEffect(() => {
    // if the search query is empty
    if (location.search.split('=')[1].split('%20').join(' ') === '') {
      history.push('/browse');
    }

    // get the search term
    const searchParam = location.search.split('=')[1].split('%20').join(' ');

    async function fetcher() {
      const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
      const url = `http://localhost:5000/api/getSearch/${searchParam}`;
      const res = await fetch(url, {
        headers: { authorization: token },
      });
      const json = await res.json();
      try {
        if (json.movies) {
          setmovies(json.movies);
        }
        if (json.shows) {
          setshows(json.shows);
        }
        if (json.specials) {
          setshows(json.shows);
        }
      } catch (error) {
        console.log(error);
      }
      setisLoading(false);
    }
    fetcher();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          background: 'rgb(20,20,20)',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <img
          style={{ objectFit: 'contain' }}
          src={require('../../res/loading.svg')}></img>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'rgb(51, 51, 51)',
      }}>
      <NavBar />
    </div>
  );
};

export default Search;
