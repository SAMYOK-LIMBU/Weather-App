import {View, Text} from 'react-native';
import React from 'react';
import themes from '../styles/themes';

const CustomText = ({
  text,
  fontSize,
  color = themes.colors.white,
  fontWeight = 'normal',
}) => {
  return (
    <View>
      <Text style={{fontWeight, fontSize, color}}>{text}</Text>
    </View>
  );
};

export default CustomText;
