import React from 'react';
import { cssToRN } from './cssToRN';

export const createStyledComponent = (Component, strings) => {
  return function StyledComponent(props) {
    const cssString = strings.join('');
    
    const style = cssToRN(cssString);

    return React.createElement(Component, {
      ...props,
      style: [style, props.style],
    });
  };
}; 