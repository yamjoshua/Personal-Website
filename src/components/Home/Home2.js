import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/headshot2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Welcome to my portfolio page!
              <br />
              <br />
              This multi-page web app was created using a React frontend and Node/Express backend. It serves responsive views and is currently hosted on Netlify.
              <br />
              <br />Put in front of a computer at an early age, 
              I developed a deep curiosity and yearning to learn and to create software.
              In fact, some of my earliest memories include sneaking into my Dad's office, placing a thick stack of books atop the office chair, and silently
              rummaging through a stack of floppy disks to play games such as <i> Charlie the Duck (2001) </i>
              and <i> Spider-Man (2000)</i>. Not only was I deeply immersed in the worlds of those games, but also learning fundamental computer skills. 
              This early interest extends to today, where I am consistently looking to learn new technologies
              and to improve my programming skill set.
              <br />
              <br />
              I am most comfortable with 
              <i>
                <b className="purple"> Python, C++,  </b>
              </i>
              and
              <i>
                <b className="purple"> Javascript </b>
              </i>
              - with technologies such as 
              <i>
                <b className="purple"> Django, Flask, React, Node, Bootstrap, </b>
              </i>
              and
              <i>
                <b className="purple"> Spring </b>
              </i>
              <br />
              <br />
              Outside of programming, I am also an avid  
              <i>
                <b className="purple"> Music </b>
              </i>
              and 
              <i>
                <b className="purple"> Photography </b>
              </i>
              enthusiast.
              <br /> 
              Check out my <a href = "/photoGallery">Gallery</a> page for a little snapshot
              of what I've taken!
            </p>
          </Col>
          <Col md={4} style={{paddingLeft: 80 }} className="myAvtar">
            <Tilt gyroscope={true} tiltMaxAngleX={20} tiltMaxAngleY={20}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto: jy2223@nyu.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/yamjoshua"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joshua-yam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yammyjam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
