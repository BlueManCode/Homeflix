import React, {
  useEffect,
  useState
} from 'react';

import Navbar from './component/Navbar'
import CardView from './component/CardView'
import Preview from './component/Preview'

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

      // set the content
      try {
        setShow(json.show)
        setMovie(json.movie)
        if (json.special) {
          setSpecial(json.special)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetcher();
  }, [])

  return (
    <div>
      <div>Browse</div>
    </div>
  );
};

export default Browse;