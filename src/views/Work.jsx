import React from "react";
import Container from "../components/Container";
import QMIND from "../assets/work/QMIND.png";
import QUANTT from "../assets/work/QUANTT.png";
import QWEB from "../assets/work/QWEB.png";
import ICONS from "../assets/work/ICONS.png"
import DEBACLE from "../assets/work/Debacle.png";

function Work() {
  return (
    <Container>
        <div id="work" className="work-title pb-[100px]">
          <h1>Work</h1>
        </div>
      <div  className="work-container">
      {/* <div class="myCard1">
          <div class="innerCard">
            <div class="frontSide">
              <img className="" src={DEBACLE} alt="Debacle" />
              <h1>Machine Learning Intern</h1>
            </div>
            <div class="backSide">
              <p class="title">Worked as a machine learning intern at Debacle inc. Developped a Shopfify plug-in which scanned a store and would return keywords for the user.</p>
            </div>
          </div>
      </div>
      <div class="myCard2">
          <div class="innerCard">
            <div class="frontSide">
              <img className="invert" src={QMIND} alt="QMIND" />
              <h1>Web Development Coordinator</h1>
            </div>
            <div class="backSide">
              <p class="title">Web coordinators will help orchestrate, design and develop the existing QMIND.ca website into a professional and reputable brand that will showcase the talent of the QMIND community.</p>
            </div>
          </div>
        </div>
        <div class="myCard3">
          <div class="innerCard">
            <div class="frontSide">
              <img src={QUANTT} alt="QUANTT" />
              <h1>Algorthimic Trading Developer</h1>
            </div>
            <div class="backSide">
              <p class="title">Creating a trading Algorithm from scratch with a strategy of our choosing and test it against real-world stock market.</p>
            </div>
          </div>
        </div>
        <div class="myCard4">
          <div class="innerCard">
            <div class="frontSide">
              <img src={QWEB} alt="QWEB" />
              <h1>Development Director</h1>
            </div>
            <div class="backSide">
              <p class="title">Being the primary helping hand for the development executive. Which includes responsibilities such as helping make edits to the QWeb official website and help the Development Executive with all stages of the development sprint.</p>
            </div>
          </div>
        </div>
        <div class="myCard5">
          <div class="innerCard">
            <div class="frontSide">
              <img src={ICONS} alt="ICONS" />
              <h1>iCon</h1>
            </div>
            <div class="backSide">
              <p class="title">The iCons operate after ILC administration hours to keep the facility open to students promote a positive studying and learning atmosphere, and to act as a resource to undergraduate students.</p>
            </div>
          </div>
        </div> */}
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
              <img className="invert" src={QMIND} alt="" />
            </div>
            <div class="upper-part-back">Web coordinators will help orchestrate, design and develop the existing QMIND.ca website into a professional and reputable brand that will showcase the talent of the QMIND community.</div>
          </div>
          <div class="lower-part">
            <div class="lower-part-face">Web Development Coordinator</div>
            <div class="lower-part-back">April 2023 - Present</div>
          </div>
        </div>
        <div class="card1">
          <div class="upper-part">
            <div class="upper-part-face">
              <img src={QUANTT} alt="" />
            </div>
            <div class="upper-part-back">Creating a machine learning trading Algorithm from scratch with a strategy of our choosing and test it against real-world stock market.</div>
          </div>
          <div class="lower-part">
            <div class="lower-part-face">ML Algorithmic Trader</div>
            <div class="lower-part-back">September 2023 - Present</div>
          </div>
        </div>
        <div class="card1">
          <div class="upper-part">
            <div class="upper-part-face">
              <img src={QWEB} alt="" />
            </div>
            <div class="upper-part-back">Being the primary helping hand for the development executive. Which includes responsibilities such as helping make edits to the QWeb official website and help the Development Executive with all stages of the development sprint.</div>
          </div>
          <div class="lower-part">
            <div class="lower-part-face">Development Director</div>
            <div class="lower-part-back">September 2023 - Present</div>
          </div>
        </div>
        <div class="card1">
          <div class="upper-part">
            <div class="upper-part-face">
              <img src={ICONS} alt="" />
            </div>
            <div class="upper-part-back">The iCons operate after ILC administration hours to keep the facility open to students promote a positive studying and learning atmosphere, and to act as a resource to undergraduate students.</div>
          </div>
          <div class="lower-part">
            <div class="lower-part-face">iCon</div>
            <div class="lower-part-back">April 2023 - Present</div>
          </div>
        </div>
      </div>

</Container>
  )
}

export default Work;
