import transformDeclPairs from 'css-to-react-native';

/**
 * CSS 문자열을 React Native 스타일 객체로 변환하는 함수
 * @param {string} cssString - 변환할 CSS 문자열 (예: "background-color: red; padding: 20px;")
 * @returns {object} React Native 스타일 객체 (예: { backgroundColor: 'red', paddingTop: 20, ... })
 */
export const cssToRN = (cssString) => {
  try {
    if (!cssString || !cssString.trim()) {
      return {};
    }

    const declPairs = cssString
      .split(';')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [prop, ...value] = line.split(':');
        return [prop.trim(), value.join(':').trim()];
      })
      .filter(([prop, value]) => prop && value);

    return transformDeclPairs(declPairs);
  } catch (error) {
    console.warn('Error transforming CSS to React Native style:', error);
    return {};
  }
}; 