import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const Form = styled.form`
  width: 450px;
  height: 660px;
  background: rgb(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const FormContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 70px 0 0 0;
  flex-direction: column;
  width: 70%;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  font-size: 35px;
`;

const Input = styled.input`
  background: rgb(51, 51, 51);
  border: none;
  margin: 20px 0 0 0;
  height: 60px;
  border-radius: 5px;
  color: rgb(108, 104, 99);
  padding-left: 10px;
  font-weight: bold;
  font-size: 15px;
`;

const SubmitBtn = styled.button`
  color: white;
  background: red;
  border: none;
  font-weight: bold;
  font-size: 15px;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0 0 0;
`;

const Error = styled.div`
  width: 88%;
  background: red;
  color: white;
  heigth: 60px;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0 0 0;
  font-weight: bold;
`;

const LoginForm = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  async function HandleSubmit() {
    setIsLoading(true);
    const url = 'http://localhost:5000/auth/login';
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    if (response.status !== 200) {
      seterror(json.message);
    } else {
      localStorage.setItem('token', JSON.stringify(json));
      history.push('/browse');
    }
    setIsLoading(false);
  }
  return (
    <Container>
      <Form onSubmit={HandleSubmit}>
        <FormContainer>
          <Title>Login</Title>
          {isLoading ? (
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <img
                style={{ width: '50%' }}
                src={require('../../../res/loading.svg')}></img>
            </div>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              {error ? <Error>{error}</Error> : null}
              <Input
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                placeholder="Email"
                required></Input>
              <Input
                minlength="8"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                required></Input>
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </div>
          )}
        </FormContainer>
        <div style={{ paddingBottom: '40px' }}>
          WIP Contact your local Aman for access
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
