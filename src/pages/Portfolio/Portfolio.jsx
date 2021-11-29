import React from 'react';
import { Container } from '../../components/Container';
import { PortfolioList } from '../../components/PortfolioList/PortfolioList';
import classes from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <main className={classes.portfolio}>
      <Container>
        <PortfolioList />
      </Container>
    </main>
  )
}
