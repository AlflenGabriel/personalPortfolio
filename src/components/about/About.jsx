import React from "react";
import "./about.css";
import Lottie from "react-lottie";
import animationData from "./animation.json";
import { FaAward } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-animation">
            <Lottie options={defaultOptions} />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2024 - Bachelor of Computer Science</small>
            </article>

            <article className="about__card">
              <CgWebsite className="about__icon" />
              <h5>Front-end development</h5>
              <small>
                Responsive websites built for an optimal user experience that
                achieves your business goals
              </small>
            </article>

            <article className="about__card">
              <ImMobile className="about__icon" />
              <h5>Mobile Friendly</h5>
              <small>
                A responsive design makes your website acessible to all users,
                regardless of their device
              </small>
            </article>
          </div>
          <p>
            Front-End Developer with experience in create and maintain a better
            code base for reusability. Capable of continuous learning from
            senior developers facilitating projects from concept to launch.
            passionate about learning and development. Eager to tackle more
            complex problems and continue to find ways to maximize efficiency.
          </p>
          <p>
            (PT-BR) Desenvolvedor Front-End com experiência em criar e manter
            uma base de código para reusabilidade. Capaz de aprender
            continuamente com senior developers, facilitando projetos desde o
            conceito até o lançamento. apaixonado por aprendizado e
            desenvolvimento. Ansioso para resolver problemas avançados e
            continuar a encontrar maneiras de maximizar a eficiência.
          </p>

          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
