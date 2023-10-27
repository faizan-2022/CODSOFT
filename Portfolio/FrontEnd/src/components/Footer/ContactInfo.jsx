import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FiPhoneCall} from 'react-icons/fi';
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactInfo = () => {
  return (
    <>
     <Slide direction="left" delay={1}>
          <h1>Get In Touch</h1>
        </Slide>
    <div className="address">
      <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>
              Islamia Park Silver Star Road, Street No. 9, Sialkot, Pakistan
            </p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+4733378901">+92 300 6232929</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">mf2028136@gmail.com</a>
            </Slide>
          </div>
    </div>
    </>
  );
};

export default ContactInfo;
