import { Link } from "react-router-dom";
import classes from './Button.module.scss';

export const Button = () => {
  return (
    <Link className={classes.btn} to="portfolio">
      Кнопка
    </Link>
  )
}
