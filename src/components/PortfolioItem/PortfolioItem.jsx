import classes from './PortfolioItem.module.scss';
import portfolioImg from './images/portfolio-img.png';

export const PortfolioItem = ({img, title, subtitle, description, technologies}) => {
  return (
    <div className={classes.portfolioItem}>
      <div className={classes.portfolioItemImg}>
        <img src={portfolioImg} alt={'portfolio-img'} />
      </div>
      <div className={classes.portfolioItemContent}>
        <h4><span>{title}</span>{subtitle}</h4>
        <p>{description}</p>
        <ul>
          {
            technologies.map((technology, index) => {
              return <li key={index}>{technology}</li>
            })
          }
        </ul>
      </div>
      <a href="https://countries-api-sandy.vercel.app/" target="_blank" rel="noopener noreferrer">Go to website</a>
    </div>
  )
}
