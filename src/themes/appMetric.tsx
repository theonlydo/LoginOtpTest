import {Dimensions} from 'react-native';

const appMetrics = {
  gutter: {
    xxxs: 4,
    xxs: 6,
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
    xxxl: 56,
  },
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
};

export default appMetrics;
