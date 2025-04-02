import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, FlatList, SectionList, Pressable, SafeAreaView, KeyboardAvoidingView, Modal, ActivityIndicator, Switch, StatusBar, StyleSheet, } from 'react-native';
import { cssToRN } from '../utils/cssToRN';
function styled(Component) {
    return (cssStrings, ...cssArgs) => {
        const StyledComp = forwardRef((props, ref) => {
            const cssString = typeof cssStrings === 'function'
                ? cssStrings(props)
                : cssStrings.reduce((acc, cur, i) => acc + cur + (cssArgs[i]?.(props) || ''), '');
            const rnStyle = StyleSheet.create({ style: cssToRN(cssString) });
            const combinedProps = {
                ...props,
                ref,
                style: [rnStyle.style, props.style],
            };
            return <Component {...combinedProps}/>;
        });
        StyledComp.attrs = (attrs) => {
            const AttrsComp = forwardRef((props, ref) => {
                const combinedProps = { ...attrs, ...props };
                return <StyledComp ref={ref} {...combinedProps}/>;
            });
            return AttrsComp;
        };
        return StyledComp;
    };
}
export default {
    View: styled(View),
    Text: styled(Text),
    TouchableOpacity: styled(TouchableOpacity),
    ScrollView: styled(ScrollView),
    Image: styled(Image),
    TextInput: styled(TextInput),
    FlatList: styled(FlatList),
    SectionList: styled(SectionList),
    Pressable: styled(Pressable),
    SafeAreaView: styled(SafeAreaView),
    KeyboardAvoidingView: styled(KeyboardAvoidingView),
    Modal: styled(Modal),
    ActivityIndicator: styled(ActivityIndicator),
    Switch: styled(Switch),
    StatusBar: styled(StatusBar),
};
