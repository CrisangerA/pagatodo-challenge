import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {MainStyles} from '@components/core/styles';
import {Theme} from '@config/styles';

interface Props {
  mb?: number;
  mr?: number;
  m?: number;
  display: 'flexRowAlignCenter';
}
const Box = ({mb, mr, m, display, children}: PropsWithChildren<Props>) => {
  let style = {...MainStyles[display]};
  if (m) {
    style = {...style, margin: Theme.layout.margin(m)} as any;
  }
  if (mb) {
    style = {...style, marginBottom: Theme.layout.margin(mb)} as any;
  }
  if (mr) {
    style = {...style, marginRight: Theme.layout.margin(mr)} as any;
  }
  if (children) {
    style = {...style, flex: 1} as any;
    return <View style={style}>{children}</View>;
  }
  return <View style={style} />;
};
Box.defaultProps = {
  display: 'none',
};
export default Box;
