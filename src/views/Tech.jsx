import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import C from "../assets/tech/C.png";
import CSS from "../assets/tech/css.png";
import HTML from "../assets/tech/html.png";
import JS from "../assets/tech/js.png";
import NEXT from "../assets/tech/next.png";
import NODE from "../assets/tech/node.png";
import PYTHON from "../assets/tech/python.png";
import REACT from "../assets/tech/react.png";
import FIGMA from "../assets/tech/Figma.png";
import GIT from "../assets/tech/Git.png";
import JUPYTER from "../assets/tech/Jupyter.png";

import TS from "../assets/tech/Typescript.png";

const images = [C, NODE]
const images1 = [PYTHON, HTML]
const images2 = [NEXT, CSS]
const images3 = [REACT, GIT]
const images4 = [JS, FIGMA]
const images5 = [TS, JUPYTER]

function Tech() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
const [isVisible, setIsVisible] = useState(true);
useEffect(() => {
    const timeoutId = setTimeout(() => {
        if (!isHovered) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true);
      }, 1000); 
    }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, isHovered]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };
  return (
    <motion.div
        className="tech"
        whileHover={{ scale: 1.05 }}
        transition={{duration: 1, ease: "easeInOut" }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
    >
        <AnimatePresence >
            {isVisible && (
                <motion.div
                    key={currentIndex}
                    className={`flex justify-center items-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ scale: 1.5 }}
                >
                    <img className="tech-image"src={images[currentIndex]} alt="" />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence >
            {isVisible && (
                <motion.div
                    key={currentIndex}
                    className={`flex justify-center items-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ scale: 1.5 }}
                >
                    <img className="tech-image" src={images1[currentIndex]} alt="tech" />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence >
            {isVisible && (
                <motion.div
                    key={currentIndex}
                    className={`flex justify-center items-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ scale: 1.5 }}
                >
                    <img className="tech-image" src={images2[currentIndex]} alt="tech" />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence >
            {isVisible && (
                <motion.div
                    key={currentIndex}
                    className={`flex justify-center items-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ scale: 1.5 }}
                >
                    <img className="tech-image" src={images3[currentIndex]} alt="tech" />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence >
            {isVisible && (
                <motion.div
                    key={currentIndex}
                    className={`flex justify-center items-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ scale: 1.5 }}
                >
                    <img className="tech-image" src={images4[currentIndex]} alt="tech" />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence >
            {isVisible && (
                <motion.div
                    key={currentIndex}
                    className={`flex justify-center items-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ scale: 1.5 }}
                >
                    <img className="tech-image" src={images5[currentIndex]} alt="tech" />
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
    
  );
}

export default Tech;