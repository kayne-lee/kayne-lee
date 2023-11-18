import React from "react";
import Container from "../components/Container";
import Profile_Picture from "../assets/Profile_Picture.jpg";
import Technologies from "./Technologies.jsx";
import Tech from "./Tech.jsx";
import { TECH } from "../data/images";
function about() {
  return (
    <div id="about" className="about-container">
      <Container classProp="about">
        <div className="about-title">
          
          <h1>About Me</h1>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <p>Hi I'm Kayne Lee, a second year student at Queen's University pursuing a Computer Engineering Degree. I am a Web Dev Coordinator at QMIND, Development Director at QWeb, and a Algorthmic Trader at QUANTT.</p>
            <p className="pt-10">I am very ambitious on learning new things and looking for new opportunities to grow and learn. I aspire to be a software engineer in the future and can apply my skills in the real world.</p>
          </div>
          <div className="about-image">
            <img src={Profile_Picture} alt="Kayne Lee" />
          </div>
        </div>
        <div className="about-tech pb-[100px] ">
            <div className="pb-[50px] pt-[50px]">
              <p>Frameworks & Languages I have worked with</p>
            </div>
            {/* <Technologies cards={TECH} slideLeft={true} /> */}
            <Tech />

          </div>
      </Container>
    </div>
    
    
  );
}

export default about;
