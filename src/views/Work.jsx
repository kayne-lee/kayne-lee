import React from "react";
import Container from "../components/Container";
import QMIND from "../assets/work/QMIND.png";
import QUANTT from "../assets/work/QUANTT.png";
import QWEB from "../assets/work/QWEB.png";
import ICONS from "../assets/work/ICONS.png"

function Work() {
  return (
    <Container>
        <div id="work" className="work-title">
          <h1>Extra-Curriculars</h1>
        </div>
      <div  className="work-container">
        <div class="myCard1">
          <div class="innerCard">
            <div class="frontSide">
              <img className="invert" src={QMIND} alt="QMIND" />
              <p>Web Development Coordinator</p>
            </div>
            <div class="backSide">
              <p class="title">Web coordinators will help orchestrate, design and develop the existing QMIND.ca website into a professional and reputable brand that will showcase the talent of the QMIND community.</p>
              
            </div>
          </div>
        </div>
        <div class="myCard2">
          <div class="innerCard">
            <div class="frontSide">
              <img src={QUANTT} alt="QUANTT" />
              <p>Algorthimic Trading Developer</p>
            </div>
            <div class="backSide">
              <p class="title">Creating a trading Algorithm from scratch with a strategy of our choosing and test it against real-world stock market.</p>
            </div>
          </div>
        </div>
        <div class="myCard3">
          <div class="innerCard">
            <div class="frontSide">
              <img src={QWEB} alt="QWEB" />
              <p>Development Director</p>
            </div>
            <div class="backSide">
              <p class="title">Being the primary helping hand for the development executive. Which includes responsibilities such as helping make edits to the QWeb official website and help the Development Executive with all stages of the development sprint.</p>
            </div>
          </div>
        </div>
        <div class="myCard4">
          <div class="innerCard">
            <div class="frontSide">
              <img src={ICONS} alt="ICONS" />
              <p>iCon</p>
            </div>
            <div class="backSide">
              <p class="title">The iCons operate after ILC administration hours to keep the facility open to students promote a positive studying and learning atmosphere, and to act as a resource to undergraduate students.</p>
            </div>
          </div>
        </div>
      </div>
</Container>
  )
}

export default Work;
