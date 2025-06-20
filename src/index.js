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
} from 'react-native';
import { createStyledComponent } from './utils/createStyledComponent';

function styled(Component) {
  const createStyled = function (strings) {
    return createStyledComponent(Component, strings);
  };
  return createStyled;
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