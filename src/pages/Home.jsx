import React from "react";

function Home() {
  return (
    <div className="container">
      <main>
        <section className="first_section">
          <img
            className="main_image"
            src="/image/tino.jpeg"
            alt="Albertino Cotripa"
            title="image of portfolio"
          />

          <h1>Full Stack Developer</h1>

          <p>
            Welcome to my portfolio! I am Albertino Cotripa, a Full Stack
            Developer passionate about creating innovative and efficient
            solutions.
          </p>
          <a className="project" href="#projects">
            My Projects
          </a>
          <a className="contact" href="#contact">
            Contact Me
          </a>
        </section>
        <section className="second_section">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React, Node.js, Express</li>
            <li>HTML/CSS</li>
            <li> database/PostgreSQL</li>
          </ul>
        </section>
        <section className="third_section" id="projects">
          <h2>My Projects</h2>
          <p>
            This portfolio is a collection of projects developed to consolidate
            my <strong>Fullstack Development</strong> skills. These are
            technical demonstrations (Proof of Concept) created as part of my
            learning journey, of the Web
            <strong> Development Bootcamp taught</strong> by{" "}
            <strong>Dr. Angela Yu</strong>. While these pages are not live
            functional services, they showcase my ability to work with:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Frontend:</li>HTML CSS (Modules) React.js
            </ul>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Backend:</li>
              Node.js, Express, and PostgreSQL.
            </ul>
          </p>
          <div className="image_projects">
            <div className="loja">
              <p className="paragroI">
                Click here <a href="/loja"> Prime Flavor</a>to visit the project
                repository
              </p>
            </div>

            <div className="embaixada">
              <p className="paragroI">
                Click here <a href="/Embaixada"> Embaixada</a>to visit the
                project repository
              </p>
            </div>
          </div>
        </section>
        <section className="fourth_section" id="contact">
          <address>
            <h2>Contact</h2>
            <p>
              <a className="email" href="mailto:tinocotripa@gmail.com">
                <i className="fas fa-envelope"></i> tinocotripa@gmail.com
              </a>
            </p>
            <p>
              <a className="phone" href="tel:+48514510659">
                <i className="fas fa-phone"></i> +48 514 510 659
              </a>
            </p>
          </address>
        </section>
      </main>
    </div>
  );
}

export default Home;
