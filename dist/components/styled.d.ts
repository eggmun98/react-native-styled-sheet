import React from 'react';
import { ViewProps, TextProps, TouchableOpacityProps, ScrollViewProps, ImageProps, TextInputProps, FlatListProps, SectionListProps, PressableProps, KeyboardAvoidingViewProps, ModalProps, ActivityIndicatorProps, SwitchProps, StatusBarProps } from 'react-native';
interface SafeAreaViewProps extends ViewProps {
    children?: React.ReactNode;
    edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
    mode?: 'padding' | 'margin';
}
type StyledComponent<P> = React.ForwardRefExoticComponent<P> & {
    attrs?: (attrs: Partial<P>) => StyledComponent<P>;
};
declare const _default: {
    View: (cssStrings: TemplateStringsArray | ((props: ViewProps) => string), ...cssArgs: any[]) => StyledComponent<ViewProps>;
    Text: (cssStrings: TemplateStringsArray | ((props: TextProps) => string), ...cssArgs: any[]) => StyledComponent<TextProps>;
    TouchableOpacity: (cssStrings: TemplateStringsArray | ((props: TouchableOpacityProps) => string), ...cssArgs: any[]) => StyledComponent<TouchableOpacityProps>;
    ScrollView: (cssStrings: TemplateStringsArray | ((props: ScrollViewProps) => string), ...cssArgs: any[]) => StyledComponent<ScrollViewProps>;
    Image: (cssStrings: TemplateStringsArray | ((props: ImageProps) => string), ...cssArgs: any[]) => StyledComponent<ImageProps>;
    TextInput: (cssStrings: TemplateStringsArray | ((props: TextInputProps) => string), ...cssArgs: any[]) => StyledComponent<TextInputProps>;
    FlatList: (cssStrings: TemplateStringsArray | ((props: FlatListProps<any>) => string), ...cssArgs: any[]) => StyledComponent<FlatListProps<any>>;
    SectionList: (cssStrings: TemplateStringsArray | ((props: SectionListProps<any, import("react-native").DefaultSectionT>) => string), ...cssArgs: any[]) => StyledComponent<SectionListProps<any, import("react-native").DefaultSectionT>>;
    Pressable: (cssStrings: TemplateStringsArray | ((props: PressableProps) => string), ...cssArgs: any[]) => StyledComponent<PressableProps>;
    SafeAreaView: (cssStrings: TemplateStringsArray | ((props: SafeAreaViewProps) => string), ...cssArgs: any[]) => StyledComponent<SafeAreaViewProps>;
    KeyboardAvoidingView: (cssStrings: TemplateStringsArray | ((props: KeyboardAvoidingViewProps) => string), ...cssArgs: any[]) => StyledComponent<KeyboardAvoidingViewProps>;
    Modal: (cssStrings: TemplateStringsArray | ((props: ModalProps) => string), ...cssArgs: any[]) => StyledComponent<ModalProps>;
    ActivityIndicator: (cssStrings: TemplateStringsArray | ((props: ActivityIndicatorProps) => string), ...cssArgs: any[]) => StyledComponent<ActivityIndicatorProps>;
    Switch: (cssStrings: TemplateStringsArray | ((props: SwitchProps) => string), ...cssArgs: any[]) => StyledComponent<SwitchProps>;
    StatusBar: (cssStrings: TemplateStringsArray | ((props: StatusBarProps) => string), ...cssArgs: any[]) => StyledComponent<StatusBarProps>;
};
export default _default;
