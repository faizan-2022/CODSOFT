import styled from 'styled-components';
import { glaxayFold, lMobile, laptop, mMobile, sMobile, tablet } from "../../responsiveness/responsive";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  ${laptop({paddingTop: "0rem"})}
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  a{
    ${laptop({marginTop:"1rem"})}
    ${tablet({marginTop:"3rem"})}
    ${lMobile({marginTop:"3rem"})}
    ${mMobile({marginTop:"3rem"})}
    ${sMobile({marginTop:"3rem"})}
    ${glaxayFold({marginTop:"3rem"})}
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  ${'' /* ${laptop({marginTop:"1rem"})} */}
  .check-out-my {
    display: block;
    font-size: 0.9rem;
  }
    @media (max-width: 1024px){
      margin-top: 1rem;
    }
    @media (max-width: 768px) {
      display: none;
    }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ${tablet({display:"none"})}
  }
`;
const Profile = styled.div`
  img {
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;

export { Container, Texts, Social, Profile };