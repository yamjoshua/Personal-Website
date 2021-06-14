import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import sodoku from "../../Assets/Projects/Sodoku.png";
import photo from "../../Assets/Projects/photoInsights.png";
import chat from "../../Assets/Projects/chat.png";
import discord from "../../Assets/Projects/discord.png"
import puzzle from "../../Assets/Projects/8puzzle.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is what I have been working on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photo}
              isBlog={false}
              title="PhotoInsights"
              description="Photo application that provides advanced insights into a user's tendencies when taking photos. Made with JHipster, React, and Spring Boot. The application strips the EXIF data off photographs such as FStop, Focal Length, and Shutter Speed and stores the data in a H2 database. The data is then analyzed and shown to the user in a graphical representation using ApexCharts."
              link="https://youtu.be/RZazyAIFuno"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sodoku}
              isBlog={false}
              title="Sodoku Solver"
              description="Using BackTracking, Minimum Remaining Value, Degree Heuristic, and Forward Checking to solve any Sodoku puzzle. Made in part as a project for my Junior year Artificial Intelligence course. It is able to solve any easy, medium, hard, or expert level puzzle from sodoku.com in under one second. It is written in Python and works by reading in a txt file and outputting a txt file with the solved puzzle."
              link="https://github.com/yamjoshua/Sodoku"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="CryptoChat"
              description="A chat application that provides End-to-end encryption for chat messages. Mesages are encrypted with AES-CBC and stored on a MySQL database encrypted. If two users have the same key they will be able to decode each other's messages otherwise the messages will just appear as gibberish. Made with Flask, Pusher API, and hosted on PythonAnywhere for a short duration."
              link="https://github.com/yamjoshua/CryptoChat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Warzone Discord Bot"
              description="A Discord Bot that provides player statistics as well as Daily/Weekly Leaderboards to those in the Discsord Server. Statisitics are retrieved from the official Call of Duty API and stored in a SQLite Database. The Bot is written in Python and ran from my Raspberry Pi. After playing many hours with friends, this was a fun application to create in order to see who truly is the best player 😊"
              link="https://discord.gg/rRNH8hjY2u"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puzzle}
              isBlog={false}
              title="8Puzzle Solver"
              description="Another project for my Junior year Artificial Intelligence course, this program uses the A* search algorithm along with the Manhattan distance heuristic to solve any 8-puzzle. A sliding puzzle is a 3 x 3 grid where the tiles have to be shifted in a certain manner so that they are arranged in increasing order. The program is able to ouput the correct sequence of moves (up, down, left, or right) to solve the puzzle in the least number of moves.  "
              link="https://github.com/yamjoshua/8-Puzzle-Solver-Using-A-Search"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
