import React from 'react';
import { cssToRN } from './cssToRN';

/**
 * styled component를 생성하는 핵심 함수
 * @param {React.ComponentType} Component - 래핑할 React Native 컴포넌트
 * @param {string[]} strings - 템플릿 리터럴의 문자열 배열
 * @param {object} attrsProps - attrs()로 전달된 기본 props (선택적)
 * @returns {React.ComponentType} 스타일이 적용된 React 컴포넌트
 */
export const createStyledComponent = (Component, strings, attrsProps) => {
  return function StyledComponent(props) {
    const cssString = strings.join('');
    
    const style = cssToRN(cssString);

    const finalProps = attrsProps ? { ...attrsProps, ...props } : props;

    return React.createElement(Component, {
      ...finalProps,
      style: [style, finalProps.style],
    });
  };
}; 