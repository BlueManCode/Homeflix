import React, { useEffect, useState } from 'react';
import './Preview.css';

import PlayBtn from './PlayBtn';
import MoreInfoBtn from './MoreInfoBtn';

const Preview = ({ movie }) => {
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState(null);
  const [item, setitem] = useState(null);

  useEffect(() => {
    // get a random movie to display
    const item = movie[Math.floor(Math.random() * movie.length)];
    setitem(item);
    setPoster(item.preview_poster);
    setTitle(item.titlePNG);
  }, []);

  return (
    <div
      className="preview-poster"
      style={{
        backgroundImage: `url(${poster})`,
        backgroundSize: 'cover',
      }}>
      <div className="preview-poster-content">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
          }}>
          <img className="preview-poster-content-title" src={title}></img>
          <div className="preview-poster-content-btn">
            <PlayBtn data={item} />
            <MoreInfoBtn />
          </div>
        </div>
      </div>
      <div className="preview-poster-blend"></div>
    </div>
  );
};

export default Preview;
