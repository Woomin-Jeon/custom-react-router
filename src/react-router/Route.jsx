import React, { useContext } from 'react';

import RouterContext from './context/RouterContext';

export default function Route({ path, component: Component }) {
  const { location } = useContext(RouterContext);
  
  return path.match(location)
    ? <Component />
    : null;
}
