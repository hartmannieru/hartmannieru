import classes from './PortfolioItem.module.scss';

export const PortfolioItem = ({img, title, subtitle, description, link, technologies}) => {
  return (
    <div className={classes.portfolioItem}>
      <div className={classes.portfolioItemImg}>
        <img src={img} alt={'portfolio-img'} />
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
      <a href={link} target="_blank" rel="noopener noreferrer">Go to website</a>
    </div>
  )
}
