import React from 'react';
import './services.css';
import Image1 from "../../assets/4421959.svg";
import Image2 from "../../assets/2.svg";
import Image3 from "../../assets/3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Software Development",
    description:
      "Custom software development according to the specific needs of a client or company.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Development of the user interface (UI) and user experience (UX) of the website or application, as well as the implementation of back-end logic and functionality.",
  },
  {
    id: 3,
    image: Image3,
    title: "Web Master",
    description:"Support and maintenance of websites and applications. Migration of websites and applications to new platforms or technologies.   Consulting and advice on web and mobile development.",
    description2:"",
    description3:"",
  },
];


const Services = () => {
  return (
    <section className="services container section">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id,image,title,description})=>{
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
      <div className="contact">
        <p className="mb-0">Looking for a custom job? <a href='#contact'>Click here</a> to contact me! 👋</p>
        </div>
    </section>
  )
}

export default Services