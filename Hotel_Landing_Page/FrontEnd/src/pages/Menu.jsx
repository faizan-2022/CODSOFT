import React, { useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MenuList, PanelItems} from "../data";
import { laptop, onlyForMenuPage, tablet } from "../responsive";

const UpperContainer = styled.div`
  width: 100%;
  height: 25vh;
  background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url("/images/fourth.jpg") no-repeat center center/cover;
`;

const MiddleContainerB = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; /* Adjust alignment as needed */
  overflow-x: auto;
  white-space: nowrap;
  ${onlyForMenuPage({justifyContent: "flex-start"})}
`;

const SelectionPanel = styled.button`
  margin: 1.5rem;
  ${'' /* width: 100%; */}
  ${"" /* flex: 1; */}
  border: .2rem solid #373d20;
  padding: 1rem 2rem;
  border-radius: 2.5rem;
  background-color: #373d20;
  color: white;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: bold;
  ${"" /* margin-left: 5px; */}
  &:hover {
    border: .2rem solid #717744;
    background-color: #717744;
    transition: all 0.3s linear;
  }
`;

const Heading = styled.h1`
  background: #373d20;
  font-size: 2.5rem;
  color: white;
  padding: 1rem 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LowerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  flex: 0 0 30rem;
  ${'' /* height: 46vh; */}
  margin: 3rem;
  border: none;
  cursor: pointer;
  border: .1rem solid #ccc;
  border-radius: 2.5rem;
  box-shadow: .2rem .2rem .6rem 0rem rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  border-radius: 2.5rem 2.5rem 0 0;
  ${'' /* max-height: 100%; */}
  width: 100%;
  height: 100%;
  ${'' /* height: 28vh; */}
  cursor: pointer;
`;

const Body = styled.div`
  padding: 0 2rem 2rem;
`;

const Title = styled.h3`
  font-size:1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: bold;
`;

const Button = styled.button`
  ${'' /* margin-top: 1rem; */}
  background: #373d20;
  border: 0;
  width: 100%;
  color: white;
  padding: 1.5rem;
  cursor: pointer;
  border-radius: 2.5rem;
  font-size: 1.7rem;
  font-weight: bold;
  ${'' /* ${laptop({})} */}
  &:hover {
    background: #717744;
    transition: all 0.3s linear;
  }
`;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(MenuList);
  const [heading, setHeading] = useState(PanelItems[0].heading);

  const handleChange = (category, heading) => {
    if (category === "All Foods") {
      setHeading(heading);
      setSelectedCategory(MenuList);
    } else {
      const updatedItems = MenuList.filter((curElem) => {
        return curElem.category === category;
      });
    setSelectedCategory(updatedItems);
    setHeading(heading);
  }
};

  return (
    <>
      <UpperContainer>
        <Navbar />
      </UpperContainer>

      <MiddleContainerB>
            <SelectionPanel
              onClick={()=> handleChange('All Foods','All Foods')}
            >All</SelectionPanel>
            <SelectionPanel
              onClick={()=> handleChange('Fast Food','Fast Food')}
            >Fast Food</SelectionPanel>
            <SelectionPanel
              onClick={()=> handleChange('Desi Food','Desi Food')}
            >Desi Food</SelectionPanel>
            <SelectionPanel
              onClick={()=> handleChange('Snacks','Snacks')}
            >Snacks</SelectionPanel>
            <SelectionPanel
              onClick={()=> handleChange('Tea & Coffee','Tea & Coffee')}
            >Tea & Coffee</SelectionPanel>
            <SelectionPanel
              onClick={()=> handleChange('Drinks','Drinks')}
            >Drinks</SelectionPanel>
      </MiddleContainerB>
    
        <Heading key={heading.id}>{heading}</Heading>

      <LowerContainer>
        {selectedCategory.map((curElem) => {
          const {id, img, title} = curElem
          return (
            <>
            <Wrapper key={id}>
              <Image src={img}/>
              <Body>
                <Title>{title}</Title>
                <Button>+ Add to table</Button>
              </Body>
            </Wrapper>
      </>
          );
        })}
      </LowerContainer>

      <Footer />
    </>
  );
};

export default Menu;