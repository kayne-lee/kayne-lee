import React from "react";
import Container from "../components/Container";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <Container>
        <div className="contact">
          <h1>Contact Me</h1>
          <div className="flex flex row gap-[20px] justify-center text-[30px]">
            <h2>📞 519 - 386 - 3298</h2>
            <h2>|</h2>
            <h2>✉️ kayne.lee2@outlook.com</h2>
          </div>
          <p>
            I'm currently looking for opportuntities to expand my knowledge and skills in front-end development, full-stack develpment, and finance. 
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
