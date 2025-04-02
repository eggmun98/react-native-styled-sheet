import React, { forwardRef, PropsWithoutRef, ForwardedRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  SectionList,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator,
  Switch,
  StatusBar,
  StyleSheet,
  ViewProps,
  TextProps,
  TouchableOpacityProps,
  ScrollViewProps,
  ImageProps,
  TextInputProps,
  FlatListProps,
  SectionListProps,
  PressableProps,
  KeyboardAvoidingViewProps,
  ModalProps,
  ActivityIndicatorProps,
  SwitchProps,
  StatusBarProps,
} from 'react-native';
import transformDeclPairs from 'css-to-react-native';
import { cssToRN } from '../utils/cssToRN';

interface SafeAreaViewProps extends ViewProps {
  children?: React.ReactNode;
  edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
  mode?: 'padding' | 'margin';
}

type RNComponentProps = { style?: any; [key: string]: any };

type StyledComponent<P> = React.ForwardRefExoticComponent<P> & {
  attrs: (attrs: Partial<P>) => StyledComponent<P>;
};

function styled<P extends RNComponentProps>(Component: React.ComponentType<P>) {
  const createStyled = (
    cssStrings: TemplateStringsArray | ((props: PropsWithoutRef<P>) => string),
    ...cssArgs: any[]
  ): StyledComponent<P> => {
    type Props = P & { style?: any };

    const StyledComp = forwardRef<any, Props>((props, ref) => {
      const cssString =
        typeof cssStrings === 'function'
          ? cssStrings(props)
          : cssStrings.reduce((acc, cur, i) => {
              let value = cssArgs[i];
              if (typeof value === 'function') {
                value = value(props);
              } else if (typeof value === 'undefined') {
                value = '';
              } else {
                value = String(value);
              }
              return acc + cur + value;
            }, '');

      const rnStyle = StyleSheet.create({ style: cssToRN(cssString) });

      const combinedProps = {
        ...props,
        style: [rnStyle.style, props.style],
        ref,
      } as Props;

      return <Component {...combinedProps} />;
    }) as StyledComponent<P>;

    StyledComp.attrs = (attrs: Partial<P>) => {
      const AttrsComponent = forwardRef((props: PropsWithoutRef<P>, ref: ForwardedRef<any>) => (
        <StyledComp ref={ref} {...(attrs as P)} {...props} />
      ));
      return AttrsComponent as StyledComponent<P>;
    };

    return StyledComp;
  };

  return createStyled;
}

const baseStyled = styled as typeof styled & {
  View: ReturnType<typeof styled<ViewProps>>;
  Text: ReturnType<typeof styled<TextProps>>;
  TouchableOpacity: ReturnType<typeof styled<TouchableOpacityProps>>;
  ScrollView: ReturnType<typeof styled<ScrollViewProps>>;
  Image: ReturnType<typeof styled<ImageProps>>;
  TextInput: ReturnType<typeof styled<TextInputProps>>;
  FlatList: ReturnType<typeof styled<FlatListProps<any>>>;
  SectionList: ReturnType<typeof styled<SectionListProps<any, any>>>;
  Pressable: ReturnType<typeof styled<PressableProps>>;
  SafeAreaView: ReturnType<typeof styled<SafeAreaViewProps>>;
  KeyboardAvoidingView: ReturnType<typeof styled<KeyboardAvoidingViewProps>>;
  Modal: ReturnType<typeof styled<ModalProps>>;
  ActivityIndicator: ReturnType<typeof styled<ActivityIndicatorProps>>;
  Switch: ReturnType<typeof styled<SwitchProps>>;
  StatusBar: ReturnType<typeof styled<StatusBarProps>>;
};

baseStyled.View = styled(View);
baseStyled.Text = styled(Text);
baseStyled.TouchableOpacity = styled(TouchableOpacity);
baseStyled.ScrollView = styled(ScrollView);
baseStyled.Image = styled(Image);
baseStyled.TextInput = styled(TextInput);
baseStyled.FlatList = styled(FlatList);
baseStyled.SectionList = styled(SectionList);
baseStyled.Pressable = styled(Pressable);
baseStyled.SafeAreaView = styled(SafeAreaView);
baseStyled.KeyboardAvoidingView = styled(KeyboardAvoidingView);
baseStyled.Modal = styled(Modal);
baseStyled.ActivityIndicator = styled(ActivityIndicator);
baseStyled.Switch = styled(Switch);
baseStyled.StatusBar = styled(StatusBar);

export default baseStyled;
