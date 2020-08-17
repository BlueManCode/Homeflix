import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import './CardView.css';

import Card from './Card';
import CardPreviewModal from './CardPreviewModal';

const CardView = (props) => {
  const [showModel, setshowModel] = useState(false);
  const [modelData, setmodelData] = useState([]);
  const [slides, setslides] = useState(window.innerWidth > 1000 ? 6 : 3);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.location.reload();
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="cardview">
      <div className="cardview-title">{props.title}</div>
      <div className="cardview-container">
        {slides === 3 ? (
          <Swiper
            style={{ width: '100%', zIndex: '1' }}
            spaceBetween={140}
            slidesPerView={3}>
            {props.list.map((item, key) => (
              <SwiperSlide style={{ width: '100%' }}>
                <Card
                  key={key}
                  data={item}
                  showModel={showModel}
                  setshowModel={setshowModel}
                  setmodelData={setmodelData}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            style={{ width: '100%' }}
            spaceBetween={200}
            slidesPerView={6}>
            {props.list.map((item, key) => (
              <SwiperSlide style={{ width: '100%' }}>
                <Card
                  key={key}
                  data={item}
                  showModel={showModel}
                  setshowModel={setshowModel}
                  setmodelData={setmodelData}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <CardPreviewModal showModel={showModel} modelData={modelData} />
    </div>
  );
};

export default CardView;
