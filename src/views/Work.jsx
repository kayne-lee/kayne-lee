import React from "react";
import Container from "../components/Container";
import DEBACLE from "../assets/work/Debacle.png";
import SMITH from "../assets/work/SMITH.png";
import DENSO from "../assets/work/DENSO.png";


function Work() {

  return (
    <Container>
        <div id="work" className="work-title pb-[100px]">
          <h1>Work</h1>
        </div>
      <div  className="work-container">
          <div class="card1">
          <div class="upper-part">
            <div class="upper-part-face">
                <img src={SMITH} alt="" />
            </div>
            <div class="upper-part-back">Facilitated student comprehension of coding concepts through tailored support and collaborated with instructors to develop engaging learning materials and assessments, contributing to the education of students.</div>
          </div>
          <div class="lower-part">
            <div class="lower-part-face">Teaching Assistant (APSC 142) </div>
            <div class="lower-part-back">January 2023 - Present</div>
          </div>
        </div>
        <div class="card1">
          <div class="upper-part">
            <div class="upper-part-face">
              <div className="small">
                <img src={DEBACLE} alt="" />
              </div>
              
            </div>
            <div class="upper-part-back">Worked as a machine learning engineer intern at Debacle inc. Developped a machine learning algorithm and trained it on Shopify stores, which could take different stores as input and produce keywords for the store.</div>
          </div>
          <div class="lower-part">
            <div class="lower-part-face">Machine Learning Engineer Intern</div>
            <div class="lower-part-back">Decemeber 2023 - Present</div>
          </div>
        </div>
        <div class="card1">
          <div class="upper-part">
            <div class="upper-part-face">
              <div className="small">
                <img src={DENSO} alt="" />
              </div>
              
            </div>
            <div class="upper-part-back">Manufactured and developed HVAC and ECM Units for different companies such as Ford, Toyota, Lexus,
and Honda. Conducted N2
and NVH tests to ensure quality of each individual unit.</div>
          </div>
          <div class="lower-part">
            <div class="lower-part-face">Summer Student Associate</div>
            <div class="lower-part-back">May 2023 - September 2023</div>
          </div>
        </div>
      </div>

</Container>
  )
}

export default Work;
