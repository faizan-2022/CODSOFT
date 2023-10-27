import React from "react";
import { styled } from "styled-components";
import { lMobile, laptop, mMobile, sMobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url('/images/12_.jpg')
      no-repeat center center/cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 3rem;
  background-color: white;
  border-radius: 2.5rem;
  ${laptop({width: "40%"})}
  ${tablet({width: "50%"})}
  ${lMobile({width: "65%"})}
  ${mMobile({width: "75%"})}
  ${sMobile({width: "85%"})}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  ${'' /* margin-bottom: 5px; */}
  margin: 2rem 2rem .5rem 0rem;
  font-size: 1.5rem;
`;

const Special = styled.p`
  color: red;
  margin-left: .5rem;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 1rem;
`;

const Input2 = styled.input`
  padding: 1rem;
  margin-right: .5rem;
`;

const Agreement = styled.span`
  font-size: 1.4rem;
  margin: 1rem 0rem;
`;

const Bold = styled.span`
  color: #717744;
  font-weight: 700;
`;

const Link = styled.a`
  ${'' /* margin: 10px 0px; */}
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
      margin-bottom: 1rem;
      ${'' /* margin-bottom: 10px; */}
      &:hover {
    background-color: #717744;
    transition: all 0.3s linear;
  }
`;

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
        <Label for="Name">
                Name<Special>*</Special>
              </Label>
          <Input
            type="text"
            id="Name"
            name="Name"
            placeholder="Enter full name"
            maxlength="25"
          />
          <Label for="Email">
                E-mail<Special>*</Special>
          </Label>
          <Input
            placeholder="Enter your email address"
            type="email"
            id="Email"
            name="Email"
            maxlength="25"
          />
          <Label for="Email">
                Password<Special>*</Special>
          </Label>
          <Input
            placeholder="Create a password"
            type="email"
            id="password"
            name="password"
          />
          <Agreement>
          <Input2 type="checkbox" id="click" name="click"/>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <Bold>PRIVACY POLICY</Bold>
          </Agreement>
          <Button>Sign up</Button>
          <Link>Already have an account?  <Link2 href="/login">Sign in</Link2> </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
