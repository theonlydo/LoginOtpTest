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
    paddingTop: appMetrics.gutter.xl,
    flex: 1,
  },
  textLogin: {
    textAlign: 'center',
  },
});

export default styles;
