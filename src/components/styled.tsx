import React, { forwardRef, ComponentType, PropsWithoutRef } from 'react';
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
  attrs?: (attrs: Partial<P>) => StyledComponent<P>;
};

function styled<P extends RNComponentProps>(
  Component: React.ComponentType<P> | StyledComponent<P>,
) {
  return (
    cssStrings: TemplateStringsArray | ((props: PropsWithoutRef<P>) => string),
    ...cssArgs: any[]
  ): StyledComponent<P> => {
    type Props = P & { style?: any };

    const StyledComp = forwardRef<any, P>((props, ref) => {
      const cssString =
        typeof cssStrings === 'function'
          ? cssStrings(props)
          : cssStrings.reduce((acc, cur, i) => {
              let value = cssArgs[i];
              if (typeof value === 'function') {
                value = value(props);
              } else if (typeof value === 'undefined') {
                value = '';
              }
              return acc + cur + value;
            }, '');
    
      const rnStyle = StyleSheet.create({ style: cssToRN(cssString) });
    
      const combinedProps = {
        ...props,
        ref,
        style: [rnStyle.style, props.style],
      } as P;
    
      return <Component {...combinedProps} />;
    }) as StyledComponent<P>;

    StyledComp.attrs = (attrs: Partial<P>) => {
      const AttrsComp = forwardRef<any, Props>((props, ref) => {
        const combinedProps = { ...attrs, ...props } as P;
        return <StyledComp ref={ref} {...combinedProps} />;
      });

      return AttrsComp as StyledComponent<P>;
    };

    return StyledComp;
  };
}

export default {
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