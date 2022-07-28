import { PortfolioItem } from '../PortfolioItem';
import DataBasePortfolio from '../../db/portfolio.json';
import classes from './PortfolioList.module.scss';

export const PortfolioList = () => {
  return (
    <div className={classes.portfolioList}>
      {DataBasePortfolio.map((element) => {
        return <PortfolioItem key={element.id} {...element} />;
      })}
    </div>
  );
};
