import React from "react";
import styled from "styled-components";
import { cardItems } from "../data";

const Container = styled.div`
    ${'' /* height: 150vh; */}
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    flex: 0 0 30.5rem;
    margin: 2.8rem;
    border: .1rem solid #ccc;
    border-radius: 2.5rem;
    box-shadow: .2rem .2rem .6rem 0rem  rgba(0,0,0,0.3);
`;

const Image = styled.img`
  border-radius: 2.5rem;
  max-width: 100%;
  cursor: pointer;
`;

const Body = styled.div`
  padding: 0 2rem 2rem;
`;

const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
`;

const Desc = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-align: center;
    ${'' /* padding: 5px; */}
`;

const Button = styled.button`
    margin-top: 1.5rem;
    background: #373d20;
    border: 0;
    width: 100%;
    color: white;
    padding: 1.5rem;
    cursor: pointer;
    border-radius: 2.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover{
        background: #717744;
        transition: all 0.3s linear;
    }
`;

const Cards = () => {
  return (
    <>
      <Container>
        {cardItems.map((curElem) => {
          return (
            <Wrapper key={curElem.id}>
              <Image src={curElem.img} />
              <Body>
                <Title>{curElem.title}</Title>
                <Desc>{curElem.desc}</Desc>
                <Button>{curElem.button}</Button>
              </Body>
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};

export default Cards;
