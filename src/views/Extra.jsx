import React, { useState } from "react";
import { EXTRA } from "../data/extra";
import Container from "../components/Container";

function Extra() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const club = EXTRA[currentIndex];

  const prevClub = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextClub = () => {
    if (currentIndex < EXTRA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <div className="extra" id="extra">
        <h1 className="flex flex-start">Extra-Curriculars</h1>
        <div className="extra-content">
          <div className="extra-buttonn">
            <button onClick={prevClub} disabled={currentIndex === 0} className="extra-button ">&larr;</button>
          </div>
          <div className="extra-card">
            <div className="flex flex-col justify-center align-center">
              <img src={club.image} alt={club.name} className="extra-image"/>
              <h2 className="extra-text font-bold flex justify-center align-center">{club.name}</h2>
            </div>
            <div className="flex justify-center align-center extra-high">
              <p className="extra-text">{club.highlights}</p>
            </div>
          </div>
          <div className="extra-buttonn flex flex-col justify-center align-center">
            <button onClick={nextClub} disabled={currentIndex === EXTRA.length - 1} className="extra-button ">&rarr;</button>
          </div>
        </div>
        <div className="flex justify-center align-center">
              {EXTRA.map((_, index) => (
                <span key={index} style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? 'black' : 'gray',
                  margin: '5px',
                  cursor: 'pointer'
                }} onClick={() => goToIndex(index)} />
              ))}
            </div>
      </div>
    </Container>
  );
}

export default Extra;