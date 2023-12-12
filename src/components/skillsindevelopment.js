import javascript from "../assets/img/javascript.png";
import java from "../assets/img/java img.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import react from "../assets/img/react.png";

import photoshop  from "../assets/img/photoshop.png";
import illustraitor from "../assets/img/illustrator.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/skill banner bg - Copy.png"

export const Skillsindevelopment = () => {



  





  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills in Web development</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={css} alt="Image" />
                                <h5>Css</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>
                                  React.js
                                </h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                           
                           
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>
                                  html
                                </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>


        <div className="container" style={{marginTop:"100px"}}>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Software used in graphic Design</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={photoshop} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={illustraitor} alt="Image" />
                                <h5>Illustraitor</h5>
                            </div>
                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
