import {StyleSheet, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface Props {
  p: number;
}
Page.defaultProps = {
  p: 10,
};
export default function Page({p, children}: PropsWithChildren<Props>) {
  let style = styles.root;
  if (p) {
    style = {
      ...style,
      padding: p,
    };
  }
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 0, backgroundColor: 'white'},
});
