import React from 'react';
import { View } from 'react-native';

function styled(Component) {
  return function () {
    return function StyledComponent(props) {
      const style = {};

      return React.createElement(Component, {
        ...props,
        style: [style, props.style],
      });
    };
  };
}

styled.View = styled(View);

export default styled; 