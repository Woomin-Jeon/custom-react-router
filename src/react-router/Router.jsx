import React, { useState, useEffect } from 'react';

import RouterContext from './context/RouterContext';
import HistoryContext from './context/HistoryContext';

export default function Router({ history, children }) {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      setLocation(location)
    });

    return () => unlisten();
  });

  useEffect(() => {
    window.addEventListener('popstate', () => {
      const { path } = window.history.state;
      setLocation(path)
    });
  }, []);

  return (
    <RouterContext.Provider value={{ location }}>
      <HistoryContext.Provider value={{ history }}>
        {children}
      </HistoryContext.Provider>
    </RouterContext.Provider>
  );
}
