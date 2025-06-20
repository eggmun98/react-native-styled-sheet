import React from 'react';
import { View } from 'react-native';
import { cssToRN } from './utils/cssToRN';

function styled(Component) {
  return function (strings, ...values) {
    return function StyledComponent(props) {
      const cssString = strings.join('');
      
      const style = cssToRN(cssString);

      return React.createElement(Component, {
        ...props,
        style: [style, props.style],
      });
    };
  };
}

styled.View = styled(View);

export default styled; 