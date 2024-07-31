import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {moderateScale, scale} from 'react-native-size-matters';
import themes from '../styles/themes';
import CustomText from '../component/CustomText';
import ForecastCard from '../component/ForecastCard';
import images from '../assets';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.firstContainer}>
            <CustomText
              text="Kathmandu, Nepal"
              fontSize={themes.fontSize.big}
            />
            <Image source={images.rain} style={styles.image} />
          </View>
          <View style={styles.secondContainer}>
            <CustomText
              text="18°C"
              fontSize={themes.fontSize.aboutTemp}
              fontWeight="bold"
            />
            <CustomText text="Tuesday, 3 May" fontSize={themes.fontSize.big} />
          </View>
        </View>
      </View>
      <View style={styles.belowContainer}>
        <CustomText
          text={'Forecast'}
          fontSize={themes.fontSize.bigger}
          fontWeight="bold"
          color={themes.colors.black}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.forecast}>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    minHeight: scale(180),
    paddingTop: moderateScale(50),
    paddingBottom: moderateScale(16),
    paddingHorizontal: moderateScale(16),
    backgroundColor: themes.colors.background,
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
  },

  upperContainer: {
    flexDirection: 'column',
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: moderateScale(10),
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  image: {
    height: scale(90),
    width: scale(90),
  },
  belowContainer: {padding: moderateScale(16)},
  forecast: {
    margin: moderateScale(10),
    flexDirection: 'row',
  },
});
