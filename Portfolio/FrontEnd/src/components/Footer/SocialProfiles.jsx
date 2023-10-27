import React from 'react';
import { Slide, Zoom} from "react-awesome-reveal";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsFacebook } from "react-icons/bs";


const SocialProfiles = () => {
  return (
    <>
    <div className="profiles">
      <Slide direction="left">
        <h1>Check my profiles</h1>
      </Slide>
      <div className="icons">
      <Zoom>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/muhammadfaizan1919/"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a
                  title="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/faizan-2022"
                >
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/muhammad-faizan-naeem-341186237/"
                >
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/muhammadfaizan174"
                >
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        </>
  );
};

export default SocialProfiles;
