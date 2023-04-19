import {appColors} from '@app/themes';
import appMetrics from '@app/themes/appMetric';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: appMetrics.gutter.s,
  },
  input: {
    backgroundColor: appColors.gray25,
    borderRadius: appMetrics.gutter.m,
    paddingHorizontal: appMetrics.gutter.m,
  },
  errorText: {
    color: appColors.error,
    fontSize: 11,
    marginLeft: appMetrics.gutter.s,
  },
});

export default styles;
