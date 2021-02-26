import React, { useContext } from 'react';

import RouterContext from './context/RouterContext';

export default function Switch({ children }) {
  const { location } = useContext(RouterContext);

  const childrenType = toString.call(children);
  const routes = childrenType === '[object Array]' ? children : [children];
  
  const targetElement = routes.find(route => route.props.path === location);

  return targetElement;
}
