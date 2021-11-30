import { Link } from "react-router-dom"
import { Container } from "../Container"
import { Logotype } from "../Logotype"
import { Mode } from "../Mode"
import { Social } from "../Social/Social";

import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Link className="header__logo" to="/">
            <Logotype />
          </Link>
          <div className={classes.flex}>
            <Social />
            <Mode />
          </div>
        </div>
      </Container>
    </header>
  )
}
