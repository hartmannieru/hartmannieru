import { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import GitHubLight from './images/github.svg';
import GitHubDark from './images/github-dark.svg';
import classes from './Social.module.scss';

export const Social = () => {
  const { mode } = useContext(CustomContext);

  return (
    <div className={classes.social}>
      <a className={classes.icon} href='https://github.com/hartmannieru' target='_blank' rel='noopener noreferrer'>
        <img src={mode === 'light' ? GitHubLight : GitHubDark} alt={'github-icon'} />
      </a>
    </div>
  )
}
