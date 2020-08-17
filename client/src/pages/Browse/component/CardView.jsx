import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import './CardView.css';

import Card from './Card';
import CardPreviewModal from './CardPreviewModal';

const CardView = (props) => {
  const [showModel, setshowModel] = useState(false);
  const [modelData, setmodelData] = useState([]);

  return (
    <div className="cardview">
      <div className="cardview-title">{props.title}</div>
      <div className="cardview-container">
        <Swiper style={{ width: '100vw' }} spaceBetween={200} slidesPerView={3}>
          {props.list.map((item, key) => (
            <SwiperSlide>
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
      </div>
      <CardPreviewModal showModel={showModel} modelData={modelData} />
    </div>
  );
};

export default CardView;
