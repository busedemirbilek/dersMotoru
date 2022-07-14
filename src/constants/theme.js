import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#65348f',
  secondary: '#000020',

  success: '#00C851',
  error: '#ff4444',

  black: '#171717',
  white: '#FFFFFF',
  red:'#F5F5F7',
  background: '#f4f4f4',
  border: '#F5F5F7',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
