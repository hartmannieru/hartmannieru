import classes from './PortfolioItem.module.scss';
import portfolioImg from './images/portfolio-img.png';

export const PortfolioItem = () => {
  return (
    <div className={classes.portfolioItem}>
      <img src={portfolioImg} alt={'portfolio-img'} />
      <h4><span>REST Countries API</span>with color theme switcher</h4>
      <p>If you're wanting to  test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.</p>
      <ul>
        <li>#HTML</li>
        <li>#CSS</li>
        <li>#JS</li>
        <li>#React</li>
      </ul>
    </div>
  )
}
