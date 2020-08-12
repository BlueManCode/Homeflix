import React from 'react';
import styled from 'styled-components';

import BackDrop from './component/BackDrop';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Login = () => {
  const src =
    'https://assets.nflxext.com/ffe/siteui/vlv3/ccdffa88-3b61-4129-b22c-c6cd64027d99/262334f4-f011-418a-8f13-ddc66fb90751/IN-en-20200803-popsignuptwoweeks-perspective_alpha_website_large.jpg';

  return (
    <Container>
      <BackDrop src={src}></BackDrop>
    </Container>
  );
};

export default Login;
