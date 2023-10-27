import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { llaptop } from "../../responsiveness/responsive";
import { services } from "../../Data/ServicesData";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
      {services.map((curElem)=>{
        const {direction,id,title,Icon,disc} = curElem;
        return(
        <Slide key={id} direction={direction}>
          <Card
          Icon={Icon}
          title={title}
          disc={disc}
          />
        </Slide>
        )
      })
      }
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width:80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  ${llaptop({width: "75%"})}
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
