import transformDeclPairs from 'css-to-react-native';

export const cssToRN = (cssString: string) => {
  try {
    const unsupportedProps = ['column-gap', 'row-gap'];

    const declPairs: [string, string][] = cssString
      .split(';')
      .map(line => line.trim())
      .filter(Boolean)
      .map(line => {
        const [prop, ...value] = line.split(':');
        return [prop.trim(), value.join(':').trim()] as [string, string];
      })
      .filter(([prop]) => !unsupportedProps.includes(prop));

    return transformDeclPairs(declPairs);
  } catch (error) {
    console.warn('Error transforming CSS:', error);
    return {};
  }
};
