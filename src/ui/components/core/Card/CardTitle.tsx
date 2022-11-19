import {Text} from 'react-native';
import React from 'react';
import {cardStyles as styles} from '../styles';

const CardTitle = ({title, ...props}: any) => {
  return (
    <Text style={styles.cardTitle} {...props}>
      {title}
    </Text>
  );
};

export default CardTitle;
