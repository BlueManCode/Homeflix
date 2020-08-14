import React, { useEffect, useState } from 'react';

import Navbar from './component/Navbar';
import CardView from './component/CardView';
import Preview from './component/Preview';

const Browse = () => {
  const [show, setShow] = useState(null);
  const [movie, setMovie] = useState(null);
  const [special, setSpecial] = useState(null);

  // fetch the content from the server
  useEffect(() => {
    async function fetcher() {
      const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
      const res = await fetch('http://localhost:5000/api/getContent', {
        headers: {
          authorization: token,
        },
      });
      const json = await res.json();
      console.log(json);
      // set the content
      try {
        setShow(json.show.length !== 0 ? json.show : null);
        setMovie(json.movie.length !== 0 ? json.movie : null);
        if (json.special) {
          setSpecial(json.special.length !== 0 ? json.special : null);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetcher();
  }, []);

  return (
    <div
      style={{
        background: 'rgb(20,20,20)',
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
      }}>
      <Navbar />
      <Preview />
      <div style={{ width: '100%', height: '100%' }}>
        {movie ? <CardView title="Movies" list={movie} /> : null}
        {show ? <CardView title="Shows" list={show} /> : null}
        {special ? <CardView title="Special" list={special} /> : null}
      </div>
    </div>
  );
};

export default Browse;
