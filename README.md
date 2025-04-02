# react-native-styled-sheet

A replacement library for Styled Components (React Native) utilizing React Native's built-in StyleSheet with familiar Styled Components syntax.

## Why this library?

Due to the end-of-life announcement for Styled Components, this library provides a seamless migration path for users accustomed to Styled Components syntax while leveraging the performance and optimizations of React Native's StyleSheet.

## Installation

```bash
npm install react-native-styled-sheet
```

or with yarn:

```bash
yarn add react-native-styled-sheet
```

## Usage

Here's a quick example of how you can use this library:

```tsx
import styled from 'react-native-styled-sheet';

const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #333;
`;

const Title = styled.Text`
  color: white;
  font-size: 16px;
`;

export default function App() {
  return (
    <Button>
      <Title>Press Me</Title>
    </Button>
  );
}
```

### Dynamic styling with props

```tsx
const Button = styled.TouchableOpacity<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
  padding: 10px;
`;
```

### Extending styled components

```tsx
const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: gray;
`;

const PrimaryButton = styled(Button)`
  background-color: blue;
`;
```

### Using `.attrs()`

```tsx
const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  border: 1px solid #ddd;
  padding: 10px;
`;
```

## Future Plans

- Theme support (dark/light mode) will be added in future releases.