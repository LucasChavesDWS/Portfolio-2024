import React from 'react';
import './about.css';
import Aboutt from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox'
import flag1 from '../../assets/united-states.png';
import flag2 from '../../assets/spain.png';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre Mi</h2>

      <div className="about__container grid">
        <img src={Aboutt} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi! Im Lucas, a young programmer who has been working in the development of
              technologies in general for the last 4 years. I have worked with
              clients and colleagues from different areas, professions, and
              nationalities. <br/><br/>  I am an aspiring full-stack programmer, eager to
              work on it until I achieve it. I learn quickly, I am autonomous, and
              always enthusiastic about learning more and collaborating with
              people to achieve our goals and grow as a professional<br/><br/>You can download my resume and take a look.
            </p>
            <a style={{marginRight:12+'px'}} href="https://drive.google.com/file/d/1YZCu-3hjn1rNWLm1cu5zrH7ebUDcIvjg/view?usp=sharing" target="_blank" className="btn" rel="noreferrer">
              Resume EN <img src={flag1} width="15px" ></img>
            </a>
            <a href="https://drive.google.com/file/d/1YZCu-3hjn1rNWLm1cu5zrH7ebUDcIvjg/view?usp=sharing" target="_blank" className="btn" rel="noreferrer">
              Resume ES  <img src={flag2} width={"15px"}></img>
            </a>
          </div>
          {/* <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage item1"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage item2"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number ">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage item3"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About