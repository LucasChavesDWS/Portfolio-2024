import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">123123</h3>
                <span className="about__subtitle">Proyectos</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">1232</h3>
                <span className="about__subtitle">Logs</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>
            <div>
                <h3 className="about__title">320</h3>
                <span className="about__subtitle">Satisfied clients</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>
            <div>
                <h3 className="about__title">320</h3>
                <span className="about__subtitle">Satisfied clients</span>
            </div>
        </div>



    </div>
  )
}

export default AboutBox