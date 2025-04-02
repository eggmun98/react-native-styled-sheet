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

export default styled;

export const Styled = {
  View: styled<ViewProps>(View),
  Text: styled<TextProps>(Text),
  TouchableOpacity: styled<TouchableOpacityProps>(TouchableOpacity),
  ScrollView: styled<ScrollViewProps>(ScrollView),
  Image: styled<ImageProps>(Image),
  TextInput: styled<TextInputProps>(TextInput),
  FlatList: styled<FlatListProps<any>>(FlatList),
  SectionList: styled<SectionListProps<any>>(SectionList),
  Pressable: styled<PressableProps>(Pressable),
  SafeAreaView: styled<SafeAreaViewProps>(SafeAreaView),
  KeyboardAvoidingView: styled<KeyboardAvoidingViewProps>(KeyboardAvoidingView),
  Modal: styled<ModalProps>(Modal),
  ActivityIndicator: styled<ActivityIndicatorProps>(ActivityIndicator),
  Switch: styled<SwitchProps>(Switch),
  StatusBar: styled<StatusBarProps>(StatusBar),
};
