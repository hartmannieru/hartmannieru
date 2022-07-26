import { GlobalSvgSelector } from '../../images/GlobalSvgSelector';
import classes from './Logo.module.scss';
import LogoSRC from './images/logo.png';

export const Logotype = () => {
  return (
    <div className={classes.logo}>
      <img src={LogoSRC} />
    </div>
  );
};
