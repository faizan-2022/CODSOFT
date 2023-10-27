import React from 'react'
import { styled } from 'styled-components';

const Container = styled.div`
  padding: 10px 10px;
  height: 51px;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${'' /* background-color: #51724C; */}
  transition: background-color 0.3s linear;
  background-color: ${props=> props.scrolled ? "#373d20" : "transparent"};
  position: fixed;
  width: 97.2vw;
  height: 12vh;
`;

const Left = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 7px;
`;

const Language = styled.span`
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 600;
  padding: 35px 90px;
  height: 40px;
  color: white;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> <Link href="/" >UOG-CAFE</Link> </Language>
        </Left>
        <Right>Hello</Right>
        </Wrapper>
    </Container>
  )
}

export default Header
