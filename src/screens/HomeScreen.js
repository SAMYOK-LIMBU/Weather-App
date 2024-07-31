import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchComponent from '../component/SearchComponent';
import {moderateScale, scale} from 'react-native-size-matters';
import themes from '../styles/themes';
import CustomText from '../component/CustomText';
import CityContainer from '../component/CityContainer';
import images from '../assets';
const {width} = Dimensions.get('screen');

const HomeScreen = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kathmandu?key=LVHT4EBCMY5TLPMZF4EWCPMJF',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Convert temperature from Fahrenheit to Celsius
        const tempInCelsius = (data.currentConditions.temp - 32) * (5 / 9);
        // Create a new object with the converted temperature
        const updatedWeather = {
          ...data,
          currentConditions: {
            ...data.currentConditions,
            temp: tempInCelsius,
          },
        };
        setWeather(updatedWeather);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <LinearGradient
        colors={['#6c5ce7', '#a29bfe']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.root}>
        <StatusBar
          backgroundColor={'#6c5ce7'}
          translucent={true}
          barStyle="light-content"
        />
        <SafeAreaView style={styles.safeArea}>
          <ActivityIndicator size="large" color="#ffffff" />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  // Determine which image to use based on weather condition
  const weatherCondition = weather?.currentConditions.icon || 'sunny'; // Default to 'sunny' if no condition
  const weatherImage = images[weatherCondition] || images.sunny;
  console.log('Weather Condition Icon:', weather?.currentConditions.icon);

  return (
    <LinearGradient
      colors={['#6c5ce7', '#a29bfe']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.root}>
      <StatusBar
        backgroundColor={'#6c5ce7'}
        translucent={true}
        barStyle="light-content"
      />
      <ScrollView contentContainerStyle={styles.safeArea}>
        <View style={styles.content}>
          <CustomText text="Tuesday, 3 May" fontSize={themes.fontSize.big} />
        </View>
        <SearchComponent city={weather?.resolvedAddress || 'Location'} />
        <View style={styles.tempContent}>
          <View style={styles.imageContainer}>
            <CustomText
              text={`${Math.round(weather?.currentConditions.temp || 0)}°C`}
              fontSize={themes.fontSize.temperatureSize}
              fontWeight="bold"
              style={styles.temperatureText}
            />
            <Image source={weatherImage} style={styles.image} />
          </View>
        </View>
        <ScrollView
          horizontal
          style={styles.detailsScrollView}
          contentContainerStyle={styles.detailsContainer}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.detailsContent}>
            <View style={styles.dataRow}>
              <CustomText text="Wind" fontSize={themes.fontSize.small} />
              <CustomText
                text={`${weather?.currentConditions.windspeed || 'N/A'} mph`}
                fontSize={themes.fontSize.large}
                fontWeight="bold"
              />
            </View>
            <View style={styles.dataRow}>
              <CustomText text="Humidity" fontSize={themes.fontSize.small} />
              <CustomText
                text={`${weather?.currentConditions.humidity || 'N/A'} %`}
                fontSize={themes.fontSize.large}
                fontWeight="bold"
              />
            </View>
            <View style={styles.dataRow}>
              <CustomText text="Pressure" fontSize={themes.fontSize.small} />
              <CustomText
                text={`${weather?.currentConditions.pressure || 'N/A'} hPa`}
                fontSize={themes.fontSize.large}
                fontWeight="bold"
              />
            </View>
            <View style={styles.dataRow}>
              <CustomText text="Visibility" fontSize={themes.fontSize.small} />
              <CustomText
                text={`${weather?.currentConditions.visibility || 'N/A'} miles`}
                fontSize={themes.fontSize.large}
                fontWeight="bold"
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.cityContainer}>
          <CustomText text={'Other City'} fontSize={themes.fontSize.big} />
          <CustomText text={'View All'} fontSize={themes.fontSize.big} />
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContent}
          showsHorizontalScrollIndicator={false}>
          <CityContainer />
          <CityContainer />
          <CityContainer />
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: moderateScale(12),
  },
  content: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(12),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
    justifyContent: 'space-between',
  },
  image: {
    height: scale(140),
    width: scale(140),
  },
  tempContent: {
    marginTop: moderateScale(40),
    marginBottom: moderateScale(12),
  },
  text: {
    fontSize: themes.fontSize.big,
    fontWeight: 'bold',
    color: themes.colors.white,
  },
  dataRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(10),
    marginVertical: scale(5),
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateScale(18),
  },
  temperatureText: {
    fontSize: themes.fontSize.temperatureSize,
    fontWeight: 'bold',
    color: themes.colors.white,
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  detailsScrollView: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(12),
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContent: {
    flexDirection: 'row',
  },
});
