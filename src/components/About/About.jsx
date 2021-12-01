import React, { useContext} from 'react';
import { CustomContext } from '../../utils/Context';
import { html, css, js, react, node } from '../../images';
import hand from '../../images/hand.png';
import ZombieLight from '../../images/zombieing-light.svg';
import ZombieDark from '../../images/zombieing-dark.svg';

import classes from './About.module.scss';

export const About = () => {
  const { mode } = useContext(CustomContext);
  
  return (
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
      <div className={classes.bg}>
        <img src={mode === 'light' ? ZombieLight : ZombieDark} alt={'coffee'} />
      </div>
    </section>
  )
}
