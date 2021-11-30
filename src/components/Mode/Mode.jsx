import React, { useContext, useEffect } from 'react';
import { CustomContext } from '../../utils/Context';
import Moon from './images/icon-moon.svg';
import Sun from './images/icon-sun.svg';

export const Mode = (props) => {
  const { mode, setMode, toggleMode } = useContext(CustomContext);

  useEffect(() => {
    document.body.setAttribute('data-mode', mode)
  }, [mode]);

  return (
    <div className="mode" onClick={() => setMode(toggleMode)}>
      <img src={ mode === 'light' ? Moon : Sun } alt="mode" />
    </div>
  )
}
