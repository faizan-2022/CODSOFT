import React from 'react';
import { Container, Profile, ArrowUp, Form} from './FooterStyles';
import ContactInfo from './ContactInfo';
import SocialProfiles from './SocialProfiles';
import ContactForm from './ContactForm';
import {Fade} from "react-awesome-reveal";
import {
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container id="footer">
      <Profile>
        <ContactInfo/>
        <SocialProfiles/>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
      <ContactForm/>
      </Form>
    </Container>
  );
};

export default Footer;
