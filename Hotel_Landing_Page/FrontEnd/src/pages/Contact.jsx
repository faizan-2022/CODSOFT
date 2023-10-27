import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { lMobile, laptop, mMobile, sMobile, tablet } from "../responsive";

const UpperContainer = styled.div`
  width: 100%;
  height: 65vh;
  background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url("/images/8.jpg") no-repeat center center/cover;
  margin-bottom: 1rem;
  ${tablet({height: "50vh",marginBottom: "2rem"})}
  ${lMobile({height: "40vh"})}
  ${mMobile({height: "35vh"})}
  ${'' /* ${sMobile({height: "30vh"})} */}
`;

const LowerContainer = styled.div`
  height: 75vh;
  width: 100% ;
  ${'' /* // padding: 0rem 1rem; */}
  display: flex;
  ${"" /* justify-content: center; */}
  align-items: center;
  margin-bottom: 1rem;
  ${tablet({marginBottom: "2rem", height: "55vh"})}
`;

const Wrapper = styled.div`
  display: flex;
  ${"" /* // align-items: center; */}
  justify-content: space-between;
  width: 100%;
  height: 65vh;
  ${tablet({justifyContent: "center", height: "55vh"})}
`;

const Left = styled.div`
  background-color: rgb(240, 240, 240);
  border-radius: 2.5rem;
  height: 65vh;
  width: 60%;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${tablet({ height: "55vh", width: "100%", textAlign: "center" })}
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 2.5rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
const LoginForm = styled.form`
  ${'' /* margin-left: 20rem; */}
  ${'' /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */}
  color: black;
`;
const Inputs = styled.input`
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  width: 100%;
  ${tablet({width: "100%"})}
`;

const TextArea = styled.textarea`
  ${'' /* // height: 75px; */}
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem 1rem;
  resize: none;
  ${tablet({width: "100%"})}
`;

const Label = styled.label`
  display: flex;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  ${'' /* ${tablet({marginLeft: "4rem"})} */}
`;

const Special = styled.p`
  color: red;
  margin-left: .5rem;
  font-size: 1.5rem;
`;

// const Link = styled.span`
//   font-size: 12px;
//   margin-bottom: 5px;
//   padding: 0px 10px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const Button = styled.button`
  width: 70%;
  margin-bottom: 2rem;
  margin: auto;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
  color: white;
  cursor: pointer;
  border: none;
  background-color: #373d20;
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /* margin-left: 5px; */}
  ${tablet({width: "60%"})}
  &:hover {
    background-color: #717744;
    transition: all 0.3s linear;
  }
`;

const Right = styled.div`
  height: 40vh;
  width: 35%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  ${"" /* font-weight: 600; */}
  padding: 0rem 3rem;
  background-color: #373d20;
  border-radius: 2.5rem;
  color: white;
  ${laptop({height: "30vh"})}
  ${tablet({display: "none"})}
  &:hover {
    background-color: #717744;
    transition: all 0.3s linear;
    color: rgb(240, 240, 240);
  }
`;

const Contact = () => {
  return (
    <>
      <UpperContainer>
        <Navbar />
      </UpperContainer>

      <LowerContainer>
        <Wrapper>
          <Left>
            <Title>Contact Us</Title>
            <LoginForm>
              <Label for="Name">
                Name<Special>*</Special>
              </Label>
              <Inputs
                type="text"
                id="Name"
                name="Name"
                placeholder="name"
                maxlength="25"
              />

              <Label for="Email">
                E-mail<Special>*</Special>
              </Label>
              <Inputs
                type="email"
                id="Email"
                name="Email"
                placeholder="email"
                maxlength="25"
              />

              <Label>
                Message<Special>*</Special>
              </Label>
              <TextArea
                name="freeform"
                placeholder="max length 150"
                id="freeform"
                cols="30"
                rows="5"
                maxlength="150"
              ></TextArea>

              <Button>Submit</Button>
            </LoginForm>
          </Left>

          <Right>
            We greatly appreciate your feedback and suggestions for improving
            our university cafe web app. If you have any comments, ideas, or
            experiences to share, please email us by filling this form. Your
            input helps us enhance our services and better cater to your needs.
            <br /> <br /> For general inquiries or information about our web app
            and its functionalities, please contact us via email or phone:
            <br /> <br />
            Email: info@universitycafewebapp.com <br /> Phone: +92 123 456789
          </Right>
        </Wrapper>
      </LowerContainer>
      <Footer />
    </>
  );
};

export default Contact;
