import transformDeclPairs from 'css-to-react-native';

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