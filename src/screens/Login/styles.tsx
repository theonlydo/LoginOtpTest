import {appColors} from '@app/themes';
import appMetrics from '@app/themes/appMetric';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    padding: appMetrics.gutter.m,
  },
  form: {
    paddingTop: 50,
    flex: 1,
  },
});

export default styles;
