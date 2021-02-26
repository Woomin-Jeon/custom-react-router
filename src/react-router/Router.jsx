import React, { useState } from 'react';

import RouterContext from './context/RouterContext';

export default function Router({ children }) {
  const [location, setLocation] = useState(window.location.pathname);  

  return (
    <RouterContext.Provider value={{ location }}>
      {children}
    </RouterContext.Provider>
  );
}
