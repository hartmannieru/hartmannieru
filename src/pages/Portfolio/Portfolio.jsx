import React from 'react';
import { Container } from '../../components/Container';
import { PortfolioItem } from '../../components/PortfolioItem';
import classes from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <Container>
        <PortfolioItem />
      </Container>
    </div>
  )
}
