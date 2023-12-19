import React from "react";
import Container from "../components/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
function Nav({ scrollTo, navOn, toggleNav, isIpad }) {
  const navVariants = {
    hidden: {
      x: "0",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div
        className="nav-toggle"
        onClick={() => {
          toggleNav(true);
        }}
      >
        <AiOutlineMenu />
      </div>

      <AnimatePresence>
        {navOn && (
          <motion.nav
            className="nav-container"
            variants={navVariants}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
          >
            <Container classProp="nav row-sb-c">
              <>
                <div
                  className="nav-close"
                  onClick={() => {
                    toggleNav(false);
                  }}
                >
                  <CgClose />
                </div>
                <div
                  className="nav-logo row-c-c"
                  onClick={() => {
                    scrollTo("landingPage");
                  }}
                >
                  <h1>KL</h1>
                </div>
                <div className="nav-links row-fe-c full-w-h">
                  <button
                    onClick={() => {
                      scrollTo("about");
                    }}
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      scrollTo("work");
                    }}
                  >
                    Work
                  </button>
                  <button
                    onClick={() => {
                      scrollTo("extra");
                    }}
                  >
                    Extra-Curriculars
                  </button>
                  <button
                    onClick={() => {
                      scrollTo("projects");
                    }}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => {
                      scrollTo("contact");
                    }}
                  >
                    Contact
                  </button>
                  <a href="./Resume.pdf" target="_blank">
                    Resume
                  </a>
                </div>
              </>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;