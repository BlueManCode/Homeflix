import React, { useEffect, useState } from 'react';

import Navbar from './component/Navbar';
import CardView from './component/CardView';
import Preview from './component/Preview';

const Browse = () => {
  const [isLoading, setisLoading] = useState(true);

  const [show, setShow] = useState(null);
  const [movie, setMovie] = useState(null);
  const [special, setSpecial] = useState(null);

  // genres movies
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);
  const [romance, setRomance] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [scifi, setScifi] = useState([]);
  const [horror, setHorror] = useState([]);
  const [crime, setCrime] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [mystery, setMystery] = useState([]);

  // genres show
  const [showAction, setshowAction] = useState([]);
  const [showDrama, setshowDrama] = useState([]);
  const [showRomance, setshowRomance] = useState([]);
  const [showComedy, setshowComedy] = useState([]);
  const [showScifi, setshowScifi] = useState([]);
  const [showHorror, setshowHorror] = useState([]);
  const [showCrime, setshowCrime] = useState([]);
  const [showAnimation, setshowAnimation] = useState([]);
  const [showAdventure, setshowAdventure] = useState([]);
  const [showThriller, setshowThriller] = useState([]);
  const [showDocumentary, setshowDocumentary] = useState([]);
  const [showMystery, setshowMystery] = useState([]);

  function sortGenresShow(arr) {
    arr.forEach((item, index) => {
      switch (item) {
        case 'Action':
          setshowAction((showAction) => [item, ...showAction]);
          break;
        case 'Drama':
          setshowDrama((showDrama) => [item, ...showDrama]);
          break;
        case 'Romance':
          setshowRomance((showRomance) => [item, ...showRomance]);
          break;
        case 'Comedy':
          setshowComedy((showComedy) => [item, ...showComedy]);
          break;
        case 'Scifi':
          setshowScifi((showScifi) => [item, ...showScifi]);
          break;
        case 'Horror':
          setshowHorror((showHorror) => [item, ...showHorror]);
          break;
        case 'Crime':
          setshowCrime((showCrime) => [item, ...showCrime]);
          break;
        case 'Animation':
          setshowAnimation((showAnimation) => [item, ...showAnimation]);
          break;
        case 'Adventure':
          setshowAdventure((showAdventure) => [item, ...showAdventure]);
          break;
        case 'Thriller':
          setshowThriller((showThriller) => [item, ...showThriller]);
          break;
        case 'Documentary':
          setshowDocumentary((showDocumentary) => [item, ...showDocumentary]);
          break;
        case 'Mystery':
          setshowMystery((showMystery) => [item, ...showMystery]);
          break;
      }
    });
  }

  function sortGenres(arr) {
    arr.forEach((item, index) => {
      switch (item.genres) {
        case 'Action':
          setAction((action) => [item, ...action]);
          break;
        case 'Drama':
          setDrama((drama) => [item, ...drama]);
          break;
        case 'Romance':
          setRomance((romance) => [item, ...romance]);
          break;
        case 'Comedy':
          setComedy((comedy) => [item, ...comedy]);
          break;
        case 'Scifi':
          setScifi((scifi) => [item, ...scifi]);
          break;
        case 'Horror':
          setHorror((horror) => [item, ...horror]);
          break;
        case 'Crime':
          setCrime((crime) => [item, ...crime]);
          break;
        case 'Animation':
          setAnimation((animation) => [item, ...animation]);
          break;
        case 'Adventure':
          setAdventure((adventure) => [item, ...adventure]);
          break;
        case 'Thriller':
          setThriller((thriller) => [item, ...thriller]);
          break;
        case 'Documentary':
          setDocumentary((documentary) => [item, ...documentary]);
          break;
        case 'Mystery':
          setMystery((mystery) => [item, ...mystery]);
          break;
      }
    });
  }

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
      try {
        if (json.show.length !== 0) {
          sortGenresShow(json.show);
        }
        if (json.movie.length !== 0) {
          sortGenres(json.movie);
        }
        if (json.special) {
          if (json.special.length !== 0) {
            sortGenresShow(special);
          }
        }
      } catch (e) {}
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
        ;
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'rgb(20,20,20)',
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
      }}>
      <Navbar />
      <Preview movie={movie} />
      <div style={{ width: '100%', height: '100%' }}>
        {movie ? <CardView title="New Movies" list={movie} /> : null}
        {show ? <CardView title="New Shows" list={show} /> : null}
        {special ? <CardView title="New Special" list={special} /> : null}
        {action.length !== 0 ? <CardView title="Action" list={action} /> : null}
        {drama.length !== 0 ? <CardView title="Drama" list={drama} /> : null}
        {romance.length !== 0 ? (
          <CardView title="Romance" list={romance} />
        ) : null}
      </div>
    </div>
  );
};

export default Browse;
