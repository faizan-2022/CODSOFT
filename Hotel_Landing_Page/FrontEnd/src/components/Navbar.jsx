import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { MdTableRestaurant, MdMenu, MdClose } from "react-icons/md";
import { lMobile, mobile, tablet } from '../responsive';

const Container = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  margin-bottom: 4rem;
  
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu > li {
    margin: 0 1rem;
    overflow: hidden;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem; /* Add padding to create spacing around the menu button */
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: .8rem;
    width: 4rem;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: .2rem;
  }

  .menu-button::before {
    content: '';
    margin-top: -1.2rem;
  }

  .menu-button::after {
    content: '';
    margin-top: 1.2rem;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0rem;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0rem;
    transform: rotate(-405deg);
  }

@media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 12rem;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      ${'' /* border: 1px solid #717744; */}
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      ${'' /* border: 1px solid #717744; */}
    }
    #menu-toggle:checked ~ .menu li {
      background-color: ;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 8vh;
      ${'' /* padding: 0.5em; */}
      text-align: center;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu > li {
      display: flex;
      justify-content: center;
      margin: 0;
      width: 100%;
      ${'' /* padding: 1.5rem; */}
      color: white;
      ${'' /* border: 1px solid #717744; */}
      background-color: #373d20;
    }
  }
`;

const Wrapper = styled.div`
  height: 12vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s linear;
  background-color: ${props=> props.scrolled ? "#373d20" : "transparent"};
  position: fixed;
  ${'' /* ${mobile({height: "8vh"})} */}
`;

const Left = styled.div`
  ${'' /* flex: 1; */}
  font-size: 2rem;
  font-weight: bold;
  ${'' /* height: 4rem; */}
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 7rem;
  ${'' /* ${mobile({fontSize:"10px", padding:"17px 0px"})} */}
`;

const Language = styled.span`
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 3.5rem 9rem;
  ${'' /* height: 4rem; */}
  color: white;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0%;
  &:hover {
  }
`;

const ListItems = styled.li`
  display: flex;
  text-decoration: none;
  padding: 0rem 2rem;
  overflow: hidden;
  ${'' /* ${lMobile({backgroundColor: "none", padding: "0rem"})} */}
  &:hover {
    color: rgb(240, 240, 240);
    cursor: pointer;
    background-color: #717744;
    padding: 1.5rem 2rem;
    font-weight: 600;
    transition: all 0.3s linear;
    border-radius: 2.5rem;
  }
`;

// const Link = styled.span`
//   text-decoration: none;
//   color: white;
// `

const RegistrationButtons = styled.button`
  ${'' /* margin-right: 20px; */}
  margin-left: 1rem;
  padding: 1.5rem;
  color: white;
  font-size: 1.8rem;
  border-radius: 2.5rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: #717744;
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /* margin-left: 5px; */}
  ${lMobile({fontSize: "2.5rem"})}
  &:hover {
    background-color: #6d6d4a;
    ${'' /* color: rgb(240, 240, 240); */}
    transition: all 0.3s linear;
  }
`;

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    useEffect(() => {
      window.addEventListener('scroll', changeNavbarColor);
      return () => {
        window.removeEventListener('scroll', changeNavbarColor);
      };
    }, []);

  return (
    <Container>
      <Wrapper scrolled={colorChange}>
        {/* <Left>
          <Language><Link style={{textDecoration: "none", color: "white"}} to="/" >Uni-CAFE</Link> </Language>
        </Left> */}
        <Left>
          <Language><Link style={{textDecoration: "none", color: "white"}} to="/" >St Regis Hotels</Link> </Language>
        </Left>

        <Right>
          <List>
             <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu">
            {/* <ListItems> <Link href="/" >Home</Link> </ListItems> */}
            <li> <ListItems> <Link style={{textDecoration: "none", color: "white"}} to="/menu">Menu</Link> </ListItems> </li>

            {/* <ListItems> <Link style={{textDecoration: "none", color: "white"}} to="/availability">Seat Availability</Link> </ListItems> */}
            <li><ListItems> <Link style={{textDecoration: "none", color: "white"}} to="/about" >About</Link> </ListItems></li>

            <li><ListItems> <Link style={{textDecoration: "none", color: "white"}} to="/contact" >Contact</Link> </ListItems></li>

            <li><ListItems> <Link style={{textDecoration: "none", color: "white"}} to="/table" title="My table" > <MdTableRestaurant style={{fontSize: "2.5rem"}}/> </Link> </ListItems> </li>

             <li><RegistrationButtons> <Link style={{textDecoration: "none", color: "white"}} to="/login"> Log in </Link> </RegistrationButtons> </li>

             <li><RegistrationButtons> <Link style={{textDecoration: "none", color: "white"}} to="/signup"> Sign up </Link> </RegistrationButtons></li>
          </ul>
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
