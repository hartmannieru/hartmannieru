import React, { createContext, useState } from 'react';
export const CustomContext = createContext();

export const Context = (props) => {
  const [mode, setMode] = useState('light');
  const toggleMode = mode === 'light' ? 'dark' : 'light';

  const value = {
    mode,
    setMode,
    toggleMode
  }

  return <CustomContext.Provider value={value}>
    { props.children }
  </CustomContext.Provider>
}