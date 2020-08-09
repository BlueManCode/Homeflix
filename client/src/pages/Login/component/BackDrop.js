import React from 'react';
import styled from 'styled-components';

import LoginForm from './LoginForm';

const BackDropContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BackDropImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackDropImgFilter = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background: black;
  opacity: 0.5;
`;

const BackDrop = (props) => {
  return (
    <BackDropContainer>
      <BackDropImg src={props.src}></BackDropImg>
      <BackDropImgFilter></BackDropImgFilter>
      <LoginForm />
    </BackDropContainer>
  );
};

export default BackDrop;
