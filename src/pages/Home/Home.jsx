import { Container } from '../../components/Container';
import { About } from '../../components/About/About';

import classes from './Home.module.scss';
import { PreviewPortfolio } from '../../components/PreviewPortfolio';

export const Home = () => {
  return (
    <main className={classes.home}>
      <Container>
        <div className={classes.container}>
          <About />
          <PreviewPortfolio />
        </div>
      </Container>
    </main>
  )
}
