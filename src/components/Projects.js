import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/travella website Mockup.png";
import projImg2 from "../assets/img/spark food website Mockup.png";
import projImg3 from "../assets/img/portfolio banner Mockup.png";

import logo1 from "../assets/img/federal Logo Mockup.png";
import logo2 from "../assets/img/scoovy Logo Mockup.png";
import logo3 from "../assets/img/solo gun.png";
import logo4 from "../assets/img/hotel porium Mockup.png";
import logo5 from "../assets/img/techypreneur Mockup.png";

import banner1 from "../assets/img/lusty live banner Mockup.png";
import banner2 from "../assets/img/federal banner Mockup.png";
import banner3 from "../assets/img/watch banner Mockup.png";
import banner4 from "../assets/img/gym banner Mockup.png";
import banner5 from "../assets/img/lirix 2.png";
import banner6 from "../assets/img/lirix 1.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "TRAVELLA",
      description: "Travel agency website",
      imgUrl: projImg1,
      link: "https://apoorv15verma.github.io/TRAVELLA/"
    },
    {
      title: "PORTFOLIO",
      description: "Portfolio website",
      imgUrl: projImg3,
      link: "https://apoorv15verma.github.io/portfolio/"
    },
    {
      title: "SPARK FOOD SERVICES",
      description: "Food order website",
      imgUrl: projImg2,
      link: "https://cute-sunburst-a5390f.netlify.app/"
    },

  ];

  const logoProjects = [
    {
      title: "FEDERAL OUTSOURCING",
      description: "Immigration consultancy logo",
      imgUrl: logo1,
      link: "https://www.federaloutsourcing.com/"
    },
    {
      title: "HOTEL PORIUM",
      description: "Hotel logo",
      imgUrl: logo4,
      link: "https://apoorv15verma.github.io/TRAVELLA/"
    },
    {
      title: "SCOOVY",
      description: "Hotel logo",
      imgUrl: logo2,
      link: "https://apoorv15verma.github.io/TRAVELLA/"
    },
    {
      title: "SOLO GUN LOGO",
      description: "Cloth Brand logo",
      imgUrl: logo3,
    },
    {
      title: "TECHYPRENEUR",
      description: "Youtube logo",
      imgUrl: logo5,
    },
  ];

  const bannerProjects = [
    {
      title: "ONE LUSTY LIVES",
      description: "Cloth website",
      imgUrl: banner1,
      link: "https://onelustylive.com/"

    },
    {
      title: "FEDERAL OUTSOURCING",
      description: "Web banner for site" ,
      imgUrl: banner2,
      link: "https://www.federaloutsourcing.com/index.php"
    },
    {
      title: "WATCH BANNER",
      description: "Watch website",
      imgUrl: banner3,
    },
    {
      title: "GYM BANNER",
      description: "Gym banner",
      imgUrl: banner4,
    },
    {
      title: "LIRIX BANNER",
      description: "Advertisment banner",
      imgUrl: banner5,
    },
    {
      title: "LIRIX BANNER",
      description: "Advertisment banner",
      imgUrl: banner6,
    },
  ];

  return (
    <section className="project" id="project">
      
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__" : ""}>
                  <h2>Projects</h2>
                  <p>Click on the project to get the link of website that i worked for.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Front-end Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Logo Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Web-Banner Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slide" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  link={project.link}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            logoProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            bannerProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}

                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
