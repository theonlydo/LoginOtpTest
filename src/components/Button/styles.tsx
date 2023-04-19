import {appColors} from '@app/themes';
import appMetrics from '@app/themes/appMetric';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: appMetrics.gutter.s,
    alignItems: 'center',
  },
  text: {
    color: appColors.white,
  },
});

export default styles;
