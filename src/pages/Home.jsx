import React, { useContext} from 'react';
import { CustomContext } from '../utils/Context';

import { html, css, js, react, node } from '../images/';
import hand from '../images/hand.png';
import CoffeeLight from '../images/coffee-light.svg';
import CoffeeDark from '../images/coffee-dark.svg';
import PreviewPortfolio from '../images/preview-portfolio.png';
import { Button } from '../components/Button';

export const Home = () => {
  const { mode } = useContext(CustomContext);

  return (
    <main className="home">
      <div className="container">
        <div className='home__container'>
          <section className="home__about about">
            <h2 className="about__title about-title">
              <span className="about-title__text">Hello, World!</span>
              <img className="about-title__img" src={hand} alt={hand} />
            </h2>
            <p className="about__description">Hi! My name is Annie I really love coffee, cats, web design and javascript development</p>
            <section className="about-technology technology">
              <h3 className="technology__title">Technology stack</h3>
              <div className="technology__items">
                <div className="technology__item">
                  <img src={html} alt={html} />
                </div>
                <div className="technology__item">
                  <img src={css} alt={css} />
                </div>
                <div className="technology__item">
                  <img src={js} alt={js} />
                </div>
                <div className="technology__item">
                  <img src={react} alt={react} />
                </div>
                <div className="technology__item">
                  <img src={node} alt={node} />
                </div>
              </div>
            </section>
          </section>
          <section className="home__about preview-portfolio">
            <h2 className='preview-portfolio__title'>Get’s started</h2>          
            <p className='preview-portfolio__description'>I suggest you log in to the site and take a look at my portfolios</p> 
            <img src={PreviewPortfolio} alt={"preview-portfolio"} />
            <Button />
          </section>
          <div className="home__bg">
            <img src={mode === 'light' ? CoffeeLight : CoffeeDark} alt={'coffee'} />
          </div>
        </div>
      </div>
    </main>
  )
}
