import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Technologies({ cards, slideLeft }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const cardsContainer = document.getElementById("cards-container");
    const cardsWidth = (cardsContainer?.clientWidth*4);
    setPosition(cardsWidth);
  }, []);

  return (
    <div className="about-slider">
      <div
        id="cards-container"
        className="relative" // Add overflow: hidden
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: slideLeft ? -position : position }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`max-w-100% flex about-imagegap absolute ${slideLeft ? "" : "right-0"}`}
        >
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col justify-center">
              <div className="textImage flex items-center  w-[80%]">
                <img src={card.image} alt="" className=" !w-[auto] !max-w-none " />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div id="" className="absolute right-0 w-0 h-0"></div>
    </div>
  );
}

export default Technologies;

