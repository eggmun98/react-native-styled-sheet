export const cssToRN = (cssString) => {
    const style = {};
    cssString
        .replace(/\s+/g, '')
        .split(';')
        .filter(Boolean)
        .forEach((line) => {
        const [prop, value] = line.split(':');
        if (!prop || !value)
            return;
        const formattedProp = prop.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        const numericValue = parseFloat(value);
        style[formattedProp] = isNaN(numericValue) ? value : numericValue;
    });
    return style;
};
