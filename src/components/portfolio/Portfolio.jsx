import React from 'react';
import IMG1 from '../../assets/CollegeWorld.png';
import IMG2 from "../../assets/urlShortner.png"


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'College World',
      img: IMG1,
      des:"A Full Stack Web App for College Information.",
      res:"In this a user can fetch college list and could also search with college name , city , state. And also provided Visual Representation of college list according to city for better understanding data. And also created algorithm for fetching similar college which takes location, course and some other factors in consideration.",
      teckStack:" React | Express | MongoDB |  Material UI ",
      link: 'https://college-world.netlify.app/',
      github: 'https://github.com/Parag-Tharani/College-World',
    },
    {
      id: 2,
      title: 'URL Shortner',
      des:"Full Stack URL Shortening app where a user can create short Urls for very long urls.",
      img: IMG2,
      res:"Here a user can create short URLs for long URLs once they are logged in and could also see number of clicks and cities from where the user clicked as stats for their URls. At home page there are all the global URLs posted within 48hrs after that Urls are automatically deleted from Database.",
      teckStack:" React | Express | Mongo DB | Material UI",
      link: 'https://url-shortening-web-app.netlify.app/',
      github: 'https://github.com/Parag-Tharani/Url-Shortner',
    }
    
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <h3 className='portfolio__title'>{pro.title}</h3>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          
            <p>{pro.des}</p>
            <br/>
            <p>{pro.res}</p>
            <br/>
            <p>{pro.teckStack}</p>
          
          <div className="portfolio__item-cta">
            <a href={pro.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
            <a href={pro.link} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
          
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio