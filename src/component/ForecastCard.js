import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomText from './CustomText';
import themes from '../styles/themes';
import images from '../assets';

const ForecastCard = () => {
  return (
    <View style={styles.card}>
      <CustomText
        text={'Morning'}
        color={themes.colors.black}
        fontSize={themes.fontSize.small}
      />
      <CustomText
        text={'18°C'}
        color={themes.colors.black}
        fontSize={themes.fontSize.small}
      />
      <Image source={images.rain} style={styles.images} />
      <CustomText
        text={'20%'}
        color={themes.colors.black}
        fontSize={themes.fontSize.small}
      />
    </View>
  );
};

export default ForecastCard;

const styles = StyleSheet.create({
  card: {
    marginRight: moderateScale(16),
    height: scale(130),
    width: scale(90),
    padding: moderateScale(12),
    backgroundColor: themes.colors.cardBackground,
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  images: {
    height: 50,
    width: 50,
  },
});
