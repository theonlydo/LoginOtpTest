import {appColors} from '@app/themes';
import appMetrics from '@app/themes/appMetric';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: appMetrics.gutter.m,
    backgroundColor: appColors.white,
  },
  textTitle: {
    marginTop: appMetrics.gutter.l,
    fontWeight: 'bold',
    fontSize: 20,
    color: appColors.black,
    textAlign: 'center',
    marginBottom: appMetrics.gutter.xs,
  },
  textSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default styles;
