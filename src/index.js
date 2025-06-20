import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView, 
  Image,
  ImageBackground,
  TextInput,
  FlatList,
  SectionList,
  VirtualizedList,
  SafeAreaView,
  KeyboardAvoidingView,
  RefreshControl,
  // Modal,
  // ActivityIndicator,
  // Switch,
  // StatusBar,
  // Button
} from 'react-native';
import { cssToRN } from './utils/cssToRN';

function styled(Component) {
  return function (strings) {
    return function StyledComponent(props) {
      const cssString = strings.join('');
      console.log('받은 CSS 문자열:', cssString);
      
      const style = cssToRN(cssString);
      console.log('변환된 스타일:', style);

      return React.createElement(Component, {
        ...props,
        style: [style, props.style],
      });
    };
  };
}

styled.View = styled(View);
styled.Text = styled(Text);
styled.TouchableOpacity = styled(TouchableOpacity);
styled.TouchableHighlight = styled(TouchableHighlight);
styled.TouchableWithoutFeedback = styled(TouchableWithoutFeedback);
styled.Pressable = styled(Pressable);
styled.ScrollView = styled(ScrollView);
styled.Image = styled(Image);
styled.ImageBackground = styled(ImageBackground);
styled.TextInput = styled(TextInput);
styled.FlatList = styled(FlatList);
styled.SectionList = styled(SectionList);
styled.VirtualizedList = styled(VirtualizedList);
styled.SafeAreaView = styled(SafeAreaView);
styled.KeyboardAvoidingView = styled(KeyboardAvoidingView);
styled.RefreshControl = styled(RefreshControl);



export default styled; 