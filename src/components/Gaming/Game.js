import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import GameContent from "./GameContent";


function Gaming() {



  return (
    <Container fluid className="gaming-section">
      <Particle />
      <Container>
        
        <Row className="gaming">
          <Col md={6} className="gaming-left">
            <h3 className="gaming-title">Games</h3>
            <GameContent
              title="Counter-Strike : Global Offensive"
              content={[
                "Faceit Level: 10",
                "ESEA Rank: A",
                "Matchmaking Rank: LE",
                "Collegiate D2 Player for NYU"
              ]}
            />
            <GameContent
              title="Valorant"
              content={[
                "Competitive Rank: Diamond 1",
                "Jett Main"
              ]}
            />
            <GameContent
              title="Apex Legends"
              content={[
                "Ranked Rank: Diamond IV",
                "Wraith or Octane Main"
              ]}
            />
            <GameContent
              title="Call of Duty: Warzone"
              content={[
                "150 wins",
                "16000+ kills",
                "2.56 K/D"
              ]}
            />
      
          </Col>
          <Col md={6} className="gaming-right">
            <h3 className="gaming-title">Setup</h3>
            
            <GameContent
              title="Main PC"
              content={[
                "Motherboard: MSI Z390 Pro Carbon",
                "CPU: Intel 9700k OC 5.0 GHz",
                "RAM: Corsair Ballistix 16 GB",
                "GPU: EVGA GeForce GTX FTW 3080",
                "Cooling: Custom Loop with EK Velocity CPU Block and Corsair HydroX Pump",
                "Audio: GOXLR, SHURE SM7B, and YUMI Kanto Speakers",
                "Camera: Nikon D850",
                "Peripherals: Zowie XL2540 240Hz, Logitech GPro Wireless mouse, and GMMK Keyboard"
              ]}
            />
            <GameContent
              title="Streaming PC"
              content={[
                "Motherboard: ASUS Z170AR",
                "CPU: Intel 6700k",
                "RAM: Corsair Ballistix 16 GB",
                "GPU: Nvdia GeForce GTX 1080 FE",
                "Cooling: NZXT Kraken x62"
              ]}
            />

          </Col>
          <Col style={{paddingTop: "20px" }}>
            <h3 className="gaming-title">Come <span className="purple">Chat </span> With Me! 😊 </h3>
            <iframe title="Discord Widget" src="https://discord.com/widget?id=251150457551060993&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Gaming;