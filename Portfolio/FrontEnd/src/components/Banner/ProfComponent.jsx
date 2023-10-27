import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { Container, Texts, Social, Profile } from "./ProfComponentStyles";

const ProfComponent = () => {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1RK9z1PydU8_oIbHkpWOZ3aAENF7WZ6pD/view?usp=drive_link"
    link.download = 'MuhammadFaizanNaeem.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container id="home">
      <Slide direction="left">
        <Profile>
          <img
            loading="lazy"
            width="380"
            height="380"
            src="images/jh.webp"
            alt="Muhammad Faizan"
          />
        </Profile>
      </Slide>
      <Slide direction="right">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Muhammad Faizan Naeem</h1>
          <h3>Professional Full Stack Developer</h3>
          <p>
            From designing and developing user interfaces to server-side
            infrastructure and database management, I am well-versed in every
            aspect of web development
          </p>
          <a
            style={{
              marginTop:"3rem",
              textDecoration: "none",
              color: "white",
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#01be96",
              borderRadius: "5px",
              cursor: "pointer",
              filter: "drop-shadow(0px 10px 10px #01be9551)"
            }}
            href="https://drive.google.com/file/d/1RK9z1PydU8_oIbHkpWOZ3aAENF7WZ6pD/view?usp=drive_link"
            download="MuhammadFaizanNaeem.pdf"
            onClick={downloadResume}
          >
            Download Resume
          </a>
          <Social>
            <p className="check-out-my">Check out my</p>
            <div className="social-icons">
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/muhammadfaizan1919/"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/faizan-2022"
                >
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/muhammad-faizan-naeem-341186237/"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
    </Container>
  );
};

export default ProfComponent;
