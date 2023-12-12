import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/posrtfolio.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">

              <a href="https://www.linkedin.com/in/apoorv15verma"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/apoorv15verma"><img src={navIcon2} alt="" /></a>
              <a href="https://instagram.com/apoorvverma25?igshid=NGExMmI2YTkyZg=="><img src={navIcon3} alt="" /></a>
            </div>
            <p>Created By <span>Apoorv</span> </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
