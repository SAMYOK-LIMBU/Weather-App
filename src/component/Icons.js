import React from 'react';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import themes from '../styles/themes';

const Icons = {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Feather,
};

const Icon = ({
  type,
  name,
  color = themes.colors.black,
  style,
  size = themes.fontSize.heading,
}) => {
  const Tag = Icons[type];

  if (!Tag) {
    console.warn(`Invalid icon type: "${type}".`);
    return null;
  }

  return <Tag name={name} size={size} color={color} style={style} />;
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(Icons)).isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

export default Icon;
