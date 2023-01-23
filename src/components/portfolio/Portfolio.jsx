import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMGX from '../../assets/portfolioX.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Personal Portfolio',
    github: 'https://github.com/AlflenGabriel/personalPortfolio',
    demo: '/',
    active: true
  },
  {
    id: 2,
    image: IMG2,
    title: 'React Redo/Undo Challenge',
    github: 'https://github.com/AlflenGabriel/react-challenge-01',
    demo: '/',
    active: false
  },
  {
    id: 3,
    image: IMGX,
    title: 'Coming Soon...',
    github: 'http://github.com/AlflenGabriel',
    demo: '/',
    active: false
  },
  {
    id: 4,
    image: IMGX,
    title: 'Coming Soon...',
    github: 'http://github.com/AlflenGabriel',
    demo: '/',
    active: false
  },
  {
    id: 5,
    image: IMGX,
    title: 'Coming Soon...',
    github: 'http://github.com/AlflenGabriel',
    demo: '/',
    active: false
  },
  {
    id: 6,
    image: IMGX,
    title: 'Coming Soon...',
    github: 'http://github.com/AlflenGabriel',
    demo: '/',
    active: false
  }
]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, active}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'
                target='_blank'>Github</a>
                <a href={active ? demo : null} className={`btn btn-primary ${!active ? 'btn--disabled' : ''}`} target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio