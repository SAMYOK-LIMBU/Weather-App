import {StyleSheet, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import themes from '../styles/themes';
import CustomText from './CustomText';

const CityContainer = () => {
  return (
    <View style={styles.container}>
      <CustomText text={'city'} fontSize={themes.fontSize.small} />
      <CustomText text={'Jakarta'} fontSize={themes.fontSize.big} />
      <View style={styles.detailsContainer}>
        <View style={styles.dataRow}>
          <CustomText text="Wind" fontSize={themes.fontSize.small} />
          <CustomText
            text="312"
            fontSize={themes.fontSize.heading}
            fontWeight="bold"
          />
        </View>
        <View style={styles.dataRow}>
          <CustomText text="Pressure" fontSize={themes.fontSize.small} />
          <CustomText
            text="312"
            fontSize={themes.fontSize.heading}
            fontWeight="bold"
          />
        </View>
        <View style={styles.dataRow}>
          <CustomText text="Humidity" fontSize={themes.fontSize.small} />
          <CustomText
            text="12 %"
            fontSize={themes.fontSize.heading}
            fontWeight="bold"
          />
        </View>
      </View>
    </View>
  );
};

export default CityContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(30),
    backgroundColor: themes.colors.cityContainerBackground,
    width: moderateScale(260),
    padding: moderateScale(25),
    marginRight: moderateScale(16),
    height: scale(140),
  },
  detailsContainer: {
    marginTop: moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  dataRow: {
    flexDirection: 'column',
  },
});
