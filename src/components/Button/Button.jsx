import { Link } from "react-router-dom";
import classes from './Button.module.scss';

export const Button = ({children}) => {
  return (
    <Link className={classes.btn} to="portfolio">
      {children}
    </Link>
  )
}
