import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import themes from '../styles/themes';

const SearchComponent = ({city}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="map-marked-alt" style={styles.icon} size={24} />
      <Text style={styles.inputText}>{city || 'Location'}</Text>
      {/* <TextInput style={styles.inputText} value={city || 'Location'} />
      <Icon name="search" style={styles.icon} size={24} /> */}
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: moderateScale(30),
    backgroundColor: 'white',
    padding: moderateScale(8),
    width: '100%',
  },
  inputText: {
    width: '78%',
    fontSize: themes.fontSize.small,
  },
  icon: {
    margin: moderateScale(6),
  },
});
