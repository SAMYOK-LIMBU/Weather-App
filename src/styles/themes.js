import {scale} from 'react-native-size-matters';
import {transformer} from '../../metro.config';
import babelConfig from '../../babel.config';

const colors = {
  white: 'white',
  grey: 'grey',
  black: 'black',
  cityContainerBackground: 'rgba(113, 128, 147, 0.6)',
  transparent: 'transparent',
  background: '#6c5ce7',
  cardBackground: 'rgba(220, 221, 225,1.0)',
};
const fontSize = {
  smaller: scale(12),
  small: scale(14),
  big: scale(16),
  bigger: scale(18),
  heading: scale(24),
  large: scale(34),
  aboutTemp: scale(50),
  temperatureSize: scale(74),
};
export default {colors, fontSize};
