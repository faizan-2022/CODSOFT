import React from "react";
import { styled } from "styled-components";
import { lMobile, laptop, mMobile, sMobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url("/images/11.jpg") no-repeat center center/cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 3rem;
  background-color: white;
  border-radius: 2.5rem;
  ${laptop({width: "30%"})}
  ${tablet({width: "40%"})}
  ${lMobile({width: "55%"})}
  ${mMobile({width: "65%"})}
  ${sMobile({width: "75%"})}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  display: flex;
  font-size: 1.5rem;
  ${"" /* margin-bottom: 5px; */}
  margin: 2rem 2rem .5rem 0rem;
`;

const Special = styled.p`
  color: red;
  margin-left: .5rem;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  ${'' /* margin: 10px 0px; */}
  padding: 1rem;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background-color: #373d20;
  font-weight: 600;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:hover {
    background-color: #717744;
    transition: all 0.3s linear;
  }
`;

const Link = styled.a`
  margin: .5rem 0rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Link2 = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #717744;
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: .8rem;
`;

const Link3 = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #717744;
  font-weight: 600;
  margin: .5rem 0rem;
  font-size: 1.5rem;
`;

const LogIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Label for="Email">
            E-mail<Special>*</Special>
          </Label>
          <Input placeholder="Enter your email address" />
          <Label for="Email">
            Password<Special>*</Special>
          </Label>
          <Input placeholder="Enter your password" type="password" />
          <Button>LOGIN</Button>
          {/* {user ? <Navigate to="/"/> : <Login/>} */}
          {/* {error && <Error>Something went wrong...</Error>} */}
          <Link3>Forgot Password?</Link3>
          <Link>
            Don't have an account? <Link2 href="/signup">Sign up</Link2>{" "}
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
