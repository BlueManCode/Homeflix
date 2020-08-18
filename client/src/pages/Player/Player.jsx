import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import ShowPlayer from './components/ShowPlayer';
import MoviePlayer from './components/MoviePlayer';

const Player = () => {
  const history = useHistory();
  const location = useLocation();

  const [playerData, setplayerData] = useState([]);
  const [isShow, setisShow] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  // extract the id and get data from the server
  useEffect(() => {
    const type = location.search.split('type=')[1].split('&')[0];
    const id = location.search.split('id=')[1];
    const url = `http://localhost:5000/api/getPlayerData/${type}/${id}`;
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));

    async function fetcher() {
      const res = await fetch(url, { headers: { authorization: token } });
      const json = await res.json();
      console.log(json);
      try {
        if (json.seasons) {
          setisShow(true);
        }
      } catch (error) {
        console.log(error);
      }
      if (res.status !== 200) {
        history.push('/browse');
      }
      setplayerData(json);
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
  } else if (!isLoading && isShow) {
    return <ShowPlayer />;
  } else if (!isLoading && !isShow) {
    return <MoviePlayer />;
  }
};

export default Player;
