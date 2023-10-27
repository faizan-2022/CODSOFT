import React from "react";
import { styled } from "styled-components";
import { CafeList } from "../data";

const Container = styled.div`
  height: 70vh;
  width: 98.75vw;
  ${"" /* margin-top: 30px; */}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Wrapper = styled.div`
  flex: 0 0 325px;
  height: 40vh;
  margin: 30px;
  border: none;
  cursor: pointer;
  ${"" /* border-radius: 25px; */}
  ${"" /* box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3); */}
  &:hover{
    transform: translate(0%, -10%);
    transition: all 0.4s linear;
    ${'' /* transition-timing-function: ease-in-out; */}
  }
`;

const Image = styled.img`
  border-radius: 25px;
  max-width: 100%;
  width: 40vw;
  height: 30vh;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url("/images/first.jpg") no-repeat center center/cover;
  }
`;

const Body = styled.div`
  padding: 0 20px 20px;
`;

const Title = styled.h3`
    height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  ${"" /* font-weight: bold; */}
  font-size: 1.8rem;
  &:hover{
    ${'' /* color: rgb(240, 240, 240);
    cursor: pointer;
    background-color: #717744;
    padding: 10px;
    font-weight: 600;
    transition: all 0.3s linear;
    border-radius: 25px; */}
  }
`;

const CafesList = () => {
  return (
    <>
      <Container>
        {CafeList.map((curElem) => {
          return (
            <Wrapper key={curElem.id}>
              <Image src={curElem.img} />
              <Body>
                <Title>{curElem.title}</Title>
              </Body>
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};

export default CafesList;
